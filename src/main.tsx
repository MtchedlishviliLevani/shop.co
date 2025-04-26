import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import { createRoot } from 'react-dom/client'
import Category from './pages/Category.tsx'
import Product from './pages/Product.tsx'
const router = createBrowserRouter([{
  path: "/",
  element: <App />,// Layout
  children: [{
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "product/:productId",
    element: <Product />,
    loader: async ({ params }) => {
      return params.productId
    }
  }]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)


