import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import { createRoot } from 'react-dom/client'
import Category from './pages/Category.tsx'
import Product from './pages/Product.tsx'
import { getProduct } from './services/api.tsx'
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
    path: "shop/:productId",
    hydrateFallbackElement: <div>Loading...</div>,

    element: <Product />,
    loader: async ({ params }) => {
      const { productId } = params;
      if (!productId) {
        throw new Error("Product ID is required");
      }
      try {
        const response = await getProduct(productId);
        return response;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
      }
    },
  }]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)


