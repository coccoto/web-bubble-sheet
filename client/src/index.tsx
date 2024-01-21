import React from 'react'
import ReactDom from 'react-dom/client';
import App from '@/scripts/index'
import theme from '@/scripts/theme'
// material
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

const elementApp: HTMLElement | null = document.getElementById('app')

if (elementApp === null) {
    throw new Error()
}
const root = ReactDom.createRoot(elementApp);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <App></App>
    </ThemeProvider>
)