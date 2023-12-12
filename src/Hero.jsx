import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <header className='hero'>
        <div className='section-center hero-center'>
          <article className='hero-img'>
            <img
              src='/imgs/me.jpg'
              className='hero-photo'
              alt='kirill lazutin'
            />
          </article>
          <article className='hero-info'>
            <h1>I am Kirill</h1>
            <h4>
              Web Developer &amp; Certified AWS Practitioner - Let&apos;s build
              something fun together.
            </h4>
            <Link to='/contact' className='btn hero-btn'>
              contact me
            </Link>
          </article>
        </div>
      </header>
    </div>
  );
}

export default Hero;
