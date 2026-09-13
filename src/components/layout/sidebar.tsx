import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useSidebar } from "../../hooks/use-sidebar"
import { cn } from "../../lib/utils"
import { 
  Rocket, LayoutDashboard, ChevronDown, ChevronUp, X, Layers, 
  KanbanSquare as Kanban, MessageSquare as MessageCircle, Calendar, Ticket, 
  Mail, CheckSquare as ListTodo, Folder as HardDrive, Package as ShoppingCart, 
  Users, CheckCircle, Table2 as Table, Bell, Lock, Settings, FileText 
} from "lucide-react"

type NavLinkItem = { label: string; href?: string; icon: any; badge?: string; isPro?: boolean; children?: { label: string; href: string; isPro?: boolean }[] }
type NavGroup = { title?: string; items: NavLinkItem[] }

const navGroups: NavGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        label: 'Dashboards',
        icon: LayoutDashboard,
        children: [
          { label: 'SaaS', href: '#', isPro: true },
          { label: 'E-commerce', href: '/dashboard/ecommerce' },
          { label: 'Finance', href: '#', isPro: true },
          { label: 'Analytics', href: '#', isPro: true }
        ]
      },
    ]
  },
  {
    title: 'Apps & Management',
    items: [
      { label: 'Tickets', href: '#', isPro: true, icon: Ticket, badge: '4' },
      { label: 'Email', href: '#', isPro: true, icon: Mail, badge: '12' },
      { label: 'Chat', href: '#', isPro: true, icon: MessageCircle, badge: '3' },
      { label: 'To-Do', href: '#', isPro: true, icon: ListTodo },
      { label: 'Kanban', href: '#', isPro: true, icon: Kanban },
      { label: 'Calendar', href: '#', isPro: true, icon: Calendar },
      { label: 'File Manager', href: '#', isPro: true, icon: HardDrive },
      { label: 'Products', href: '/apps/products', icon: ShoppingCart },
      { label: 'Users', href: '/apps/users', icon: Users, badge: '3' }
    ]
  },
  {
    title: 'Components',
    items: [
      {
        label: 'UI Elements',
        icon: Layers,
        children: [
          { label: 'Buttons', href: '/components/buttons' },
          { label: 'Cards', href: '/components/cards' },
          { label: 'Badges', href: '/components/badges' },
          { label: 'Alerts', href: '/components/alerts' },
          { label: 'Typography', href: '/components/typography' },
          { label: 'Avatars', href: '/components/avatars' },
          { label: 'Progress', href: '/components/progress' },
          { label: 'Accordions', href: '/components/accordions' },
          { label: 'Empty States', href: '/components/empty-states' },
          { label: 'Timelines', href: '/components/timelines' }
        ]
      },
      { label: 'Forms', href: '/forms', icon: CheckCircle },
      { label: 'Modals', href: '/modals', icon: MessageCircle },
      { label: 'Data Tables', href: '/data-table', icon: Table },
      { label: 'Notifications', href: '/notifications', icon: Bell }
    ]
  },
  {
    title: 'System',
    items: [
      {
        label: 'Auth',
        icon: Lock,
        children: [
          { label: 'Login', href: '/auth/login' },
          { label: 'Sign Up', href: '/auth/signup' },
          { label: 'Forgotten Password', href: '/auth/forgot-password' }
        ]
      },
      { label: 'Settings', href: '#', isPro: true, icon: Settings },
      { label: 'Documentation', href: '/documentation', icon: FileText }
    ]
  }
]

