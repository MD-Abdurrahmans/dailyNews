import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ContexProvider from './components/contexProvider/ContexProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>




<ContexProvider>
<RouterProvider router={router} ></RouterProvider>

</ContexProvider>
  </React.StrictMode>,
)
