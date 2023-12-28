import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'My Website',
    description: 'This is my website / portfolio written in ReactJS',
    imageUrl: 'https://kxtz.dev/kxtz.png',
    url: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'https://kxtz.dev/kxtz.png',
    url: 'https://example.com/project2',
  },
  // Add more project data as needed
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsData.map((project) => (
        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-white p-4 shadow-md rounded-md">
            <img
              src={project.imageUrl}
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold my-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
