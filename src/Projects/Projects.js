import "./Projects.css"

const projects = [
    {
      id: 1,
      name: 'Calculator',
      description: 'This is a description of my awesome project.',
      technologies: ['React', 'JavaScript', 'CSS', 'Html'],
      githubLink: <a href="https://github.com/rareseduard/Calculator-App" target="_blank" className="footer-link">
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
  </a>,
    },
    {
      id: 2,
      name: 'Blog',
      technologies: ['React', 'JavaScript', 'CSS', 'Html'],
      githubLink: <a href="https://github.com/rareseduard/Blog" target="_blank" className="footer-link">
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
  </a>,
    },
    {
        id: 3,
        name: 'To Do List',
        technologies: ['React', 'JavaScript', 'CSS', 'Html'],
        githubLink: <a href="https://github.com/rareseduard/To-Do-List" target="_blank" className="footer-link">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    </a>,
      },
      {
        id: 4,
        name: 'Weather App',
        technologies: ['React', 'JavaScript', 'CSS', 'Html'],
        githubLink: <a href="https://github.com/rareseduard/Weather-App" target="_blank" className="footer-link">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    </a>,
      }
  ];


  const Projects = () => {
    return (
      <div className="projects-container" id="projects">
        <h2 className="project-heading">Projects</h2>
        <div className="projects-items">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <span className="icon">{project.githubLink}</span>
              <h3 className="project-name">{project.name}</h3>
              <div className="tech-container">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
 
export default Projects
;