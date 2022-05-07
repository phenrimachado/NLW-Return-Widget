import { Moon, Sun } from 'phosphor-react'
import { FormEventHandler, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export function ToggleDarkLightMode() {
  const { theme, setTheme } = useContext(ThemeContext)

  function toggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <button
      type="button"
      className="absolute top-5 left-5 dark:text-zinc-100 text-zinc-800"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  )
}
