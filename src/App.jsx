import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from './components/pages/Rootlayout';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Pages from './components/pages/Pages';
import Blog from './components/pages/Blog';
import Landing from './components/pages/Landing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Pages' element={<Pages/>}></Route>
      <Route path='/Contact/Us' element={<ContactUs/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/Landing' element={<Landing/>}></Route>
    </Route>
  )
);



const App = () => {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App