export function Sidebar() {
  const { isCollapsed, isMobileOpen, setMobileOpen } = useSidebar()
  
  const [showProModal, setShowProModal] = useState(false)
  const [showFeaturesModal, setShowFeaturesModal] = useState(false)

  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({ 'Dashboards': true })

  const toggleMenu = (label: string) => {
    setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }))
  }

  const isMenuExpanded = (label: string) => !!expandedMenus[label]



  return (
    <>
      <aside
        className={cn(
          "fixed hidden h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex flex-col transition-all duration-300 z-40",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className={cn("flex h-14 items-center border-b border-sidebar-border px-4 shrink-0 overflow-hidden", isCollapsed ? "justify-center" : "justify-between")}>
          {isCollapsed ? (
             <Rocket className="h-6 w-6 text-primary shrink-0" />
          ) : (
            <div className="flex items-center gap-2 overflow-hidden">
              <Rocket className="h-6 w-6 text-primary shrink-0" />
              <span className="font-bold text-lg whitespace-nowrap">Exo Dash</span>
            </div>
          )}
        </div>
        
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
      <nav className="grid gap-1 px-2">
        {navGroups.map((group, gIdx) => (
          <div key={gIdx} className="contents">
            {group.title && !isCollapsed && (
              <div className="px-3 py-2 mt-4 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider whitespace-nowrap">
                {group.title}
              </div>
            )}
            {group.title && isCollapsed && (
              <div className="h-px bg-sidebar-border my-2 mx-3"></div>
            )}

            {group.items.map((link, lIdx) => {
              const Icon = link.icon

              if (!link.children) {
                return (
                  <NavLink
                    key={lIdx}
                    to={link.href!}
                    onClick={(e) => { if (link.isPro) { e.preventDefault(); setShowProModal(true); } else { setMobileOpen(false) } }}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all w-full text-left",
                      (isActive && !link.isPro) ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="whitespace-nowrap flex-1">{link.label}</span>
                    )}
                    {!isCollapsed && link.isPro && (
                      <span className="rounded bg-primary/20 px-1.5 py-[2px] text-[9px] font-bold tracking-wider text-primary uppercase mr-2" onClick={(e) => e.stopPropagation()}>PRO</span>
                    )}
                    {!isCollapsed && link.badge && (
                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{link.badge}</span>
                    )}
                  </NavLink>
                )
              } else {
                return (
                  <div key={lIdx} className="flex flex-col gap-1">
                    <button
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:bg-sidebar-accent/50 w-full text-left"
                      onClick={() => toggleMenu(link.label)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!isCollapsed && (
                         <>
                           <span className="flex-1 whitespace-nowrap">{link.label}</span>
                           <ChevronDown className={cn("h-4 w-4 opacity-50 shrink-0 transition-transform", isMenuExpanded(link.label) ? "rotate-180" : "")} />
                         </>
                      )}
                    </button>
                    {!isCollapsed && isMenuExpanded(link.label) && (
                      <div className="grid gap-1 pl-9 pr-2">
                        {link.children.map((child, cIdx) => (
                           <NavLink
                             key={cIdx}
                             to={child.href}
                             onClick={(e) => { if (child.isPro) { e.preventDefault(); setShowProModal(true); } else { setMobileOpen(false) } }}
                             className={({ isActive }) => cn(
                               "rounded-md px-2 py-1.5 text-sm transition-all whitespace-nowrap",
                               (isActive && !child.isPro) ? "text-sidebar-foreground font-medium bg-sidebar-accent/30"
                                 : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                             )}
                           >
                             <div className="flex items-center justify-between w-full"><span>{child.label}</span>{child.isPro && <span className="rounded bg-primary/20 px-1.5 py-[2px] text-[9px] font-bold tracking-wider text-primary uppercase ml-2">PRO</span>}</div>
                           </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            })}
          </div>
        ))}
      
        {/* PRO BANNER */}
        <div className="mx-4 mt-6 mb-4 rounded-lg bg-primary/10 p-4 border border-primary/20">
          <h4 className="font-semibold text-sm mb-1 text-primary">Upgrade to Pro</h4>
          <p className="text-xs text-sidebar-foreground/70 mb-3 leading-relaxed whitespace-pre-wrap">Get 10+ premium apps and dashboards.</p>
          <button onClick={() => setShowFeaturesModal(true)} className="cursor-pointer block text-center w-full flex justify-center items-center text-xs font-semibold bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">View Pro Features</button>
        </div>
      </nav>
    </div>
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={() => setMobileOpen(false)}></div>
      )}
      
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-lg transition-transform duration-300 md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden"><Rocket className="h-6 w-6 text-primary shrink-0" /><span className="font-bold text-lg whitespace-nowrap">Exo Dash</span></div>
          <button className="h-8 w-8 rounded-sm hover:bg-accent flex items-center justify-center" onClick={() => setMobileOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
      <nav className="grid gap-1 px-2">
        {navGroups.map((group, gIdx) => (
          <div key={gIdx} className="contents">
            {group.title && !isCollapsed && (
              <div className="px-3 py-2 mt-4 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider whitespace-nowrap">
                {group.title}
              </div>
            )}
            {group.title && isCollapsed && (
              <div className="h-px bg-sidebar-border my-2 mx-3"></div>
            )}

            {group.items.map((link, lIdx) => {
              const Icon = link.icon

              if (!link.children) {
                return (
                  <NavLink
                    key={lIdx}
                    to={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all w-full text-left",
                      (isActive && !link.isPro) ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="whitespace-nowrap flex-1">{link.label}</span>
                    )}
                    {!isCollapsed && link.badge && (
                      <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{link.badge}</span>
                    )}
                  </NavLink>
                )
              } else {
                return (
                  <div key={lIdx} className="flex flex-col gap-1">
                    <button
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:bg-sidebar-accent/50 w-full text-left"
                      onClick={() => toggleMenu(link.label)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!isCollapsed && (
                         <>
                           <span className="flex-1 whitespace-nowrap">{link.label}</span>
                           <ChevronDown className={cn("h-4 w-4 opacity-50 shrink-0 transition-transform", isMenuExpanded(link.label) ? "rotate-180" : "")} />
                         </>
                      )}
                    </button>
                    {!isCollapsed && isMenuExpanded(link.label) && (
                      <div className="grid gap-1 pl-9 pr-2">
                        {link.children.map((child, cIdx) => (
                           <NavLink
                             key={cIdx}
                             to={child.href}
                             onClick={() => setMobileOpen(false)}
                             className={({ isActive }) => cn(
                               "rounded-md px-2 py-1.5 text-sm transition-all whitespace-nowrap",
                               (isActive && !child.isPro) ? "text-sidebar-foreground font-medium bg-sidebar-accent/30"
                                 : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                             )}
                           >
                             <div className="flex items-center justify-between w-full"><span>{child.label}</span>{child.isPro && <span className="rounded bg-primary/20 px-1.5 py-[2px] text-[9px] font-bold tracking-wider text-primary uppercase ml-2">PRO</span>}</div>
                           </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            })}
          </div>
        ))}
      </nav>
    </div>
      </aside>

      {/* PRO PAYWALL MODAL */}
      {showProModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 text-left" onClick={() => setShowProModal(false)}>
          <div className="bg-card w-full max-w-md rounded-xl border shadow-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="p-6 text-center space-y-4 shadow-sm border-b">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight mb-2 text-foreground">Pro Feature Locked</h2>
                <p className="text-sm text-foreground/70">Unlock this feature and access advanced dashboards, and 10+ premium applications with Exo UI Pro.</p>
              </div>
            </div>
            <div className="p-4 bg-muted/50 flex justify-end gap-2 text-foreground border-t shadow-sm">
              <button className="px-4 py-2 text-sm font-medium border hover:bg-black/5 rounded-md transition-colors cursor-pointer" onClick={() => setShowProModal(false)}>Close</button>
              <a href="https://exoui.dev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow-sm hover:opacity-90 transition-opacity flex items-center">Unlock Exo UI Pro</a>
            </div>
          </div>
        </div>
      )}

      {/* FEATURES MODAL */}
      {showFeaturesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 text-left" onClick={() => setShowFeaturesModal(false)}>
          <div className="bg-card w-full max-w-2xl rounded-xl border shadow-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <div className="p-6 shadow-sm border-b bg-muted/30">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                Exo UI Pro Features
              </h2>
              <p className="text-sm text-foreground/70 mt-1">Upgrade your dashboard with premium applications and advanced dashboards.</p>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2 text-foreground">Premium Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Advanced Kanban Board:</strong> Full drag-and-drop task management.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Chat Application:</strong> Real-time messaging UI with contacts.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Email Client:</strong> Complete inbox management interface.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Calendar App:</strong> Event scheduling and management.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>File Manager:</strong> Comprehensive file browsing and uploads.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2 text-foreground">More Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Extra Dashboards:</strong> SaaS, Finance, and Analytics dashboards.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Advanced Data Tables:</strong> Pagination, sorting, and bulk actions.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      <span><strong>Extensive UI Library:</strong> Over 50+ modular UI components & blocks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-muted/50 flex justify-end gap-2 text-foreground border-t shadow-sm">
              <button className="px-4 py-2 text-sm font-medium border hover:bg-black/5 rounded-md transition-colors cursor-pointer" onClick={() => setShowFeaturesModal(false)}>Close</button>
              <a href="https://exoui.dev" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-md shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                Unlock Exo UI Pro ➔
              </a>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
