import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Wrapper from './utils/Wrapper.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
        <ToastContainer/>
      </Wrapper>
    </BrowserRouter>
  </StrictMode>
)
