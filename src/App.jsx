
import './App.css'
import Home from './Page/Home'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Catalog1 from './Page/Catalog1';
import About from './Page/About';
import ContactUs from './Page/ContactUs';
import LogIn from './Page/LogIn';
import Checkout from './Page/Checkout';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayOut />} >
     <Route path="/"  element={<Home/>} ></Route>
     <Route path="/laptops"  element={<Catalog1/>} ></Route>
     <Route path="/about"  element={<About/>} ></Route>
     <Route path="/contact"  element={<ContactUs/>} ></Route>
     <Route path="/login"  element={<LogIn/>} ></Route>
     <Route path="/checkout"  element={<Checkout/>} ></Route>
    </Route>
  )
);




function App() {
  

  return (
    <div>
       <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
