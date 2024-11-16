import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { Products } from './pages/Products/index.tsx'
import { Cart } from './pages/Cart/index.tsx'
import { Manage } from './pages/Manage/index.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/manage",
    element: <Manage />
  },
])