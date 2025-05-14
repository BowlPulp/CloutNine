import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// App.js or index.js
import './styles/theme.css'; // adjust path if needed
import ScrollToTop from './ScrollToTop.jsx';
import { inject } from '@vercel/analytics'

inject()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>,
)
