import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Navbar from './components/layout/Navbar.tsx'
import Footer from './components/layout/Footer.tsx'
import SmoothScroll from "./components/provider/smooth-scrolling.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <SmoothScroll>
      <App />
      
      <Footer/>
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>,
)

