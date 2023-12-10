import './Achievements.css';

function Achievements() {
  return (
    <div>
      <section className='section achievements'>
        <div className='section-title'>
          <h2>achievements</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center achievements-center'>
          {/* <!-- Timeline Line --> */}
          <div className='timeline-line'></div>

          {/* <!-- Achievement 1 --> */}
          <article className='achievement-item achievement-left'>
            <div className='achievement-badge'>
              {/* <img
                src='/public/imgs/GCC_badge_IT_Support.png'
                alt='Badge Description'
              /> */}
            </div>
            <h4>In Progress, Expected 2024</h4>
            <p>WebDeveloper Bootcamp UNB</p>
            <p>
              Halfway through an intensive WebDeveloper bootcamp and loving
              every bit of it. While I am still on this learning journey,I have
              already gained a ton of hands-on experience and skills.Stay tuned
              for some exciting projects and updates as I continue to grow and
              dive deeper into the world of web development!
            </p>
          </article>

          {/* <!-- Achievement 2 --> */}
          <article className='achievement-item achievement-right'>
            <div className='achievement-badge'>
              <img
                src='/public/imgs/Storage AWS CPC.png'
                alt='Storage AWS CPC Badge'
              />
            </div>
            <h4>2023</h4>
            <p>Object Storage Specialized</p>
            <p>
              As an Object Storage Specialist with a focus on AWS, I have honed
              my skills in managing and utilizing AWS S3, the industry-leading
              scalable object storage solution. My expertise encompasses setting
              up, securing, and optimizing S3 buckets to ensure high
              availability and cost-effectiveness. I am adept at implementing
              lifecycle policies, versioning, and cross-region replication to
              meet diverse data storage requirements.
            </p>
          </article>

          {/* <!-- Achievement 3 --> */}
          <article className='achievement-item achievement-left'>
            <div className='achievement-badge'>
              <img
                src='/public/imgs/aws-certified-cloud-practitioner.png'
                alt='AWS Certified Cloud Practitioner Badge'
              />
            </div>
            <h4>2023</h4>
            <p>AWS Certified Cloud Practitioner</p>
            <p>
              I am really excited to share that I have earned my AWS Certified
              Cloud Practitioner badge! This means I have got a solid grasp of
              the basics of AWS, from its main services to how to use them
              right. With this certification in my toolkit, I am all set to dive
              into AWS projects and make the most of the cloud. It is all part
              of my journey to keep up with the fast-paced world of cloud tech.
            </p>
          </article>

          {/* <!-- Achievement 4 --> */}
          <article className='achievement-item achievement-right'>
            <div className='achievement-badge'>
              <img
                src='/public/imgs/GCC_badge_IT_Support.png'
                alt='GCC Badge IT Support'
              />
            </div>
            <h4>2020</h4>
            <p>Google IT Support Coursera</p>
            <p>
              Hey there! Just wanted to share some exciting news. I have wrapped
              up my IT-support Coursera certification with Google (yay!). This
              was not just about reading books; I dived deep into hands-on
              stuff—think building computers, setting up networks, and even
              delving into the world of Linux and Binary Code. So, if you have
              got tech troubles or just want to chat about the Command-Line
              Interface, I am your person!
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
