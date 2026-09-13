
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function AvatarsPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Avatars</h2>
        <p className="text-muted-foreground mt-2">Display user profile images and initials.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Initials & Fallback</CardTitle>
            <CardDescription>Text based avatars.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex gap-4 items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-medium">JD</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">SM</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-medium">AE</span>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Scaling user identities.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex gap-4 items-end">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-lg">MD</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-medium">MD</span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-xs">MD</span>
          </CardContent>
        </Card>
        
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Status Indicators</CardTitle>
            <CardDescription>Avatars with presence markers.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex gap-6 items-center">
            <div className="relative">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-medium">ON</span>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
            </div>
            <div className="relative">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-medium">OFF</span>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-muted-foreground"></span>
            </div>
          </CardContent>
        </Card>
      

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Image Avatars</CardTitle>
            <CardDescription>Loading high-def portrait photography.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex gap-4 items-center">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&fit=crop" alt="Avatar" className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm bg-muted" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop" alt="Avatar" className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm bg-muted" />
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=256&h=256&fit=crop" alt="Avatar" className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-background bg-muted" />
          </CardContent>
        </Card>
        
        <Card className="block h-full lg:col-span-2 h-full flex flex-col">
          <CardHeader>
            <CardTitle>Avatar Groups</CardTitle>
            <CardDescription>Aggregated groupings of shared members overlapping.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex gap-8 items-center">
            <div className="flex -space-x-4 shrink-0">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&fit=crop" className="w-10 h-10 rounded-full border-2 border-background shadow-sm bg-muted z-40" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop" className="w-10 h-10 rounded-full border-2 border-background shadow-sm bg-muted z-30" />
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=256&h=256&fit=crop" className="w-10 h-10 rounded-full border-2 border-background shadow-sm bg-muted z-20" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop" className="w-10 h-10 rounded-full border-2 border-background shadow-sm bg-muted z-10" />
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-xs font-medium z-0">+5</span>
            </div>
            
            <div className="flex -space-x-2 shrink-0">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=256&h=256&fit=crop" className="w-8 h-8 rounded-full border-2 border-background shadow-sm bg-muted z-30" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop" className="w-8 h-8 rounded-full border-2 border-background shadow-sm bg-muted z-20" />
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-background bg-primary text-primary-foreground text-[10px] font-medium z-10">+12</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  </>
  )
}
