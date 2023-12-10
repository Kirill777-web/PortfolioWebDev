import './Footer.css';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className='footer'>
      <SocialLinks />
      <p className='footer-text'>© 2023 Kirill Lazutin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
