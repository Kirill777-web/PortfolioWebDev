import Project from './Project';
import './Projects.css';

function Projects() {
  // Array of project objects
  const projectData = [
    {
      title: 'Weather-WhisperApp',
      imageUrl: '/public/imgs/Project1WheatherApp.png',
      projectUrl: 'https://kirill777-web.github.io/Weather-Whisper/',
      repoUrl: 'https://github.com/Kirill777-web/Weather-Whisper',
    },
    {
      title: 'Pawfect-match',
      imageUrl: '/public/imgs/PawfectmatchProject2.png',
      projectUrl: 'https://github.com/Kirill777-web/Pawfect-Match',
      repoUrl: 'https://github.com/Kirill777-web/Pawfect-Match',
    },
    {
      title: 'Thought-Thrive',
      imageUrl: '/public/imgs/Thought-ThriveProject3.png',
      projectUrl: 'https://github.com/Kirill777-web/Thought-Thrive/',
      repoUrl: 'https://github.com/Kirill777-web/Thought-Thrive/',
    },
    {
      title: 'NoteMe',
      imageUrl: '/public/imgs/NoteMeProject4.png',
      projectUrl: 'https://github.com/Kirill777-web/Note-Me',
      repoUrl: 'https://github.com/Kirill777-web/Note-Me',
    },
    {
      title: 'Weather-WhisperApp',
      imageUrl: '/public/imgs/Project1WheatherApp.png',
      projectUrl: 'https://github.com/Kirill777-web/Snippet-Spark',
      repoUrl: 'https://kirill777-web.github.io/Snippet-Spark/',
    },
    {
      title: 'Weather-WhisperApp',
      imageUrl: '/public/imgs/Project1WheatherApp.png',
      projectUrl: 'https://kirill777-web.github.io/Weather-Whisper/',
      repoUrl: 'https://github.com/Kirill777-web/Weather-Whisper',
    },
    // ... other project objects
  ];

  return (
    <div>
      <section className='section-projects'>
        <div className='section-title'>
          <h2>Projects</h2>
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

export default Projects;
