import React from 'react';

const projects = [
    {
      title: 'Amused App',
      description: 'Event management platform for creating and exploring events.',
      image: '/images/project1.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Kyna App',
      description: 'Event listing and discovery.',
      image: '/images/project2.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Drommen Festival App (Sweden)',
      description: 'Festival app for tickets, photos, and event details.',
      image: '/images/project3.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Opinion Social App',
      description: 'Social platform for posting images and receiving opinions/votes.',
      image: '/images/project1.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'M2 Square Meter App',
      description: 'E-commerce app for product listing and purchasing.',
      image: '/images/project2.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Tapsi (User & Driver Apps)',
      description: 'Ride-booking app with multi-stop rides and waiting charges.',
      image: '/images/project3.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Ryze AI Finance App',
      description: 'AI-powered financial assistant for loans and personal finance suggestions.',
      image: '/images/project1.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase', 'AI']
    },
    {
      title: 'Shift Roster HRMS',
      description: 'Employee and employer management system.',
      image: '/images/project2.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Order Management App',
      description: 'QR-based restaurant ordering and table management.',
      image: '/images/project3.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'PLF (User, Restaurant & Driver Apps)',
      description: 'Food ordering and delivery system.',
      image: '/images/project1.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Bestie App',
      description: 'English learning app with gamified fun characters.',
      image: '/images/project2.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'Emossy HRMS App',
      description: 'Human Resource Management System.',
      image: '/images/project3.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'GetX', 'Provider']
    },
    {
      title: 'Emossy Society App',
      description: 'Society and Resident Management app.',
      image: '/images/project1.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'GetX', 'Provider']
    },
    {
      title: 'Quikit CRM & Quikit Chat',
      description: 'Customer Relationship Management and Chat solution.',
      image: '/images/project2.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'GetX', 'Provider']
    },
    {
      title: 'Emossy Recruitment App',
      description: 'Recruitment and Job Management platform.',
      image: '/images/project3.jpg',
      liveLink: '#',
      sourceLink: '#',
      tags: ['Flutter', 'Dart', 'GetX', 'Provider']
    }
  ];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-sm font-semibold bg-gray-700 text-white rounded-full px-3 py-1 mr-2 mb-2">{tag}</span>
                    ))}
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a href={project.liveLink} className="text-blue-500 hover:underline font-semibold">Live Demo</a>
                  <a href={project.sourceLink} className="text-gray-400 hover:underline font-semibold">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
