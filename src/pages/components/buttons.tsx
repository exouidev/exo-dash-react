import { ChevronRight, Mail, Upload, Trash, Loader2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export function ButtonsPage() {
  return (
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Buttons</h2>
        <p className="text-muted-foreground mt-2">Displays a button or a component that looks like a button.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Standard theme variations.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Button sizing options.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4 items-center">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Default</Button>
            <Button variant="default" size="lg">Large</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>With Icons</CardTitle>
            <CardDescription>Combining icons and text.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4 items-center">
            <Button variant="default">
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button variant="secondary">
              Deploy <Upload className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="destructive">
              <Trash className="mr-2 h-4 w-4" /> Delete Project
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Loading State</CardTitle>
            <CardDescription>Async operation visualization.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-wrap gap-4 items-center">
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
            <Button variant="outline" disabled>
              <Loader2 className="h-4 w-4 animate-spin" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
