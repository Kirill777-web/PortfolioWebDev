import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import './Sidebar.css';
// Importing the CSS file
function Sidebar({ isOpen, onClose }) {
  return (
    <div>
      <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`} id='sidebar'>
        <div>
          <button className='close-btn' onClick={onClose}>
            <i className='fas fa-times'></i>
          </button>
          <ul className='sidebar-links'>
            <li>
              <Link to='/' onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={onClose}>
                About Me
              </Link>
            </li>
            <li>
              <Link to='/services' onClick={onClose}>
                Services
              </Link>
            </li>
            <li>
              <Link to='/portfolio' onClick={onClose}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={onClose}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to='/resume' onClick={onClose}>
                Resume
              </Link>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
