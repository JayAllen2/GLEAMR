import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { businessName, slug, email, password } = body

        if (!businessName || !slug || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        // Check if tenant slug already exists
        const existingTenant = await prisma.tenant.findUnique({
            where: { slug },
        })

        if (existingTenant) {
            return NextResponse.json(
                { error: "Business name is already taken. Please try a different one." },
                { status: 400 }
            )
        }

        // Check if user email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { error: "Email is already registered." },
                { status: 400 }
            )
        }

        // Create Tenant and User in a transaction
        // Note: In a real app, we would hash the password. For this demo, we store it plainly (NOT SECURE).
        // I will add a TODO to hash it later or use an auth provider.
        const result = await prisma.$transaction(async (tx) => {
            const tenant = await tx.tenant.create({
                data: {
                    name: businessName,
                    slug,
                },
            })

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await tx.user.create({
                data: {
                    email,
                    name: businessName, // Default name to business name for now
                    passwordHash: hashedPassword,
                    role: "OWNER",
                    tenantId: tenant.id,
                },
            })

            return { tenant, user }
        })

        return NextResponse.json({ success: true, tenantId: result.tenant.id, slug: result.tenant.slug })
    } catch (error) {
        console.error("Registration error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
