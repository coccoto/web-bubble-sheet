import React from 'react'
import ReactDom from 'react-dom/client';
import App from '@/scripts/index'
// material
import CssBaseline from '@mui/material/CssBaseline'

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