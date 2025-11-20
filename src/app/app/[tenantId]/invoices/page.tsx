import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

export default async function InvoicesPage({ params }: { params: Promise<{ tenantId: string }> }) {
    const { tenantId } = await params
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Invoices</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Invoice
                </Button>
            </div>
            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Olivia Martin</TableCell>
                            <TableCell><Badge>Paid</Badge></TableCell>
                            <TableCell>Oct 24, 2025</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Jackson Lee</TableCell>
                            <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                            <TableCell>Oct 25, 2025</TableCell>
                            <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV003</TableCell>
                            <TableCell>Isabella Nguyen</TableCell>
                            <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                            <TableCell>Oct 10, 2025</TableCell>
                            <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
