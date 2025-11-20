import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin } from "lucide-react"

export default async function ClientDashboardPage({ params }: { params: Promise<{ tenantId: string }> }) {
    const { tenantId } = await params
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">My Bookings</h1>
                <p className="text-muted-foreground">Manage your upcoming and past cleaning appointments.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Upcoming</h2>
                {/* Placeholder for upcoming bookings */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Standard Cleaning</CardTitle>
                            <Badge>Confirmed</Badge>
                        </div>
                        <CardDescription>Booking #BK-1234</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                <span>Oct 24, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>10:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>123 Main St, Apt 4B</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Past</h2>
                {/* Placeholder for past bookings */}
                <Card className="opacity-75">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Deep Cleaning</CardTitle>
                            <Badge variant="secondary">Completed</Badge>
                        </div>
                        <CardDescription>Booking #BK-0987</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                <span>Sep 15, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>09:00 AM - 02:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>123 Main St, Apt 4B</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
