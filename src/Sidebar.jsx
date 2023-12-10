import SocialLinks from './SocialLinks';
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
              <a href='index.html'>home</a>
            </li>
            <li>
              <a href='index.html'>about me</a>
            </li>
            <li>
              <a href='index.html'>projects</a>
            </li>
            <li>
              <a href='index.html'>contacts</a>
            </li>
            <li>
              <a href='resume.html'>resume</a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
