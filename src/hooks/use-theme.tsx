import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"
type ColorScheme = "zinc" | "blue" | "rose" | "green"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorScheme?: ColorScheme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
}

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultColorScheme = "zinc",
  ...props
}: ThemeProviderProps) {
const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? "dark" : (defaultTheme || "light");
  })
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => (localStorage.getItem("colorScheme") as ColorScheme) || defaultColorScheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("colorScheme", colorScheme)
    
    const root = window.document.documentElement
    // Remove existing theme classes
    const classesToRemove = Array.from(root.classList).filter((c) => c.startsWith("theme-"))
    if (classesToRemove.length > 0) {
      root.classList.remove(...classesToRemove)
    }
    
    // Add new theme class
    if (colorScheme !== "zinc") {
      root.classList.add(`theme-${colorScheme}`)
    }
  }, [colorScheme])

  const value = {
    theme,
    setTheme: (t: Theme) => setTheme(t),
    colorScheme,
    setColorScheme: (c: ColorScheme) => setColorScheme(c),
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
