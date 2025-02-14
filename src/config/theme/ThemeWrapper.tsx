import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '.'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
