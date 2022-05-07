import { ToggleDarkLightMode } from './components/ToggleDarkLightMode'
import { Widget } from './components/Widget'
import { ThemeProvider } from './ThemeContext'

export function App() {
  return (
    <ThemeProvider>
      <ToggleDarkLightMode />
      <Widget />
    </ThemeProvider>
  )
}
