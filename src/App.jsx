
import './App.css'
import Home from './Page/Home'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayOut />} >
     <Route path="/"  element={<Home/>} ></Route>
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
