import React from 'react';
import useInView from '../hooks/useInView';

const About = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ threshold: 0.1 });

  const skills = [
    { title: 'Frameworks & Languages', content: 'Flutter, Dart, React Native, JavaScript' },
    { title: 'State Management', content: 'GetX, Provider' },
    { title: 'Backend & Database', content: 'Firebase, REST APIs, MySQL' },
    { title: 'Integrations', content: 'Payment Gateway, Google Maps, QR, Push Notifications, AI Features' },
    { title: 'Tools', content: 'Android Studio, VS Code, Git, Postman, Figma' },
    { title: 'Methodologies', content: 'Agile, Scrum, Code Reviews, Testing' },
  ];

  const experiences = [
    {
      role: 'Flutter Developer',
      company: 'Technorizen Software Solutions Pvt. Ltd.',
      period: 'Feb 2025 - Present',
    },
    {
      role: 'Flutter Developer',
      company: 'Moryeahs IT Technologies Pvt. Ltd.',
      period: 'Oct 2023 - Feb 2025',
    },
    {
      role: 'Personal Banker',
      company: 'HDFC Bank Ltd.',
      period: 'May 2023 - Oct 2023',
    },
  ];

  const educations = [
    {
      degree: 'MBA (Marketing Management)',
      institution: 'Institute of Management Studies, DAVV, Indore',
      period: '2021-2023',
    },
    {
      degree: 'B.Sc. (Computer Science)',
      institution: 'Medicaps University, Indore',
      period: '2017-2020',
    },
  ];

  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div
          ref={aboutRef}
          className={`text-center mb-20 transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading-secondary">About Me</h2>
          <p className="text-lg text-text-secondary mt-2">A little bit about my journey and skills.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          <div className="md:col-span-2">
            <img src="/images/author1.jpg" alt="Profile" className="rounded-2xl mx-auto shadow-card w-full" />
          </div>
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold mb-4 text-text-primary">Who Am I?</h3>
            <p className="text-lg leading-relaxed text-text-secondary">
              Innovative Flutter Developer with over 2 years of professional experience in designing, developing, and deploying mobile applications for Android and iOS. I have delivered more than 15 applications across various domains, including Event Management, HRMS, E-Commerce, CRM, Food Delivery, Ride Booking, AI-based Finance, and Social Networking. I am skilled in Flutter, Dart, Firebase, REST APIs, and state management frameworks like GetX and Provider. Recognized for my ability to manage the complete app delivery process, from gathering requirements to deployment on the Play Store and App Store.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary my-20"></div>

        <div
          ref={skillsRef}
          id="core-skills"
          className={`transition-all duration-1000 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-secondary">Core Skills</h3>
            <p className="text-lg text-text-secondary mt-2">The tools and technologies I use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-secondary p-8 rounded-xl shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-400 ease-in-out-quart border border-transparent hover:border-accent">
                <h4 className="text-xl font-bold mb-3 text-text-primary">{skill.title}</h4>
                <p className="text-text-secondary">{skill.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary my-20"></div>

        <div ref={experienceRef} className={`transition-all duration-1000 ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h3 className="heading-secondary">Professional Experience</h3>
            <p className="text-lg text-text-secondary mt-2">My career so far.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl shadow-card">
                <h4 className="font-bold text-xl text-text-primary">{exp.role}</h4>
                <p className="text-text-secondary font-semibold">{exp.company}</p>
                <p className="text-text-secondary text-sm">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary my-20"></div>

        <div ref={educationRef} className={`transition-all duration-1000 ${educationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h3 className="heading-secondary">Education</h3>
            <p className="text-lg text-text-secondary mt-2">My academic background.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educations.map((edu, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl shadow-card">
                <h4 className="font-bold text-xl text-text-primary">{edu.degree}</h4>
                <p className="text-text-secondary font-semibold">{edu.institution}</p>
                <p className="text-text-secondary text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
