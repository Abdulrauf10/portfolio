import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact.jsx';
import Navbars from './components/Navbars'

function App() {
  return (
    <div className="App">
      <Navbars/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
