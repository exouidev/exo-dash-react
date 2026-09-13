
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function ProgressPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Progress & Loading</h2>
        <p className="text-muted-foreground mt-2">Display indicators for underlying asynchronous tasks.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Progress Bars</CardTitle>
            <CardDescription>Linear completion tracking.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">File Upload</span>
                <span className="text-muted-foreground">33%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[33%] bg-primary transition-all duration-500"></div>
              </div>
            </div>
            
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">System Update</span>
                <span className="text-muted-foreground">87%</span>
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-primary/20">
                <div className="h-full w-[87%] bg-primary transition-all duration-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Spinners</CardTitle>
            <CardDescription>Indeterminate loading animations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex h-24 items-center justify-center rounded-lg border bg-card">
                <Circle className="h-8 w-8 animate-spin text-primary" />
              </div>
              
              <div className="flex h-24 items-center justify-center rounded-lg border bg-card">
                <Circle className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
              
              <div className="flex h-24 items-center justify-center rounded-lg border bg-card">
                <div className="flex items-center space-x-2">
                   <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
                   <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
                   <div className="h-3 w-3 animate-bounce rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}
