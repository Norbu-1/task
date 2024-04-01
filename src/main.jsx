import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'


const route=createBrowserRouter([
  {path:"/SignIn",element:<Login/>},
  {path:"/Profile",element:<Profile/>},
  {path:"/",element:<App/>,children:[
    {path:"/SignIn",element:<Login/>}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <RouterProvider router={route}/>

  </React.StrictMode>,
)
