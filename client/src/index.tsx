import React from 'react'
import ReactDom from 'react-dom/client';
import App from '@/scripts/index'

const elementApp: HTMLElement | null = document.getElementById('app')

if (elementApp === null) {
    throw new Error()
}
const root = ReactDom.createRoot(elementApp);
root.render(<App></App>);