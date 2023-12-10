import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Sidebar from './Sidebar';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`nav ${isNavbarFixed ? 'navbar-fixed' : ''}`} id='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <button
              className='nav-btn'
              id='nav-btn'
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Me</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/resume'>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default Navbar;
