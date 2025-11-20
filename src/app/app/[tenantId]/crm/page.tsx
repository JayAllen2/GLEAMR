import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"

export default async function CRMPage({ params }: { params: Promise<{ tenantId: string }> }) {
    const { tenantId } = await params
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Customer
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search customers..."
                        className="pl-8 w-full md:w-[300px]"
                    />
                </div>
            </div>
            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Last Booking</TableHead>
                            <TableHead className="text-right">Total Spent</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Olivia Martin</TableCell>
                            <TableCell>olivia.martin@email.com</TableCell>
                            <TableCell>+1 (555) 123-4567</TableCell>
                            <TableCell>Oct 24, 2025</TableCell>
                            <TableCell className="text-right">$1,999.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Jackson Lee</TableCell>
                            <TableCell>jackson.lee@email.com</TableCell>
                            <TableCell>+1 (555) 987-6543</TableCell>
                            <TableCell>Sep 15, 2025</TableCell>
                            <TableCell className="text-right">$39.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Isabella Nguyen</TableCell>
                            <TableCell>isabella.nguyen@email.com</TableCell>
                            <TableCell>+1 (555) 456-7890</TableCell>
                            <TableCell>Aug 10, 2025</TableCell>
                            <TableCell className="text-right">$299.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
