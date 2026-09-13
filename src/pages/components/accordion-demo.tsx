import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card"

export function AccordionDemoPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleAccordion = (item: string) => {
    setExpanded(current => current === item ? null : item)
  }

  return (
    <div className="flex-1 space-y-6 pb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Accordions</h2>
        <p className="text-muted-foreground mt-2">Vertically-stacked interactive headings revealing deeper content.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col h-full lg:col-span-2">
          <CardHeader>
            <CardTitle>FAQ Layout</CardTitle>
            <CardDescription>Clean expandable details.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="w-full max-w-3xl divide-y border-b border-t rounded-md overflow-hidden bg-background">

              <div className="px-4 py-2 hover:bg-muted/30 transition-colors">
                <button 
                  className="flex w-full items-center justify-between font-medium py-3" 
                  onClick={() => toggleAccordion('item1')}
                >
                  Is the layout fully responsive?
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded === 'item1' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 grid ${expanded === 'item1' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden">
                     <div className="pb-4 text-muted-foreground leading-relaxed">
                       Absolutely. The grid dynamically flexes between mobile, tablet, and ultra-wide monitor views. All cards handle inner height alignments perfectly.
                     </div>
                   </div>
                </div>
              </div>

              <div className="px-4 py-2 hover:bg-muted/30 transition-colors">
                <button 
                  className="flex w-full items-center justify-between font-medium py-3" 
                  onClick={() => toggleAccordion('item2')}
                >
                  Are the SVGs strictly sized?
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded === 'item2' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 grid ${expanded === 'item2' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                   <div className="min-h-0 overflow-hidden">
                     <div className="pb-4 text-muted-foreground leading-relaxed">
                       Yes! Lucide react icons automatically scale perfectly based on the wrapping <code>h-4 w-4</code> CSS classes passed into them.
                     </div>
                   </div>
                </div>
              </div>

              <div className="px-4 py-2 hover:bg-muted/30 transition-colors">
                <button 
                  className="flex w-full items-center justify-between font-medium py-3" 
                  onClick={() => toggleAccordion('item3')}
                >
                  How does the Dark Mode routing work?
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded === 'item3' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden text-sm transition-all duration-300 grid ${expanded === 'item3' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                   <div className="min-h-0 overflow-hidden">
                     <div className="pb-4 text-muted-foreground leading-relaxed">
                       The ThemeProvider relies on React Context to broadcast state across the app, updating document-level classes that map perfectly into Tailwind's CSS variables.
                     </div>
                   </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
