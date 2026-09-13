import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { toast } from "sonner"

export function NotificationsPage() {
  const mockNotifications = [
    { id: 1, title: 'Your call has been confirmed.', description: 'Meeting with the design team.', time: '1 hour ago', type: 'primary' },
    { id: 2, title: 'You have a new message!', description: 'Sarah sent you a direct message.', time: '2 hours ago', type: 'success' },
    { id: 3, title: 'Payment failed.', description: 'Your subscription could not be renewed.', time: 'Yesterday', type: 'danger' },
    { id: 4, title: 'New device logged in.', description: 'San Francisco, CA - Chrome on MacOS.', time: 'Yesterday', type: 'neutral' },
    { id: 5, title: 'Weekly report ready.', description: 'Your Q3 analytics are prepared.', time: 'Oct 14, 2026', type: 'neutral' },
  ]

  return (
    <div className="flex-1 space-y-4 pb-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Notifications & Toast Hub</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Toast Playground</CardTitle>
            <CardDescription>Click buttons below to trigger application-wide toast notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 p-4 border rounded-lg bg-card overflow-hidden">
                <span className="font-medium text-sm">Default</span>
                <span className="text-xs text-muted-foreground mb-2">Standard informational popup.</span>
                <Button variant="outline" className="w-full" onClick={() => toast('Scheduled: Catch up', { description: 'Friday, February 10, 2026 at 5:57 PM' })}>
                  Show Default
                </Button>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg bg-card overflow-hidden">
                <span className="font-medium text-sm text-green-600 dark:text-green-500">Success</span>
                <span className="text-xs text-muted-foreground mb-2">Confirm positive actions.</span>
                <Button variant="outline" className="w-full text-green-600 border-green-200 hover:bg-green-50" onClick={() => toast.success('Invoice Paid', { description: 'You successfully paid the invoice for $45.00' })}>
                  Show Success
                </Button>
              </div>
              
              <div className="flex flex-col gap-2 p-4 border rounded-lg bg-card overflow-hidden">
                <span className="font-medium text-sm text-blue-600 dark:text-blue-500">Information</span>
                <span className="text-xs text-muted-foreground mb-2">Important neutral updates.</span>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50" onClick={() => toast.info('Update Available', { description: 'A new version of the dashboard is ready to install.' })}>
                  Show Info
                </Button>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg bg-card overflow-hidden">
                <span className="font-medium text-sm text-amber-600 dark:text-amber-500">Warning</span>
                <span className="text-xs text-muted-foreground mb-2">Cautionary system states.</span>
                <Button variant="outline" className="w-full text-amber-600 border-amber-200 hover:bg-amber-50" onClick={() => toast.warning('Storage Approaching Limit', { description: 'You have used 90% of your allocated 50GB storage.' })}>
                  Show Warning
                </Button>
              </div>

              <div className="flex flex-col gap-2 p-4 border md:col-span-2 rounded-lg bg-card overflow-hidden">
                <span className="font-medium text-sm text-destructive">Destructive / Error</span>
                <span className="text-xs text-muted-foreground mb-2">Critical errors or destructive actions. Displays longer (5 seconds).</span>
                <Button variant="destructive" className="w-full" onClick={() => toast.error('Uh oh! Something went wrong.', { description: 'There was a problem with your request. Please try again.' })}>
                  Show Error Toast
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity Feed</CardTitle>
            <CardDescription>System notifications are logged here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockNotifications.map(notification => (
                <div key={notification.id} className="flex items-start gap-4">
                  <div className={`mt-1 flex h-2 w-2 shrink-0 rounded-full ${
                    notification.type === 'primary' ? 'bg-blue-500' :
                    notification.type === 'success' ? 'bg-green-500' :
                    notification.type === 'danger' ? 'bg-destructive' : 'bg-muted-foreground'
                  }`} />
                  <div className="grid gap-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground/70">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-6">View All Notifications</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
