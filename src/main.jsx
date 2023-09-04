import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllChocolate from './Components/AllChocolate/AllChocolate.jsx'
import Update from './Components/Update/Update.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/allchocolate',
    element: <AllChocolate></AllChocolate>,
    loader: () => fetch('http://localhost:3000/chocolates')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:3000/chocolates/${params.id}`)
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   <App />
   </RouterProvider>
  </React.StrictMode>,
)
