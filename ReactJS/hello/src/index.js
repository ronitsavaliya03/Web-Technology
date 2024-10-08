import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar, Card, Home, Contact, About, GetAll} from './Functions';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Layout(){
  return (<>
    <Navbar/>
    <Outlet/>
  </>)
}

root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faculties" element={<Card/>}/>
        <Route path="/getall" element={<GetAll/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);