/* eslint-disable no-script-url */
import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'My Website',
    description: 'This is my website / portfolio written in ReactJS',
    imageUrl: 'img/proj-website.png',
    url: 'https://kxtz.dev',
  },
  {
    id: 2,
    title: 'KVS',
    description: 'KVS: Kernel Version Switcher, made for unenrolled devices.',
    imageUrl: 'img/proj-kvs.png',
    url: 'https://kvs.kxtz.dev',
  },
];


export function Projects(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsData.map((project) => (
        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-background text-primary p-4 shadow-2xl rounded-xl">
            <img
              src={project.imageUrl}
              alt={`${project.title}`}
              className="border-4 border-primary border-solid rounded-xl w-full h-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold my-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
