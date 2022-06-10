import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Banner from './Components/Home/Banner';
import Home from './Components/Home/Home';
import About from './Components/About';
import Skills from './Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App container">
      <Nav></Nav>
      {/* <Banner></Banner> */}
      <br />
      <About></About>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
      </Routes>
      <Projects></Projects>
    </div>
  );
}

export default App;
