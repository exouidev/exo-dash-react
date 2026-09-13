import { Terminal, LayoutTemplate, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function DocumentationPage() {
  return (
    <div className="flex-1 space-y-6 max-w-5xl mx-auto pb-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Documentation & Tech Specs</h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about setting up, developing, and extending this dashboard.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Complete Official Documentation
          </h3>
          <p className="text-sm text-muted-foreground">
            Looking for highly detailed component usage, styling recipes, and full API references? Check out the official web portal.
          </p>
        </div>
        <a href="https://exoui.dev/documentation?framework=react" target="_blank" rel="noopener noreferrer"
           className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 shadow-sm font-semibold">
          Explore Exo UI Docs
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </a>
      </div>

      <Card className="block">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <CardTitle>System Prerequisites</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Ensure your development environment meets the following requirements before serving the application.</p>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <div className="bg-muted rounded-sm px-1.5 py-0.5 shrink-0"><code className="text-xs font-mono text-primary">Node.js</code></div>
              <p className="text-sm text-muted-foreground leading-relaxed">Version 18.13.0 or higher is required. We recommend using <a href="https://github.com/nvm-sh/nvm" className="text-primary underline">nvm</a> to manage your node versions.</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <div className="bg-muted rounded-sm px-1.5 py-0.5 shrink-0"><code className="text-xs font-mono text-primary">npm / yarn / pnpm</code></div>
              <p className="text-sm text-muted-foreground leading-relaxed">Supported package managers. The templates include a standard <code>package.json</code> and lock files.</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <div className="bg-muted rounded-sm px-1.5 py-0.5 shrink-0"><code className="text-xs font-mono text-primary">React 19</code></div>
              <p className="text-sm text-muted-foreground leading-relaxed">Runs perfectly on exact current version mapping architecture using Vite.</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="block">
        <CardHeader>
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-5 w-5 text-primary" />
            <CardTitle>Key Architectural Decisions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-md font-semibold font-mono">1. Core Framework vs Library</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This template actively pivots away from traditional heavy UI component libraries. Instead, it uses headless components combined with <strong>Tailwind CSS V4</strong>, deeply inspired by <code>shadcn/ui</code>. Every component in the <code>/components/ui</code> directory is fully owned by you, providing infinite styling flexibility without dependency bloat.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-md font-semibold font-mono">2. State Management</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We leverage <strong>React Context and standard primitive hooks</strong> extensively state management and reactive data flow. This ensures fine-grained reactivity, lightning-fast rendering, and highly readable synchronous data reading.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-md font-semibold font-mono">3. Folder Structure</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li><code>src/components/ui/</code> - Pure, reusable UI components (Buttons, Cards, Inputs, Tables).</li>
              <li><code>src/components/layout/</code> - Global structural scaffolding (AppShell, Sidebar, Header layout).</li>
              <li><code>src/pages/</code> - Routable page components containing complex business logic grouped by domain.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="block">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <CardTitle>License Summary</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 border text-sm text-muted-foreground leading-relaxed">
            <p className="mb-2"><strong className="text-foreground">Commercial Software License</strong></p>
            <p>By downloading, copying, accessing, or using this codebase, you agree to the following terms:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-1">
              <li>You are granted a license to use, modify, and integrate the code into <strong>one (1)</strong> commercial or personal end-product (Single Application License).</li>
              <li>Multiple internal or client projects require an Extended / Multi-license.</li>
            </ul>
            <p className="mb-2"><strong className="text-foreground">Explicit Restrictions:</strong></p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You may not resell, redistribute, or sublicense the source code as a standalone template or downloadable asset.</li>
              <li>You may not make the source files publicly accessible in any public repository (e.g., GitHub/GitLab).</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
