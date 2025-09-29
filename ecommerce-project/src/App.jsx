import { Routes, Route } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { HomePage } from './Pages/HomePage'
import { Orders } from './Pages/orders'
import './App.css'
import { CheckoutPage } from './Pages/CheckoutPage'

// Routes component tells react all the pages that are in out website
// Route is basically a page or add a page to out website
// path = it tells the URL of this page 
// we gave path =  / cause path of home page in local hose 5454 is empty 
// elememt is just the component that is going to get displayed through the route page
// path = / is the same as writing 'index' = path="/"
// 
function App() {
 const [cart, setCart] = useState([]);
    useEffect(() => {
      const fetchAppData = async () => {
       const response = await axios.get('/api/cart-items?expand=product');
       setCart(response.data);
      }
      fetchAppData();
    },[]);

          
  return (
    <>
    <Routes> 
      <Route index element={<HomePage cart={cart} />}></Route>  
      <Route path="checkout" element={<CheckoutPage cart={cart} />} ></Route>
      <Route path="orders" element={<Orders cart={cart} />} ></Route>
    </Routes>
    </>
  )
}

export default App
