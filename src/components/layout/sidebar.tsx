import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useSidebar } from "../../hooks/use-sidebar"
import { cn } from "../../lib/utils"
import { 
  Rocket, LayoutDashboard, ChevronDown, ChevronUp, X, Layers, 
  KanbanSquare as Kanban, MessageSquare as MessageCircle, Calendar, Ticket, 
  Mail, CheckSquare as ListTodo, Folder as HardDrive, Package as ShoppingCart, 
  Users, CheckCircle, Table2 as Table, Bell, Lock, Settings, FileText, Sparkles 
} from "lucide-react"

type NavLinkItem = { label: string; href?: string; icon: any; badge?: string; children?: { label: string; href: string }[] }
type NavGroup = { title?: string; items: NavLinkItem[] }

const navGroups: NavGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        label: 'Dashboards',
        icon: LayoutDashboard,
        children: [
          { label: 'E-commerce', href: '/dashboard/ecommerce' },
        ]
      },
    ]
  },
  {
    title: 'Apps & Management',
    items: [
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
    title: 'Premium',
    items: [
      { label: 'Pro Components', href: '/pro-components', icon: Sparkles, badge: 'PRO' }
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
      { label: 'Settings', href: '/settings', icon: Settings },
      { label: 'Documentation', href: '/documentation', icon: FileText }
    ]
  }
]

export function Sidebar() {
  const { isCollapsed, isMobileOpen, setMobileOpen } = useSidebar()
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
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all w-full text-left",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="whitespace-nowrap flex-1">{link.label}</span>
                    )}
                    {!isCollapsed && link.badge && (link.badge === "PRO" ? <span className="ml-auto rounded bg-primary/20 px-1.5 py-[2px] text-[9px] font-bold tracking-wider text-primary uppercase mr-2">PRO</span> : <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{link.badge}</span>)}
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
                               isActive
                                 ? "text-sidebar-foreground font-medium bg-sidebar-accent/30"
                                 : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                             )}
                           >
                             {child.label}
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
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="whitespace-nowrap flex-1">{link.label}</span>
                    )}
                    {!isCollapsed && link.badge && (link.badge === "PRO" ? <span className="ml-auto rounded bg-primary/20 px-1.5 py-[2px] text-[9px] font-bold tracking-wider text-primary uppercase mr-2">PRO</span> : <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{link.badge}</span>)}
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
                               isActive
                                 ? "text-sidebar-foreground font-medium bg-sidebar-accent/30"
                                 : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                             )}
                           >
                             {child.label}
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
    </>
  )
}
