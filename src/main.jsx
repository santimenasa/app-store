import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import './index.css'
import AboutUs from './components/AbouUs';
import Products from './components/products/Products';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
     <Route path="/About" element={<AboutUs />} />
     <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
)
