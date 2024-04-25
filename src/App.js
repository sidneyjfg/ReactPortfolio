
import { BrowserRouter as Router,} from 'react-router-dom';

import Logo from './img/sjTransparent.png';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Project from './Components/Pages/Project'; 
import Services from './Components/Pages/Service';

function App() {
  //const [activeLink, setActiveLink] = useState(null);
  
  return (
    
    <Router>
      <header>
        <div className='nav-bar'>
          <div className='logo'>
            <img src={Logo} alt="Logo"></img>
          </div>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Service">Services </a>
          <a href="#Projects">Projects</a>
        </div>
      </header>
      
        <Home />
        <About />
        <Services />
        <Project />
      
      <p>footer</p>
    </Router>
      
  );
  
}

export default App;