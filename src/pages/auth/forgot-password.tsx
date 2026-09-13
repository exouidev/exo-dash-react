import { useState } from "react"
import { Link } from "react-router-dom"
import { KeyRound, Loader2, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <Card className="block w-full border-0 shadow-none bg-transparent">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <KeyRound className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">Forgot Password</CardTitle>
        <p className="text-sm text-muted-foreground">Enter your email and we'll send you a reset link</p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <>
            <div className="rounded-md bg-muted p-4 text-sm text-foreground mb-4 border border-border flex items-center justify-center font-medium text-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Check your email for a reset link.
            </div>
            <Link to="/auth/login">
               <Button className="w-full">Back to Login</Button>
            </Link>
          </>
        ) : (
          <>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email</label>
                <input
                  type="email" placeholder="m@example.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...</> : 'Send Reset Link'}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Remembered your password? <Link to="/auth/login" className="font-medium text-primary hover:underline">Log in</Link>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
