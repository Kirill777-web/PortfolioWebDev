import Project from './Project';
import './Projects.css';

function Portfolio() {
  // Array of project objects
  const projectData = [
    {
      title: 'Weather-WhisperApp',
      imageUrl: '/imgs/Project1WheatherApp.png',
      projectUrl: 'https://kirill777-web.github.io/Weather-Whisper/',
      repoUrl: 'https://github.com/Kirill777-web/Weather-Whisper',
    },
    {
      title: 'Pawfect-match',
      imageUrl: '/imgs/PawfectmatchProject2.png',
      projectUrl: 'https://github.com/Kirill777-web/Pawfect-Match',
      repoUrl: 'https://github.com/Kirill777-web/Pawfect-Match',
    },
    {
      title: 'Thought-Thrive',
      imageUrl: '/imgs/Thought-ThriveProject3.png',
      projectUrl: 'https://github.com/Kirill777-web/Thought-Thrive/',
      repoUrl: 'https://github.com/Kirill777-web/Thought-Thrive/',
    },
    {
      title: 'NoteMe',
      imageUrl: '/imgs/NoteMeProject4.png',
      projectUrl: 'https://github.com/Kirill777-web/Note-Me',
      repoUrl: 'https://github.com/Kirill777-web/Note-Me',
    },
    {
      title: 'Snippet-Spark',
      imageUrl: '/imgs/SnipetSparkProject5.png',
      projectUrl: 'https://kirill777-web.github.io/Snippet-Spark/',
      repoUrl: 'https://github.com/Kirill777-web/Snippet-Spark',
    },
    {
      title: 'Contact App',
      imageUrl: '/imgs/ContactAppProject6.png',
      projectUrl:
        'https://drive.google.com/file/d/1SLS5l3uUOhrukQ_2NvGL4oSwtEaxiO_s/view',
      repoUrl: 'https://github.com/Kirill777-web/contactApp',
    },
    // ... other project objects
  ];

  return (
    <div>
      <section className='section-projects'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <div className='underline'></div>
          <p className='projects-text'>
            In the Projects section of my portfolio, you will find a diverse
            range of applications and solutions that I have developed,
            showcasing my skills in Full Stack Web Development and AWS Cloud
            Services. Each project reflects my ability to blend innovative
            design with functional efficiency, emphasizing my proficiency in
            creating both front-end and back-end components.
          </p>
        </div>
        <div className='section-center projects-center'>
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
