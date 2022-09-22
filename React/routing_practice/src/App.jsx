import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Params from './components/Params';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/Home' replace/>} />
        <Route path='/Home' element={<Home />}/>
        <Route path='/:word' element={<Params />} />
        <Route path='/:word/:color/:bgc' element={<Params />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
