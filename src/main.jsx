import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutVinaya from './AboutVinaya'
import { BeachBungalow, Chitrakala, Kutir1, Kutir2, Rattan, BeachNest } from './stays'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-vinaya" element={<AboutVinaya />} />
        <Route path="/stays/beach-bungalow" element={<BeachBungalow />} />
        <Route path="/stays/chitrakala" element={<Chitrakala />} />
        <Route path="/stays/kutir-1" element={<Kutir1 />} />
        <Route path="/stays/kutir-2" element={<Kutir2 />} />
        <Route path="/stays/rattan" element={<Rattan />} />
        <Route path="/stays/beach-nest" element={<BeachNest />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
