
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function EmptyStatesPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Empty States</h2>
        <p className="text-muted-foreground mt-2">Screens displayed when a list is empty or an error occurs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>No Content Found</CardTitle>
            <CardDescription>Standard list empty state.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Circle className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">No messages</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">You have completely caught up with your inbox.</p>
              </div>
              <Button variant="outline" size="sm" className="mt-4">Refresh Inbox</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Call to Action</CardTitle>
            <CardDescription>Prompts user to create initial state.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center p-6 border-2 border-dashed border-muted m-6 mt-0 rounded-lg bg-muted/10">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Circle className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Create a project</h3>
                <p className="text-sm text-muted-foreground max-w-[250px]">You don't have any projects yet. Create one to get started.</p>
              </div>
              <Button className="mt-2">New Project</Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  </>
  )
}
