import { Link } from "react-router-dom"
import { AlertCircle } from "lucide-react"
import { Button } from "../components/ui/button"

export function NotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4">
      <div className="flex max-w-[420px] flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6">
          <AlertCircle className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-3">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/">Go back home</Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link to="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
