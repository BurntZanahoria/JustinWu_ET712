import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from './components/navbars'
import Home from './components/home'
import Contact from './components/contact'

function App() {
  return (
    <>
      <h1 className='title'>React Routing by Justin Wu</h1>

      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
