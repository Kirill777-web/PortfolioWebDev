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
          <SocialLinks />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
