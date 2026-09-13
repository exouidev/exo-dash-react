import { useState, useRef, useEffect } from "react"
import { Sun, Moon, Search, Menu, User, Settings, CreditCard, LogOut } from "lucide-react"
import { useTheme } from "../../hooks/use-theme"
import { useSidebar } from "../../hooks/use-sidebar"

export function Header() {
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme()
  const { setMobileOpen, toggleCollapse } = useSidebar()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="flex h-14 w-full items-center gap-4 border-b bg-background px-4 sm:px-6 z-30">
      <button className="md:hidden flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent" onClick={() => setMobileOpen(true)}>
        <Menu className="h-5 w-5" />
      </button>

      <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent" onClick={toggleCollapse}>
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial" onSubmit={e => e.preventDefault()}>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="flex h-9 w-full sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-8 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </form>
      </div>

      <div className="hidden sm:flex items-center gap-2 mr-2 bg-muted/50 px-2 py-1.5 rounded-full shadow-sm">
        {["zinc", "blue", "rose", "green"].map((scheme) => (
          <button
            key={scheme}
            className={`w-[18px] h-[18px] rounded-full ring-offset-background transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${colorScheme === scheme ? "ring-2 ring-primary ring-offset-2" : ""}`}
            style={{
              background: scheme === 'zinc' ? 'linear-gradient(135deg, #18181b 50%, #e4e4e7 50%)' :
                          scheme === 'blue' ? 'linear-gradient(135deg, #1e3a8a 50%, #2563eb 50%)' :
                          scheme === 'rose' ? 'linear-gradient(135deg, #2b1c20 50%, #e11d48 50%)' :
                          'linear-gradient(135deg, #17221d 50%, #10b981 50%)'
            }}
            onClick={() => setColorScheme(scheme as any)}
            title={`${scheme} Theme`}
          />
        ))}
      </div>

      <button className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <div className="relative flex items-center dropdown-container" ref={menuRef}>
        <button 
          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <span className="text-sm font-medium">U</span>
        </button>

        {isProfileMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 rounded-md border bg-popover text-popover-foreground shadow-md outline-none z-50 animate-in fade-in zoom-in-95 duration-100">
            <div className="flex flex-col space-y-1 p-4 border-b">
              <p className="text-sm font-medium leading-none">user@example.com</p>
              <p className="text-xs leading-none text-muted-foreground">Premium Plan</p>
            </div>
            
            <div className="p-1 border-b">
              <button className="w-full flex items-center px-2 py-2 text-sm rounded-sm hover:bg-muted transition-colors cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </button>
              <button className="w-full flex items-center px-2 py-2 text-sm rounded-sm hover:bg-muted transition-colors cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing Details</span>
              </button>
              <button className="w-full flex items-center px-2 py-2 text-sm rounded-sm hover:bg-muted transition-colors cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
              </button>
            </div>
            
            <div className="border-t p-1">
              <button className="w-full flex items-center px-2 py-2 text-sm rounded-sm text-destructive hover:bg-destructive/10 transition-colors cursor-pointer" onClick={() => setIsProfileMenuOpen(false)}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
