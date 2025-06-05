import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/main'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
