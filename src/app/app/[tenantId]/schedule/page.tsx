"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { use } from "react"

export default function SchedulePage({ params }: { params: Promise<{ tenantId: string }> }) {
    const { tenantId } = use(params)
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold md:text-2xl">Schedule</h1>
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Appointments for {date?.toDateString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Placeholder appointments */}
                            <div className="flex items-center justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium">Olivia Martin - Standard Cleaning</p>
                                    <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
                                </div>
                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Confirmed</div>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2">
                                <div>
                                    <p className="font-medium">Jackson Lee - Deep Cleaning</p>
                                    <p className="text-sm text-muted-foreground">02:00 PM - 05:00 PM</p>
                                </div>
                                <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
