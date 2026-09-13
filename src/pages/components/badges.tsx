
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function BadgesPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Badges</h2>
        <p className="text-muted-foreground mt-2">Versatile pill-shaped visual indicators.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Standard theme variations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Combine text constraints with inline SVGs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4">
            <Badge variant="default">
              <Check className="mr-1 h-3 w-3" /> Success
            </Badge>
            <Badge variant="destructive">
              <AlertCircle className="mr-1 h-3 w-3" /> Failed
            </Badge>
            <Badge variant="secondary">
              <Circle className="mr-1 h-3 w-3" /> Pending
            </Badge>
            <Badge variant="outline">
               New <Circle className="ml-1 h-3 w-3" />
            </Badge>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 block">
          <CardHeader>
            <CardTitle>Table Integration</CardTitle>
            <CardDescription>Applying badges to semantic data grid contexts.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="w-full rounded-md border">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="h-10 px-4 text-left font-medium text-muted-foreground align-middle">Invoice</th>
                    <th className="h-10 px-4 text-left font-medium text-muted-foreground align-middle">Status</th>
                    <th className="h-10 px-4 text-left font-medium text-muted-foreground align-middle">Method</th>
                    <th className="h-10 px-4 text-right font-medium text-muted-foreground align-middle">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 align-middle font-medium">INV001</td>
                    <td className="p-4 align-middle"><Badge variant="default">Paid</Badge></td>
                    <td className="p-4 align-middle">Credit Card</td>
                    <td className="p-4 align-middle text-right">$250.00</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 align-middle font-medium">INV002</td>
                    <td className="p-4 align-middle"><Badge variant="secondary">Pending</Badge></td>
                    <td className="p-4 align-middle">PayPal</td>
                    <td className="p-4 align-middle text-right">$150.00</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 align-middle font-medium">INV003</td>
                    <td className="p-4 align-middle"><Badge variant="destructive">Unpaid</Badge></td>
                    <td className="p-4 align-middle">Bank Transfer</td>
                    <td className="p-4 align-middle text-right">$350.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}
