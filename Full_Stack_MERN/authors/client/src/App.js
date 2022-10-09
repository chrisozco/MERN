import './App.css';
import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace/>} />
          <Route element={<AuthorList />} path='/home' />
          <Route element={<AuthorForm />} path='/newAuthor' />
          <Route element={<Update />} path='/editAuthor/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
