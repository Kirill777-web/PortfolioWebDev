import './Services.css';

function Services() {
  return (
    <>
      <section className='section bg-grey'>
        {/* <!-- section title --> */}
        <div className='section-title'>
          <h2>services</h2>
          <div className='underline'></div>
        </div>
        {/* <!-- end of the section  --> */}
        <div className='services-center section-center'>
          {/* <!-- singele service --> */}
          <article className='service'>
            <i className='fas fa-code service-icon'></i>
            <h4>Full-Stack Web Development</h4>
            <div className='underline'></div>
            <p>
              As a Full Stack Web Developer, I possess a comprehensive skill set
              that spans both front-end and back-end technologies, enabling me
              to build robust, user-friendly, and efficient web applications
              from the ground up. My expertise includes working with modern
              frameworks and languages such as JavaScript, Node.js, and React,
              coupled with a strong foundation in database management and
              server-side logic.
            </p>
          </article>
          {/* <!-- end of single service --> */}
          {/* <!-- singele service --> */}
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
          {/* <!-- end of single service --> */}
        </div>
      </section>
    </>
  );
}

export default Services;
