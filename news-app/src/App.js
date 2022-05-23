import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Singup from './components/Singup';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='Singup' element={<Singup/>}></Route>
        <Route path='home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
