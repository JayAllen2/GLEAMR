import Link from "next/link"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className="bg-slate-900 text-white">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl">
                        GLEAMR Super Admin
                    </div>
                    <nav className="space-x-4">
                        <Link href="/admin" className="text-sm font-medium hover:text-slate-300">
                            Tenants
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}
