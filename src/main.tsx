import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import { createRoot } from 'react-dom/client'
import Category from './pages/Category.tsx'
import Product from './pages/Product.tsx'
import { getProduct } from './services/api.tsx'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext.tsx'
import { CartProvider } from './context/CartContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <App />
      </CartProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "cart",
        element: (
          <AuthProvider>
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          </AuthProvider>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthProvider>
            <Login />
          </AuthProvider>
        )
      },
      {
        path: "/register",
        element: (
          <AuthProvider>
            <Register />
          </AuthProvider>
        )
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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


