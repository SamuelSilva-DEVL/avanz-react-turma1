import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/darkTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Home page</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
