import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 600,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
