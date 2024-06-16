import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pos from './pages/Pos.jsx'
import OnlineOrdering from './pages/OnlineOrdering.jsx'
import Payments from './pages/Payments.jsx'
AOS.init({
  duration: 600,
  once: true,
  easing: 'ease-in-out',
  delay: 100,
  mirror: false,
  offset: 300,

});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pos",
    element: <Pos />
  },
  { 
    path:"/online-ordering",
    element: <OnlineOrdering />
  },
  { 
    path:"/payments",
    element: <Payments />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
