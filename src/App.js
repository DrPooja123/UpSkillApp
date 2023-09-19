
import './App.css';
import About from './components/About';
import Button from './components/Button';
import Course from './components/Course';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import {Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div >
    
        <Navbar/>
        <Hero/>
        <Button/>
        <About/>
       <Course/>
       <Footer/>

  <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/course" element={<Course/>} />
   
  </Routes>

    </div>
  );
}

export default App;
