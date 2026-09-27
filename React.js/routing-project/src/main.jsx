import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Course from './pages/Course.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import Error404 from './pages/Error404.jsx'

let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about-us',
      element: <About />
    },
    {
      path: 'course',
      element: <Course />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'blog/:id',
      element: <BlogDetails />
    },
    {
      path: '*',
      element: <Error404 />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>,
)
