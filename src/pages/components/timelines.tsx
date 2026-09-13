
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function TimelinesPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Timelines & Feeds</h2>
        <p className="text-muted-foreground mt-2">Vertical list of sequential events or history tracking.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>Tracking team interaction history.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
              
              {/*  Item 1  */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary text-primary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <Check className="h-4 w-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-medium text-sm">Deployment Successful</div>
                    <time className="text-xs text-muted-foreground font-medium">10:24 AM</time>
                  </div>
                  <div className="text-sm text-muted-foreground">Version 2.3.1 shipped to production servers smoothly.</div>
                </div>
              </div>
              
              {/*  Item 2  */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted text-muted-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <Circle className="h-4 w-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border bg-card shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-medium text-sm">Pull Request Merged</div>
                    <time className="text-xs text-muted-foreground font-medium">9:12 AM</time>
                  </div>
                  <div className="text-sm text-muted-foreground">Sarah merged 12 commits into main branch.</div>
                </div>
              </div>

              {/*  Item 3  */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-destructive/10 text-destructive shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <Circle className="h-4 w-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-destructive/20 bg-card shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-medium text-sm text-destructive">Build Failed</div>
                    <time className="text-xs text-muted-foreground font-medium">Yesterday</time>
                  </div>
                  <div className="text-sm text-muted-foreground">CI pipeline failed during integration tests.</div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Simple Steps</CardTitle>
            <CardDescription>Ordered visual steps layout.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pt-6">
            <ol className="relative border-l border-muted ml-3">                  
                <li className="mb-10 pl-6">            
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-4 ring-background">
                        <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                    <h3 className="font-medium leading-tight">Personal Info</h3>
                    <p className="text-sm text-muted-foreground mt-1">Provide your initial registration details.</p>
                </li>
                <li className="mb-10 pl-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-4 ring-background">
                        <span className="text-xs text-primary-foreground font-medium">2</span>
                    </span>
                    <h3 className="font-medium leading-tight">Account Setup</h3>
                    <p className="text-sm text-muted-foreground mt-1">Link your active enterprise environment endpoints.</p>
                </li>
                <li className="pl-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-muted rounded-full -left-3 ring-4 ring-background">
                        <span className="text-xs text-muted-foreground font-medium">3</span>
                    </span>
                    <h3 className="font-medium leading-tight text-muted-foreground">Review</h3>
                    <p className="text-sm text-muted-foreground mt-1">Final confirmation of account boundaries.</p>
                </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}
