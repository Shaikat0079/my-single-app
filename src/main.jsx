import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { About } from './About.jsx';
import { Blogs } from './Blogs.jsx';
import { NavBar } from './NavBar.jsx';
import { Root } from './Components/Root/Root.jsx';
import { Home } from './Components/Home/Home.jsx';
import { Mobiles } from './Components/Mobiles/Mobiles.jsx';
import { Laptops } from './Components/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    // element: <App />
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path:'mobiles',Component:Mobiles},
      {path:'laptops',Component:Laptops}
    ]
    
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'blogs',
    element:<Blogs/>
  },
  {
    path:'nav',
    Component: NavBar
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
