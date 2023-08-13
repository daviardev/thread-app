import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = window.localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light')

  const [theme, setTheme] = useState(initialTheme)

  const applyTheme = useCallback(() => {
    document.documentElement.classList.toggle('dark', theme === 'light')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    applyTheme()
  }, [applyTheme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const themeContext = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
