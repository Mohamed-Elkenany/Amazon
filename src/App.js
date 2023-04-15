import React from 'react';
import Header from './components/header/Header';
import Home from "../src/Home"
import Footer from './components/footer/Footer';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';
import { getProducts } from './components/api/Api';
const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}  loader={getProducts}/>
    </Route>
  ))
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
