import React from 'react';
import './App.css';

function App() {
  // Sample projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta mauris id massa commodo, sit amet convallis ex sollicitudin.',
      imageUrl: 'https://via.placeholder.com/150',
      liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Praesent laoreet feugiat orci, vitae lobortis sem vehicula in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ut magna a mi volutpat bibendum.',
      imageUrl: 'https://via.placeholder.com/150',
      liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];

  return (
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
        </header>
        <main>
          <section className="projects">
            {projects.map((project, index) => (
                <div key={index} className="project">
                  <h2>{project.title}</h2>
                  <img src={project.imageUrl} alt={project.title} />
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
            ))}
          </section>
        </main>
        <footer>
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
  );
}

export default App;