import { useState, useMemo } from "react"
import { Plus, Bell, Check, CheckCircle2, LayoutDashboard, Loader2, Sun } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Modal } from "../../components/ui/modal"

export function ModalsPage() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isDangerModalOpen, setIsDangerModalOpen] = useState(false)
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isWizardModalOpen, setIsWizardModalOpen] = useState(false)

  const [projectName, setProjectName] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSavingProject, setIsSavingProject] = useState(false)
  const [wizardStep, setWizardStep] = useState(1)

  const wizardTitle = useMemo(() => {
     if (wizardStep === 3) return 'Setup Complete'
     return `Workspace Setup (Step ${wizardStep} of 3)`
  }, [wizardStep])

  const wizardDescription = useMemo(() => {
     if (wizardStep === 3) return ''
     return 'Configure your environment to get the most out of the platform.'
  }, [wizardStep])

  const openWizard = () => {
    setWizardStep(1)
    setIsWizardModalOpen(true)
  }

  const closeWizard = () => {
    setIsWizardModalOpen(false)
    setTimeout(() => setWizardStep(1), 300)
  }

  const executeDeletion = () => {
    setIsDeleting(true)
    setTimeout(() => {
      setIsDeleting(false)
      setIsDangerModalOpen(false)
    }, 1200)
  }

  const saveProject = () => {
    setIsSavingProject(true)
    setTimeout(() => {
      setIsSavingProject(false)
      setIsFormModalOpen(false)
      setProjectName('')
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Modals & Dialogs</h1>
        <p className="text-muted-foreground mt-1">
          Accessible, highly customizable modal dialogs capable of handling complex UI layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Entry Form</CardTitle>
            <CardDescription>Standard forms with simulated saving states.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Button variant="default" onClick={() => setIsFormModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Create Project
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Destructive Action</CardTitle>
            <CardDescription>Confirmation dialogs requiring user intent validation.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Button variant="destructive" onClick={() => setIsDangerModalOpen(true)}>Delete Resource</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing / Upgrade</CardTitle>
            <CardDescription>Complex internal layouts like pricing tiers.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => setIsUpgradeModalOpen(true)}>
              <Sun className="mr-2 h-4 w-4" /> Upgrade to Pro
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Feedback</CardTitle>
            <CardDescription>Centrally aligned content for positive feedback loops.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Button variant="secondary" onClick={() => setIsSuccessModalOpen(true)}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Trigger Success
            </Button>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Multi-step Wizard</CardTitle>
            <CardDescription>Dynamic content projection mapped to internal step state. Perfect for onboarding setups.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Button onClick={openWizard}>
              <LayoutDashboard className="mr-2 h-4 w-4" /> Start Setup Walkthrough
            </Button>
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} title="Create new project" description="Add a new project to start tracking your user analytics.">
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Project Name</label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none"
              placeholder="e.g. My Awesome App"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Framework</label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none">
              <option value="angular">Angular</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
            </select>
          </div>
        </div>
        <div className="mt-4 gap-2 flex w-full justify-end">
          <Button variant="outline" onClick={() => setIsFormModalOpen(false)}>Cancel</Button>
          <Button onClick={saveProject} disabled={projectName.trim().length === 0 || isSavingProject}>
            {isSavingProject ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...</> : 'Create Project'}
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isDangerModalOpen} onClose={() => setIsDangerModalOpen(false)} title="Are you absolutely sure?" description="This action cannot be undone. This will permanently delete your account and remove your configuration.">
        <div className="bg-destructive/10 text-destructive text-sm font-medium p-3 rounded-md border border-destructive/20 mt-4 mb-2">
          <div className="flex items-start gap-3">
            <Bell className="h-5 w-5 mt-0.5 shrink-0" />
            <p>You will lose all your configured projects, active forms, and tracked analytics data immediately.</p>
          </div>
        </div>
        <div className="mt-6 gap-2 flex w-full justify-end">
          <Button variant="outline" onClick={() => setIsDangerModalOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={executeDeletion} disabled={isDeleting}>
            {isDeleting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...</> : 'Yes, Delete Account'}
          </Button>
        </div>
      </Modal>

      <Modal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)} title="Unlock Pro Features" description="Upgrade your workspace to access advanced analytics and priority support.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="border rounded-lg p-4 flex flex-col items-start gap-2 bg-muted/30">
            <h3 className="font-bold text-lg">Starter</h3>
            <p className="text-3xl font-extrabold mb-2">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            <ul className="text-sm space-y-2 mb-4 text-muted-foreground flex-1">
              <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Up to 3 projects</li>
              <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Basic Analytics</li>
            </ul>
            <span className="text-sm font-medium text-muted-foreground w-full text-center py-2 bg-muted rounded-md display-block">Current Plan</span>
          </div>
          
          <div className="border-2 border-primary rounded-lg p-4 flex flex-col items-start gap-2 relative shadow-sm">
            <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <h3 className="font-bold text-lg text-primary">Pro</h3>
            <p className="text-3xl font-extrabold mb-2">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            <ul className="text-sm space-y-2 mb-4 text-muted-foreground flex-1">
              <li className="flex text-foreground font-medium items-center"><Check className="h-4 w-4 text-primary mr-2" /> Unlimited projects</li>
              <li className="flex text-foreground font-medium items-center"><Check className="h-4 w-4 text-primary mr-2" /> Advanced Analytics</li>
              <li className="flex text-foreground font-medium items-center"><Check className="h-4 w-4 text-primary mr-2" /> Priority Support</li>
            </ul>
            <Button className="w-full" onClick={() => setIsUpgradeModalOpen(false)}>Upgrade Now</Button>
          </div>
        </div>
        <div className="mt-2 flex justify-center w-full">
           <p className="text-xs text-muted-foreground text-center">By upgrading, you agree to our Terms of Service. You can cancel at any time.</p>
        </div>
      </Modal>

      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <div className="flex flex-col items-center justify-center text-center py-6 px-4">
          <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-5 ring-8 ring-emerald-500/5">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-[280px]">
            Your transaction has been securely processed. A receipt has been sent to your registered email address.
          </p>
          <Button className="w-full" onClick={() => setIsSuccessModalOpen(false)}>Return to Dashboard</Button>
        </div>
      </Modal>

      <Modal isOpen={isWizardModalOpen} onClose={closeWizard} title={wizardTitle} description={wizardDescription}>
        <div className="py-6 min-h-[160px]">
          <div className="w-full bg-muted rounded-full h-2 mb-6 overflow-hidden">
            <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${(wizardStep / 3) * 100}%` }}></div>
          </div>

          {wizardStep === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="font-semibold text-lg mb-4">Let's set up your profile</h3>
              <div className="grid gap-3">
                <input type="text" placeholder="First Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none" />
                <input type="text" placeholder="Company Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none" />
              </div>
            </div>
          )}
          
          {wizardStep === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="font-semibold text-lg mb-4">Invite your team</h3>
              <div className="grid gap-3">
                <div className="flex gap-2">
                  <input type="email" placeholder="colleague@company.com" className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none" />
                  <Button variant="secondary">Invite</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">You can always invite more people later from your settings tab.</p>
              </div>
            </div>
          )}

          {wizardStep === 3 && (
            <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center justify-center text-center pt-2">
              <div className="h-12 w-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-3">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-1">You're all set!</h3>
              <p className="text-sm text-muted-foreground">Your workspace is configured and ready to go.</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between w-full border-t pt-4">
          <Button variant="ghost" onClick={closeWizard} className="text-muted-foreground">Skip</Button>
          <div className="flex gap-2">
            {wizardStep > 1 && wizardStep < 3 && (
              <Button variant="outline" onClick={() => setWizardStep(wizardStep - 1)}>Back</Button>
            )}
            {wizardStep < 3 ? (
              <Button onClick={() => setWizardStep(wizardStep + 1)}>Continue</Button>
            ) : (
              <Button onClick={closeWizard}>Go to Dashboard</Button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
