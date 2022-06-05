import React from 'react'
import ReactDom from 'react-dom/client';
import App from '@/scripts/index'
// styles
import { CssBaseline } from '@mui/material'

const elementApp: HTMLElement | null = document.getElementById('app')

if (elementApp === null) {
    throw new Error()
}
const root = ReactDom.createRoot(elementApp);
root.render(
    <div>
        <CssBaseline></CssBaseline>
        <App></App>
    </div>
)