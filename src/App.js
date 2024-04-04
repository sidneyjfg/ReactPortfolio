import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './img/sjTransparent.png';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Skills from './Components/Pages/Skills';
import Project from './Components/Pages/Project';

function App() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <Router>
      <div className='nav-bar'>
        <div className='logo'>
          <img src={Logo} alt="Logo"></img>
        </div>
        <Link
          to="/"
          onClick={() => setActiveLink('/')}
          className={activeLink === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="/About"
          onClick={() => setActiveLink('/About')}
          className={activeLink === '/About' ? 'active' : ''}
        >
          About
        </Link>
        <Link
          to="/Skills"
          onClick={() => setActiveLink('/Skills')}
          className={activeLink === '/Skills' ? 'active' : ''}
        >
          Skills
        </Link>
        <Link
          to="/Project"
          onClick={() => setActiveLink('/Project')}
          className={activeLink === '/Project' ? 'active' : ''}
        >
          Project
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <p>footer</p>
    </Router>
  );
}

export default App;