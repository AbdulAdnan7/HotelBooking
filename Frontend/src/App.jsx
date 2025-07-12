import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import AddHotel from './pages/admin/AddHotel'
import ManageHotels from './pages/admin/ManageHotels'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
       path: '/admin/add',
       element: <div>
        <Navbar />
        <AddHotel />
       </div>
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/admin/dashboard',
      element: <div>
        <Navbar />
        <ManageHotels />
      </div>
    }
  ])

  return (
   <>
   <div>
    <RouterProvider router={route} />
   </div>
   </>
  )
}

export default App
