import './App.css';
import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>} />
          <Route element={<Main />} path='/home' />
          <Route element={<Detail />} path='/product/:id' />
          <Route element={<Update />} path='/product/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
