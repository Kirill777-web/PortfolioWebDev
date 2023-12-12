import './Resume.css';

function Resume() {
  return (
    <>
      <section className='section bg-grey'>
        <div className='section-title'>
          <h2>services</h2>
          <div className='underline'></div>
        </div>

        <div className='services-center section-center'>
          <article className='service'>
            <i className='fas fa-code service-icon'></i>
            <h4>Full-Stack Web Development</h4>
            <div className='underline'></div>
            <p>
              As a Full Stack Web Developer, I possess a comprehensive skill set
              that spans both front-end and back-end technologies, enabling me
              to build robust, user-friendly, and efficient web applications
              from the ground up. My expertise includes working with modern
              frameworks and languages such as JavaScript, HTML, CSS Node.js,
              and React, coupled with a strong foundation in database Mongo,
              Mongoose MySql management and server-side , logic. MERN
            </p>
          </article>
          <article className='service'>
            <i className='fab fa-aws service-icon'></i>
            <h4>AWS cloud solutions</h4>
            <div className='underline'></div>
            <p>
              As an AWS Certified Cloud Practitioner, I bring foundational
              knowledge and practical skills in managing and deploying
              applications on the AWS platform. My proficiency encompasses a
              broad understanding of core AWS services, cloud concepts,
              security, and architecture, allowing me to effectively leverage
              cloud solutions for efficiency and scalability.
            </p>
          </article>
        </div>
        <a
          href='/public/resources/Kirill Lazutin Resume SL Resumes.docx.pdf'
          className='btn resume-btn'
          download
        >
          Download Resume
        </a>
      </section>
    </>
  );
}

export default Resume;
