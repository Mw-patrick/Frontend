import Home from "./pages/home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Myaccount from "./pages/Myaccount";
import Product from "./pages/Product";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import Announcement from "./components/Announcement";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const Layout = () =>{  
    return (
    <div> 
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    );
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/cart",
          element:<Cart />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/create-account",
          element:<Register />
        },
        {
          path:"/myaccount",
          element:<Myaccount />
        },
        {
          path:"/product/:productId",
          element:<Product />
        },
      ]
    },
    
  ]);
  return (
    <div> 
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
