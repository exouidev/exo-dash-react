
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function AlertsPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Alerts</h2>
        <p className="text-muted-foreground mt-2">Display a callout for user attention.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Default Style</CardTitle>
            <CardDescription>A standard alert component.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11">
              <Terminal className="h-4 w-4" />
              <h5 className="mb-1 font-medium leading-none tracking-tight">CLI Engine Started</h5>
              <div className="text-sm [&_p]:leading-relaxed text-muted-foreground">
                You can now interface using standard terminal commands.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Destructive</CardTitle>
            <CardDescription>Alerts indicating a failure or danger.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="relative w-full rounded-lg border border-destructive/50 text-destructive dark:border-destructive p-4 [&>svg]:absolute [&>svg]:text-destructive [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11">
              <AlertCircle className="h-4 w-4" />
              <h5 className="mb-1 font-medium leading-none tracking-tight">Error Parsing Data</h5>
              <div className="text-sm [&_p]:leading-relaxed text-destructive/90">
                Your session has expired. Please log in again to continue this operation.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Inline Actions</CardTitle>
            <CardDescription>Alert blocks containing structural workflows.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-primary [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 border-primary/20 bg-primary/5">
              <Rocket className="h-4 w-4" />
              <h5 className="mb-1 font-medium leading-none tracking-tight text-primary">New features available</h5>
              <div className="text-sm [&_p]:leading-relaxed text-muted-foreground mt-2">
                We've significantly upgraded the dashboard engine. Check out the release notes to see what's new.
              </div>
              <div className="mt-4 flex gap-2">
                <Button size="sm">Read Notes</Button>
                <Button variant="outline" size="sm">Dismiss</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Success</CardTitle>
            <CardDescription>Favorable process confirmations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div className="relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-green-600 [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 border-green-600/20 bg-green-500/10 dark:bg-green-500/5">
              <CheckCircle2 className="h-4 w-4" />
              <h5 className="mb-1 font-medium leading-none tracking-tight text-green-700 dark:text-green-500">Operation Successful</h5>
              <div className="text-sm [&_p]:leading-relaxed text-green-600 dark:text-green-400 mt-2">
                The database migration completed accurately with exactly 0 dropped packets.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}
