import React from 'react';
import useInView from '../hooks/useInView';

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
    const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });

    return (
        <section
            ref={projectsRef}
            id="projects"
            className={`section bg-background transition-all duration-1000 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="heading-secondary">My Projects</h2>
                    <p className="text-lg text-text-secondary mt-2">A selection of my work.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`bg-secondary rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-400 ease-in-out-quart border border-transparent hover:border-accent flex flex-col ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}>
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                                    <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold bg-primary text-text-secondary rounded-full px-3 py-1">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <a href={project.liveLink} className="text-accent hover:underline font-semibold transition-colors duration-300">Live Demo</a>
                                    <a href={project.sourceLink} className="text-text-secondary hover:text-accent transition-colors duration-300"><i className="fab fa-github fa-lg"></i></a>
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
