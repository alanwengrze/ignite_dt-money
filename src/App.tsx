import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AuthProvider } from "./contexts/AuthContext"
import { Routes } from "./routes"
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

