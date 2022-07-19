import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailItem from './components/Itemdetail';
import CartPage from './components/cartpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<App></App>}></Route>
        <Route path='/product/:id/cart' element={<CartPage></CartPage>}></Route>
        <Route path='/inicio'element={<App></App>}></Route>
        <Route path='/product/:id'element={<DetailItem></DetailItem>}></Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);