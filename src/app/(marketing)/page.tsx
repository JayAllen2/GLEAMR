import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                The All-in-One Platform for Cleaning Businesses
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Manage your clients, bookings, and invoices in one place. Give your customers a premium booking experience.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Link href="/register">
                                <Button size="lg">Get Started for Free</Button>
                            </Link>
                            <Link href="#features">
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                Key Features
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Everything You Need to Run Your Business
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Stop juggling spreadsheets and text messages. GLEAMR provides a professional suite of tools designed specifically for cleaning services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Client Portal</CardTitle>
                                <CardDescription>
                                    Give your clients a professional dashboard to book services and view history.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Self-service booking</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Instant pricing quotes</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Smart Scheduling</CardTitle>
                                <CardDescription>
                                    Manage your team's schedule and avoid double-bookings effortlessly.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Drag-and-drop calendar</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Automated reminders</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Invoicing & Payments</CardTitle>
                                <CardDescription>
                                    Get paid faster with automated invoicing and secure online payments.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Auto-generated invoices</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Payment tracking</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                                Pricing
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Start for free, upgrade as you grow. No hidden fees.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Starter</CardTitle>
                                <CardDescription>For solo cleaners just starting out.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-3xl font-bold">$0</div>
                                <div className="text-sm text-muted-foreground mb-4">/month</div>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Up to 10 clients</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Basic booking page</span>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button className="w-full" variant="outline">Get Started</Button>
                            </div>
                        </Card>
                        <Card className="flex flex-col border-primary relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg">
                                Popular
                            </div>
                            <CardHeader>
                                <CardTitle>Professional</CardTitle>
                                <CardDescription>For growing cleaning businesses.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-3xl font-bold">$29</div>
                                <div className="text-sm text-muted-foreground mb-4">/month</div>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Unlimited clients</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Custom branding</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">SMS reminders</span>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button className="w-full">Start Free Trial</Button>
                            </div>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Enterprise</CardTitle>
                                <CardDescription>For large teams and franchises.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-3xl font-bold">$99</div>
                                <div className="text-sm text-muted-foreground mb-4">/month</div>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Multiple territories</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Advanced reporting</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">Priority support</span>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button className="w-full" variant="outline">Contact Sales</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
