import React from 'react'
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from '@/scripts/app'
import theme from '@/scripts/theme'
// contexts
import Context from '@/scripts/contexts/context'
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
        <BrowserRouter>
            <Context.Provider>
                <App></App>
            </Context.Provider>
        </BrowserRouter>
    </ThemeProvider>
)