import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Calendar, CreditCard, Settings, LogOut } from "lucide-react"

export default async function TenantLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ tenantId: string }>
}) {
    const { tenantId } = await params

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full border-r bg-muted/40 md:w-64 md:flex-col">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href={`/app/${tenantId}/dashboard`} className="flex items-center gap-2 font-semibold">
                        <span className="">GLEAMR</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href={`/app/${tenantId}/dashboard`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href={`/app/${tenantId}/crm`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Users className="h-4 w-4" />
                            CRM
                        </Link>
                        <Link
                            href={`/app/${tenantId}/schedule`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Calendar className="h-4 w-4" />
                            Schedule
                        </Link>
                        <Link
                            href={`/app/${tenantId}/invoices`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <CreditCard className="h-4 w-4" />
                            Invoices
                        </Link>
                        <Link
                            href={`/app/${tenantId}/settings`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Link href="/login">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log Out
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
            </main>
        </div>
    )
}
