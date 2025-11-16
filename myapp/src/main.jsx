import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Click from './Click.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
        <Router>
          <Route path="/path" element={<Click/>}/>
        </Router>
        </BrowserRouter>
  </StrictMode>,
)
