import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailItem from './components/ItemDetailContainer';
import CartPage from './components/cartpage';
import { CartProvider } from './context/CartContext';
import CategoryList from './components/Categorypage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
        <CartProvider>
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<App/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product/:id'element={<DetailItem/>}/>
        <Route path='/producto/:category'element={<CategoryList/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </React.StrictMode>

);