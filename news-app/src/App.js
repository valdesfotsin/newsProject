import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Singup from './components/Singup';
import Home from './components/Home';
import NewsSearch from './components/NewsSearch';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='Singup' element={<Singup/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='/search' element={<NewsSearch/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
