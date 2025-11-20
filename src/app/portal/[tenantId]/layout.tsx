import Link from "next/link"

export default async function PortalLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ tenantId: string }>
}) {
    const { tenantId } = await params
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl">
                        {/* In a real app, we would fetch the tenant name here */}
                        Cleaning Service
                    </div>
                    <nav className="space-x-4">
                        <Link href={`/portal/${tenantId}/book`} className="text-sm font-medium hover:underline">
                            Book Now
                        </Link >
                    </nav >
                </div >
            </header >
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div >
    )
}
