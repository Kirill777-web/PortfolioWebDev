import './Hero.css';
// import SocialLinks from './SocialLinks';

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
            <a href='contact.html' className='btn hero-btn'>
              hire me
            </a>
          </article>
        </div>
      </header>
    </div>
  );
}

export default Hero;
