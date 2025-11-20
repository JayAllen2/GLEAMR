"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { use } from "react"

export default function BookingPage({ params }: { params: Promise<{ tenantId: string }> }) {
    const { tenantId } = use(params)
    const [date, setDate] = useState<Date>()
    const [serviceType, setServiceType] = useState("standard")
    const [bedrooms, setBedrooms] = useState(1)
    const [bathrooms, setBathrooms] = useState(1)

    // Simple pricing logic
    const basePrice = 50
    const bedroomPrice = 20
    const bathroomPrice = 15
    const serviceMultipliers: Record<string, number> = {
        standard: 1,
        deep: 1.5,
        move: 2,
    }

    const calculateTotal = () => {
        const subtotal = basePrice + (bedrooms * bedroomPrice) + (bathrooms * bathroomPrice)
        return subtotal * (serviceMultipliers[serviceType] || 1)
    }

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Book Your Cleaning</h1>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Service Details</CardTitle>
                            <CardDescription>Customize your cleaning service.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Service Type</Label>
                                <Select value={serviceType} onValueChange={setServiceType}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="standard">Standard Cleaning</SelectItem>
                                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                                        <SelectItem value="move">Move In/Out</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Bedrooms</Label>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                                        >
                                            -
                                        </Button>
                                        <span className="w-8 text-center">{bedrooms}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setBedrooms(bedrooms + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Bathrooms</Label>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                                        >
                                            -
                                        </Button>
                                        <span className="w-8 text-center">{bathrooms}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setBathrooms(bathrooms + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Date & Time</CardTitle>
                            <CardDescription>When should we come?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-2">
                                <Label>Select Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="sticky top-4">
                        <CardHeader>
                            <CardTitle>Booking Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Service</span>
                                <span className="capitalize">{serviceType}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Bedrooms</span>
                                <span>{bedrooms}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Bathrooms</span>
                                <span>{bathrooms}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${calculateTotal()}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Book Now</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
