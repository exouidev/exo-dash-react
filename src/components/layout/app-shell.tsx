
import { Outlet } from "react-router-dom"
import { SidebarProvider, useSidebar } from "../../hooks/use-sidebar"
import { Sidebar } from "./sidebar"
import { Toaster } from "sonner"
import { Header } from "./header"
import { useTheme } from "../../hooks/use-theme"

function AppShellContent() {
  const { isCollapsed } = useSidebar()
  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/40 text-foreground">
      <Sidebar />
      <div 
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300 ${isCollapsed ? 'md:pl-16' : 'md:pl-64'}`}
      >
        <div className="sticky top-0 z-40 w-full flex flex-col shadow-sm">
          <Header />
        </div>
        <main className="flex-1 p-4 sm:p-6 w-full min-w-0 overflow-y-auto flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export function AppShell() {
  const { theme } = useTheme()
  return (
    <SidebarProvider>
      <AppShellContent />
      <Toaster richColors theme={theme} />
    </SidebarProvider>
  )
}
