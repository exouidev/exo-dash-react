import React, { createContext, useContext, useState, useEffect } from "react"

type SidebarContextType = {
  isCollapsed: boolean
  toggleCollapse: () => void
  isMobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setMobileOpen] = useState(false)

  // Auto-collapse on smaller desktop screens
  useEffect(() => {
    const checkWidth = () => { if (window.innerWidth < 1024 && window.innerWidth >= 768) setIsCollapsed(true); else setIsCollapsed(false); }
    window.addEventListener('resize', checkWidth)
    checkWidth()
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        toggleCollapse: () => setIsCollapsed(r => !r),
        isMobileOpen,
        setMobileOpen
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) throw new Error("useSidebar must be used within a SidebarProvider")
  return context
}
