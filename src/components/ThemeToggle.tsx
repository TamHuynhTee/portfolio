import { useEffect, useState } from 'react'
import { Moon, Sun } from './Icons'

type Theme = 'dark' | 'light'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    try {
      window.localStorage.setItem('theme', next)
    } catch {
      // storage unavailable; the choice just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-fg"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
