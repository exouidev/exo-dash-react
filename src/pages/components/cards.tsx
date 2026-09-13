
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function CardsPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Cards</h2>
        <p className="text-muted-foreground mt-2">Surface elements containing distinct groupings of related information.</p>
      </div>

      
      <div className="space-y-8">
        
        {/*  Standard Interactive Cards  */}
        <div>
          <h3 className="font-medium text-muted-foreground mb-4">Standard Layouts</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/*  Create Project Card  */}
            <Card className="block h-full h-full flex flex-col">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <form className="space-y-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-sm font-medium leading-none" htmlFor="name">Name</label>
                    <input id="name" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Name of your project" />
                  </div>
                </form>
              </CardContent>
              <div className="flex items-center p-6 pt-0 justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </div>
            </Card>

            {/*  Interactive Notification  */}
            <Card className="block h-full h-full flex flex-col">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 grid gap-4">
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary"></span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Your call has been confirmed.</p>
                    <p className="text-sm text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary"></span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">You have a new message!</p>
                    <p className="text-sm text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/*  Horizontal Profile Card  */}
            <Card className="block h-full md:col-span-2 lg:col-span-1 h-full flex flex-col justify-center">
              <CardContent className="flex items-center space-x-4 pt-6 shrink-0">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&fit=crop" className="w-16 h-16 shrink-0 rounded-full object-cover" />
                <div className="flex-1 space-y-1 overflow-hidden">
                  <h3 className="font-medium text-lg leading-none truncate">Alex Thompson</h3>
                  <p className="text-sm text-muted-foreground truncate">Sr. Backend Engineer</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">Message</Button>
              </CardContent>
            </Card>
            
          </div>
        </div>
        
        {/*  Media Rich Cards  */}
        <div>
          <h3 className="font-medium text-muted-foreground mb-4">Media & Presentation</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/*  Product Card  */}
            <Card className="block h-full h-full flex flex-col">
              <div className="w-full aspect-video p-0 overflow-hidden rounded-t-xl mb-4 border-b">
                 <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pt-0">
                <div className="flex items-center justify-between">
                  <CardTitle>Analog Camera</CardTitle>
                  <Badge variant="secondary">$249</Badge>
                </div>
                <CardDescription>Premium vintage photography</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">Free shipping on all orders over $100. Delivered in 2-3 business days.</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full">
                  <Circle className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </div>
            </Card>

            {/*  Media / Article Card  */}
            <Card className="block h-full h-full flex flex-col overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop" alt="Workspace" className="w-full h-48 object-cover border-b rounded-t-xl" />
              <CardHeader>
                <CardTitle>Building Modern Workspaces</CardTitle>
                <CardDescription>Oct 24, 2023 • Architecture</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">Designing open-plan office spaces that both foster collaboration and provide necessary acoustic isolation for deep work sessions.</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="link" className="px-0">Read Article <ChevronRight className="h-4 w-4 ml-1" /></Button>
              </div>
            </Card>

            {/*  Pricing Card  */}
            <Card className="block h-full md:col-span-2 lg:col-span-1 h-full flex flex-col border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Pro Plan</CardTitle>
                <CardDescription>For growing teams.</CardDescription>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  $49
                  <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary" /> Unlimited Projects</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary" /> 50GB Cloud Storage</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary" /> Priority Support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-primary" /> Custom Domains</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button className="w-full">Upgrade to Pro</Button>
              </div>
            </Card>
          </div>
        </div>

        {/*  Metric KPI Cards (Small)  */}
        <div>
          <h3 className="font-medium text-muted-foreground mb-4">Metric Snapshots</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="block h-full h-full flex flex-col justify-center">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <Circle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="block h-full h-full flex flex-col justify-center">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                <Circle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground mt-1">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="block h-full h-full flex flex-col justify-center">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales Count</CardTitle>
                <Circle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground mt-1">+19% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}
