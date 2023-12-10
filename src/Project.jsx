function Project({ title, imageUrl, projectUrl, repoUrl }) {
  return (
    <div>
      <a href={projectUrl} className='project'>
        <article className='project'>
          <img src={imageUrl} alt={title} className='project-img' />
          <div className='project-info'>
            <h4>{title}</h4>
          </div>
        </article>
      </a>
      <div className='repo-link'>
        <a href={repoUrl}>{title} Repo</a>
      </div>
    </div>
  );
}

export default Project;
