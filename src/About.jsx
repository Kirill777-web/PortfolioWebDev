import './About.css';

function About() {
  return (
    <div>
      <section className='section about'>
        <div className='section-center about-center'>
          <article className='about-img'>
            <img
              src='/public/imgs/KL.jpg'
              className='hero-photo'
              alt='about img'
            />
          </article>

          <article className='about-info'>
            <div className='section-title about-title'>
              <h2>about me</h2>
              <div className='underline'></div>
            </div>

            <p>
              As a passionate student studying at the University of New
              Brunswick, my journey into the exciting world of Full Stack Web
              Development has been nothing short of inspiring. From the early
              days of learning the fundamentals of HTML and CSS to creating my
              very first projects, I have embraced the challenges and celebrated
              the milestones that have shaped my career path. HTML and CSS are
              the backbone of every web application, and they are my first steps
              into the realm of web development.
            </p>
            <p>
              I vividly remember the thrill of crafting my first HTML page,
              structuring content with semantic elements, and adding styles with
              CSS to bring it to life. The ability to design visually appealing
              layouts and create user-friendly interfaces sparked my passion for
              front-end development.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
