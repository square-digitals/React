import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import Button from './button';
import Gopage from './States/Gopage';
import Update from './FunctionComp/Update';
import Timer from './FunctionComp/Timer';
import Conditional from './FunctionComp/Conditional';
import Persons from './FunctionComp/Persons';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/about' element = { <About/> } />
          <Route path='/contact' element = { <Contact/> } />
        </Routes>

        <Footer/>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
