import { useState } from "react"
import { User, Shield, Bell, CreditCard, Upload, CheckCircle, Laptop, Smartphone, LogOut, Plus, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Modal } from "../components/ui/modal"

type SettingsTab = 'profile' | 'security' | 'notifications' | 'billing'

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile')

  const tabs: { id: SettingsTab; label: string; icon: any }[] = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ]

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 'pm_1', type: 'Visa', last4: '4242', expiryMonth: '12', expiryYear: '2028', isDefault: true }
  ])

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [editingPaymentId, setEditingPaymentId] = useState<string | null>(null)

  const [pmCardNumber, setPmCardNumber] = useState('')
  const [pmExpiryMonth, setPmExpiryMonth] = useState('12')
  const [pmExpiryYear, setPmExpiryYear] = useState('2028')
  const [pmIsDefault, setPmIsDefault] = useState(false)

  const openAddPaymentModal = () => {
    setEditingPaymentId(null)
    setPmCardNumber('')
    setPmExpiryMonth('12')
    setPmExpiryYear('2028')
    setPmIsDefault(paymentMethods.length === 0)
    setIsPaymentModalOpen(true)
  }

  const openEditPaymentModal = (pm: any) => {
    setEditingPaymentId(pm.id)
    setPmCardNumber(`•••• •••• •••• ${pm.last4}`)
    setPmExpiryMonth(pm.expiryMonth)
    setPmExpiryYear(pm.expiryYear)
    setPmIsDefault(pm.isDefault)
    setIsPaymentModalOpen(true)
  }

  const savePaymentMethod = () => {
    let currentMethods = [...paymentMethods]
    if (pmIsDefault) {
      currentMethods = currentMethods.map(pm => ({ ...pm, isDefault: false }))
    }

    if (editingPaymentId) {
      currentMethods = currentMethods.map(pm => pm.id === editingPaymentId ? {
        ...pm, expiryMonth: pmExpiryMonth, expiryYear: pmExpiryYear, isDefault: pmIsDefault || currentMethods.length === 1
      } : pm)
    } else {
      const numString = pmCardNumber.replace(/\D/g, '')
      const last4 = numString.length >= 4 ? numString.slice(-4) : '0000'
      currentMethods.push({
        id: Math.random().toString(36).substring(2, 9),
        type: numString.startsWith('3') ? 'Amex' : numString.startsWith('5') ? 'Mastercard' : 'Visa',
        last4, expiryMonth: pmExpiryMonth, expiryYear: pmExpiryYear,
        isDefault: pmIsDefault || currentMethods.length === 0
      })
    }
    
    if (currentMethods.length > 0 && !currentMethods.some(pm => pm.isDefault)) {
      currentMethods[0].isDefault = true
    }
    setPaymentMethods(currentMethods)
    setIsPaymentModalOpen(false)
  }

  const deletePaymentMethod = () => {
    if (editingPaymentId) {
      let currentMethods = paymentMethods.filter(pm => pm.id !== editingPaymentId)
      if (currentMethods.length > 0 && !currentMethods.some(pm => pm.isDefault)) {
        currentMethods[0].isDefault = true
      }
      setPaymentMethods(currentMethods)
      setIsPaymentModalOpen(false)
    }
  }

  const [profile, setProfile] = useState({
    firstName: 'Tom', lastName: 'Developer', email: 'tom@example.com', username: 'tomdev',
    bio: 'Frontend enthusiast building interactive dashboards. Open to collaboration.', website: 'https://react.dev', location: 'San Francisco, CA'
  })

  const [tfaEnabled, setTfaEnabled] = useState(true)
  const [notifs, setNotifs] = useState({ product: true, marketing: false })
  const [saving, setSaving] = useState(false)

  const initials = ((profile.firstName?.[0] || '') + (profile.lastName?.[0] || '')).toUpperCase() || 'U'

  const save = () => {
    setSaving(true)
    setTimeout(() => setSaving(false), 800)
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex flex-wrap md:flex-col gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors w-full ${activeTab === tab.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0 space-y-6">
          {activeTab === 'profile' && (
            <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Public Profile</CardTitle>
                  <CardDescription>This is how others will see you on the site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold border-2 border-primary/20 shrink-0">
                      {initials}
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-2" /> Change Avatar</Button>
                      <p className="text-[0.8rem] text-muted-foreground">JPG, GIF or PNG. Max size of 800K.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First name</label>
                      <input type="text" value={profile.firstName} onChange={e => setProfile({...profile, firstName: e.target.value})} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last name</label>
                      <input type="text" value={profile.lastName} onChange={e => setProfile({...profile, lastName: e.target.value})} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium">Email address</label>
                     <input type="email" disabled value={profile.email} className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm cursor-not-allowed opacity-70" />
                     <p className="text-[0.8rem] text-muted-foreground">Your email address cannot be changed from the profile panel.</p>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium">Username</label>
                     <div className="relative flex items-center">
                       <span className="absolute left-3 text-muted-foreground text-sm font-mono shrink-0">@</span>
                       <input type="text" value={profile.username} onChange={e => setProfile({...profile, username: e.target.value})} className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                     </div>
                     <p className="text-[0.8rem] text-muted-foreground">This is your public display name.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <textarea value={profile.bio} onChange={e => setProfile({...profile, bio: e.target.value})} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell us a little bit about yourself"></textarea>
                    <p className="text-[0.8rem] text-muted-foreground">Maximum 160 characters. You can mention other users and organizations.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Website</label>
                      <input type="url" value={profile.website} onChange={e => setProfile({...profile, website: e.target.value})} placeholder="https://..." className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <input type="text" value={profile.location} onChange={e => setProfile({...profile, location: e.target.value})} placeholder="City, Country" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                   </div>

                   <Button onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Current password</label>
                     <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium">New password</label>
                     <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                  </div>
                  <Button onClick={save} disabled={saving}>{saving ? 'Updating...' : 'Update Password'}</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Protect your account with an extra layer of security.</CardDescription>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={tfaEnabled} onChange={e => setTfaEnabled(e.target.checked)} className="sr-only peer" />
                    <div className={`w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors ${tfaEnabled ? 'bg-primary' : ''}`}></div>
                  </label>
                </CardHeader>
                <CardContent>
                  {tfaEnabled ? (
                    <p className="text-sm text-green-600 font-medium flex items-center mt-2"><CheckCircle className="h-4 w-4 mr-2" /> 2FA is currently enabled</p>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-2">Not configured. It is highly recommended to enable 2FA.</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                  <CardDescription>Manage and log out your active sessions on other devices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Laptop className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium leading-none">MacBook Pro (Mac OS)</p>
                        <p className="text-xs text-muted-foreground">Chrome - Dublin, Ireland • <span className="text-green-600 font-medium">Active now</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium leading-none">iPhone 14 Pro (iOS)</p>
                        <p className="text-xs text-muted-foreground">Safari - London, UK • 2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive"><LogOut className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
               <Card>
                 <CardHeader>
                   <CardTitle>Notification Preferences</CardTitle>
                   <CardDescription>Choose what we notify you about and how we deliver it.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-6">
                   <div className="space-y-4">
                     <h4 className="text-sm font-semibold tracking-tight uppercase text-muted-foreground">Email Notifications</h4>

                     <div className="flex items-center justify-between">
                       <div className="space-y-0.5">
                         <label className="text-sm font-medium">Security Alerts</label>
                         <p className="text-[0.8rem] text-muted-foreground">Crucial updates about your account security.</p>
                       </div>
                       <label className="relative inline-flex items-center cursor-not-allowed opacity-70">
                         <input type="checkbox" checked disabled className="sr-only peer" />
                         <div className="w-11 h-6 bg-primary rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[24px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
                       </label>
                     </div>

                     <div className="flex items-center justify-between">
                       <div className="space-y-0.5">
                         <label className="text-sm font-medium">Product Updates</label>
                         <p className="text-[0.8rem] text-muted-foreground">New features and available beta releases.</p>
                       </div>
                       <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" checked={notifs.product} onChange={e => setNotifs({...notifs, product: e.target.checked})} className="sr-only peer" />
                         <div className={`w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors ${notifs.product ? 'bg-primary' : ''}`}></div>
                       </label>
                     </div>

                     <div className="flex items-center justify-between">
                       <div className="space-y-0.5">
                         <label className="text-sm font-medium">Marketing Emails</label>
                         <p className="text-[0.8rem] text-muted-foreground">Promotions, discounts and marketing campaigns.</p>
                       </div>
                       <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" checked={notifs.marketing} onChange={e => setNotifs({...notifs, marketing: e.target.checked})} className="sr-only peer" />
                         <div className={`w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors ${notifs.marketing ? 'bg-primary' : ''}`}></div>
                       </label>
                     </div>
                   </div>
                 </CardContent>
               </Card>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
               <Card className="border-primary/50 shadow-sm bg-primary/5">
                 <CardHeader>
                   <CardTitle className="flex flex-row items-center justify-between w-full">
                     <span>Current Plan</span>
                     <Badge variant="default" className="bg-primary">Pro Tier</Badge>
                   </CardTitle>
                   <CardDescription className="text-foreground/80">You are currently on the Pro plan, billed annually.</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-2 mb-6">
                     <div className="flex items-center justify-between text-sm">
                       <span className="font-medium">Data Storage Usage</span>
                       <span className="text-muted-foreground">45 GB / 100 GB</span>
                     </div>
                     <div className="h-2 w-full bg-background rounded-full overflow-hidden border">
                       <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                     </div>
                   </div>
                   <div className="flex gap-3">
                     <Button>Upgrade Plan</Button>
                     <Button variant="outline" className="bg-background">Cancel Subscription</Button>
                   </div>
                 </CardContent>
               </Card>

               <Card>
                 <CardHeader>
                   <CardTitle>Payment Method</CardTitle>
                   <CardDescription>Manage how you pay for your subscription.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   {paymentMethods.map(pm => (
                     <div key={pm.id} className={`flex items-center justify-between p-4 border rounded-lg ${pm.isDefault ? 'border-primary' : ''}`}>
                       <div className="flex items-center gap-4">
                         <div className="h-10 w-14 bg-accent rounded flex items-center justify-center">
                           <CreditCard className="h-5 w-5 text-foreground" />
                         </div>
                         <div className="space-y-1">
                           <p className="text-sm font-medium leading-none">{pm.type} ending in {pm.last4}</p>
                           <p className="text-xs text-muted-foreground">Expires {pm.expiryMonth}/{pm.expiryYear}</p>
                         </div>
                       </div>
                       <div className="flex items-center gap-2">
                         {pm.isDefault && <span className="text-xs font-medium text-primary mr-2 hidden sm:inline-block">Default</span>}
                         <Button variant="ghost" size="sm" onClick={() => openEditPaymentModal(pm)}>Edit</Button>
                       </div>
                     </div>
                   ))}

                   <Button variant="outline" className="mt-4 w-full border-dashed block" onClick={openAddPaymentModal}>
                     <Plus className="mr-2 h-4 w-4 inline-block" /> Add new payment method
                   </Button>
                 </CardContent>
               </Card>

               <Card>
                 <CardHeader>
                   <CardTitle>Billing History</CardTitle>
                   <CardDescription>View and download your previous invoices.</CardDescription>
                 </CardHeader>
                 <CardContent className="p-0">
                   {[{ id: 'INV-2026-081', date: 'August 1, 2026' }, { id: 'INV-2026-071', date: 'July 1, 2026' }].map(inv => (
                     <div key={inv.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/50 transition-colors">
                       <div className="space-y-1">
                         <p className="text-sm font-medium leading-none">{inv.id}</p>
                         <p className="text-xs text-muted-foreground">{inv.date}</p>
                       </div>
                       <div className="flex items-center gap-4">
                         <span className="text-sm font-medium">$49.00</span>
                         <Button variant="ghost" size="icon" title="Download Invoice"><Download className="h-4 w-4" /></Button>
                       </div>
                     </div>
                   ))}
                 </CardContent>
               </Card>
            </div>
          )}
        </main>
      </div>

      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title={editingPaymentId ? 'Edit Payment Method' : 'Add Payment Method'}>
        <div className="grid gap-4 py-4 cursor-default text-left">
          <div className="grid gap-2">
            <label className="text-sm font-medium leading-none">Card Number</label>
            <input
              value={pmCardNumber} onChange={e => setPmCardNumber(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="•••• •••• •••• 4242"
              disabled={!!editingPaymentId}
            />
            {editingPaymentId && <p className="text-xs text-muted-foreground mt-1">For security reasons, you cannot fullly view or edit an existing card number. Please remove it and add a new one if it has changed.</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
               <label className="text-sm font-medium leading-none">Exp. Month</label>
               <select value={pmExpiryMonth} onChange={e => setPmExpiryMonth(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none">
                 {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map(m => <option key={m} value={m}>{m}</option>)}
               </select>
            </div>
            <div className="grid gap-2">
               <label className="text-sm font-medium leading-none">Exp. Year</label>
               <select value={pmExpiryYear} onChange={e => setPmExpiryYear(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none">
                 {[2026,2027,2028,2029,2030,2031,2032].map(y => <option key={y} value={y}>{y}</option>)}
               </select>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="isDefault" checked={pmIsDefault} onChange={e => setPmIsDefault(e.target.checked)} className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
            <label htmlFor="isDefault" className="text-sm font-medium leading-none">Set as default payment method</label>
          </div>
        </div>
        <div className="mt-4 gap-2 flex w-full justify-between border-t pt-4">
          <div>
            {editingPaymentId && <Button variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={deletePaymentMethod}>Delete</Button>}
          </div>
          <div className="flex gap-2">
             <Button variant="outline" onClick={() => setIsPaymentModalOpen(false)}>Cancel</Button>
             <Button onClick={savePaymentMethod} disabled={!pmCardNumber && !editingPaymentId}>
               {editingPaymentId ? 'Save Changes' : 'Add Card'}
             </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
