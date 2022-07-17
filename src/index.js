import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailItem from './components/Itemdetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode >
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<App></App>}></Route>
        <Route path='/product/:id'element={<DetailItem></DetailItem>}></Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);