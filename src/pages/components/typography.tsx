
import { Terminal, Circle, AlertCircle, Rocket, CheckCircle2, ChevronRight, Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"

export function TypographyPage() {
  return (
    <>
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
        <p className="text-muted-foreground mt-2">Styles for headings, paragraphs, lists, and more.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Headings</CardTitle>
            <CardDescription>Hierarchical typography.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <div><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1></div>
            <div><h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Heading 2</h2></div>
            <div><h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3></div>
            <div><h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4></div>
          </CardContent>
        </Card>

        <Card className="block h-full h-full flex flex-col">
          <CardHeader>
            <CardTitle>Text Elements</CardTitle>
            <CardDescription>Paragraphs, muted text, and blockquotes.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <p className="leading-7">
              The king, seeing how much Missormer loved the little pig, called him and said: "A pig is no fit pet for a princess."
            </p>
            <p className="text-sm font-medium leading-none">Small bold text</p>
            <p className="text-sm text-muted-foreground">Muted text representation.</p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "After all," he said, "everyone enjoys a good joke."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}
