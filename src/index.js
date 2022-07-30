import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailItem from './components/Itemdetail';
import CartPage from './components/cartpage';
import { CartProvider } from './context/CartContext';
import Buypage from './components/Buypage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
        <CartProvider>
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<App></App>}></Route>
        <Route path='/cart' element={<CartPage></CartPage>}></Route>
        <Route path='/inicio'element={<App></App>}></Route>
        <Route path='/product/:id'element={<DetailItem></DetailItem>}></Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </React.StrictMode>

);