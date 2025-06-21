import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Wrapper from './utils/wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper>
    <BrowserRouter>
    <App />
    <ToastContainer/>
    </BrowserRouter>
    </Wrapper>
)
