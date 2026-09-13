import { useState } from "react"
import { User, Mail, Link as LinkIcon, Calendar, Loader2, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export function FormsPage() {
  const [formModel, setFormModel] = useState({
    username: '',
    email: '',
    website: '',
    birthDate: '',
    bio: '',
    role: 'Member',
    subscriptionTier: 'Free',
    experience: 50,
    notifications: true
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = (model: typeof formModel) => {
    const newErrors: Record<string, string> = {}
    if (model.username.length < 3) newErrors.username = 'Username must be at least 3 characters'
    else if (model.username.length > 20) newErrors.username = 'Username cannot exceed 20 characters'
    
    if (!/^\S+@\S+\.\S+$/.test(model.email)) newErrors.email = 'Please enter a valid email address'
    if (model.website && !/^https?:\/\//.test(model.website)) newErrors.website = 'Must be a valid URL'
    if (model.bio.length > 160) newErrors.bio = 'Bio must be under 160 characters'
    return newErrors
  }

  const handleChange = (field: keyof typeof formModel, value: any) => {
    const newModel = { ...formModel, [field]: value }
    setFormModel(newModel)
    
    if (touched[field]) {
       const newErrors = validate(newModel)
       setErrors(newErrors)
    }
  }

  const handleBlur = (field: keyof typeof formModel) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    setErrors(validate(formModel))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = validate(formModel)
    setErrors(newErrors)
    
    const allTouched = Object.keys(formModel).reduce((acc, key) => ({...acc, [key]: true}), {})
    setTouched(allTouched)

    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    setSubmitSuccess(false)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  const hasError = (field: string) => touched[field] && !!errors[field]
  const isValid = Object.keys(validate(formModel)).length === 0
  const isDirty = Object.keys(touched).length > 0

  return (
    <div className="flex-1 space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Forms Demo</h1>
        <p className="text-muted-foreground mt-1">
          Highlighting React Forms API with strict schema validation styling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>Update your profile information and preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-sm font-medium leading-none ${hasError('username') ? 'text-destructive' : ''}`}>Username</label>
                  <div className="relative">
                    <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text" placeholder="johndoe"
                      value={formModel.username} onChange={e => handleChange('username', e.target.value)} onBlur={() => handleBlur('username')}
                      className={`flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${hasError('username') ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-ring'}`}
                    />
                  </div>
                  {hasError('username') && <p className="text-[0.8rem] font-medium text-destructive">{errors.username}</p>}
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium leading-none ${hasError('email') ? 'text-destructive' : ''}`}>Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email" placeholder="john@example.com"
                      value={formModel.email} onChange={e => handleChange('email', e.target.value)} onBlur={() => handleBlur('email')}
                      className={`flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${hasError('email') ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-ring'}`}
                    />
                  </div>
                  {hasError('email') && <p className="text-[0.8rem] font-medium text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-sm font-medium leading-none ${hasError('website') ? 'text-destructive' : ''}`}>Personal Website</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="url" placeholder="https://your-website.com"
                      value={formModel.website} onChange={e => handleChange('website', e.target.value)} onBlur={() => handleBlur('website')}
                      className={`flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${hasError('website') ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-ring'}`}
                    />
                  </div>
                  {hasError('website') && <p className="text-[0.8rem] font-medium text-destructive">{errors.website}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="date"
                      value={formModel.birthDate} onChange={e => handleChange('birthDate', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [color-scheme:light] dark:[color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium leading-none">Subscription Tier</label>
                  <p className="text-[0.8rem] text-muted-foreground">Select the plan that best fits your needs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Free', 'Pro', 'Enterprise'].map(tier => (
                    <label key={tier} className="cursor-pointer relative">
                      <input type="radio" value={tier} checked={formModel.subscriptionTier === tier} onChange={() => handleChange('subscriptionTier', tier)} className="peer sr-only" />
                      <div className={`rounded-lg border-2 border-muted bg-card hover:bg-accent hover:text-accent-foreground p-4 text-center peer-focus-visible:ring-2 peer-focus-visible:ring-ring transition-all ${formModel.subscriptionTier === tier ? 'border-primary bg-primary/5' : ''}`}>
                        <span className="font-medium block text-sm">{tier}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Role</label>
                <select
                  value={formModel.role} onChange={e => handleChange('role', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Member">Member</option>
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium leading-none">React Proficiency</label>
                  <span className="text-sm font-semibold text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-md">{formModel.experience}%</span>
                </div>
                <input
                  type="range" min="0" max="100"
                  value={formModel.experience} onChange={e => handleChange('experience', parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-medium leading-none ${hasError('bio') ? 'text-destructive' : ''}`}>Bio</label>
                <textarea
                  placeholder="Tell us a little bit about yourself"
                  value={formModel.bio} onChange={e => handleChange('bio', e.target.value)} onBlur={() => handleBlur('bio')}
                  className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${hasError('bio') ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-ring'}`}
                />
                <div className="flex justify-between items-center text-[0.8rem]">
                   {hasError('bio') ? (
                     <span className="font-medium text-destructive">{errors.bio}</span>
                   ) : (
                     <span className="text-muted-foreground">Brief description for your profile.</span>
                   )}
                   <span className={`text-muted-foreground ${formModel.bio.length > 160 ? 'text-destructive' : ''}`}>
                     {formModel.bio.length}/160
                   </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <label className="text-base font-medium">Marketing emails</label>
                  <p className="text-[0.8rem] text-muted-foreground">Receive emails about new products, features, and more.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={formModel.notifications} onChange={e => handleChange('notifications', e.target.checked)} className="sr-only peer" />
                  <div className={`w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors ${formModel.notifications ? 'bg-primary' : ''}`}></div>
                </label>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : 'Save Changes'}
                </Button>
                {submitSuccess && (
                  <span className="text-sm text-green-600 dark:text-green-600 font-medium flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle className="h-4 w-4" /> Profile updated
                  </span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6 col-span-1 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Reactivity State</CardTitle>
              <CardDescription>Real-time reflection of the Form model.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted p-4 font-mono text-sm overflow-auto">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border/50 mb-4">
                   <div><div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">Valid</div><div className={`font-medium ${isValid ? 'text-green-600' : 'text-destructive'}`}>{isValid.toString()}</div></div>
                   <div><div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">Touched</div><div className={`font-medium ${isDirty ? 'text-primary' : ''}`}>{isDirty.toString()}</div></div>
                   <div><div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">Total Errors</div><div className={`font-medium ${Object.keys(errors).length > 0 ? 'text-destructive' : ''}`}>{Object.keys(errors).length}</div></div>
                </div>
                <div className="text-muted-foreground mb-2 text-xs uppercase tracking-wider">Form Model Matrix:</div>
                <pre className="text-foreground text-xs leading-relaxed max-w-full overflow-x-auto whitespace-pre-wrap">{JSON.stringify(formModel, null, 2)}</pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Input Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>This form demonstrates two-way data bindings mapping directly between Tailwind UI and the underlying Component Model containing:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium text-foreground">Radio Groups</span> (via CSS peer checked)</li>
                <li><span className="font-medium text-foreground">Custom Toggles</span> (hidden checkbox)</li>
                <li><span className="font-medium text-foreground">Range Sliders</span> (real-time percentage mapping)</li>
                <li><span className="font-medium text-foreground">Dates & URLs</span> (HTML5 native inputs)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
