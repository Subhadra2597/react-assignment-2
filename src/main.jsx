import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Products from './Products'
import ProductDetails from './ProductDetails'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
  </StrictMode>,
)
