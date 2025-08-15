import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './components/Context.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <BrowserRouter>
  <ContextProvider>
    <App />
  </ContextProvider>
  </BrowserRouter>
  </HashRouter>
)
