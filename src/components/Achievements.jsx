import React from 'react';
import useInView from '../hooks/useInView';

const achievements = [
  {
    title: 'Employee of the Month',
    issuer: 'Technorizen Software Solutions',
    year: '2024',
    description: 'Recognized for outstanding performance and dedication.'
  },
  {
    title: 'Star Performer',
    issuer: 'Moryeahs IT Technologies',
    year: '2023',
    description: 'Awarded for exceeding project goals and teamwork.'
  },
  {
    title: 'Dean’s List',
    issuer: 'Institute of Management Studies, DAVV',
    year: '2022',
    description: 'Achieved academic excellence during my MBA program.'
  }
];

const Achievements = () => {
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={achievementsRef}
      id="achievements" 
      className={`section bg-primary transition-all duration-1000 ${achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Achievements</h2>
          <p className="text-lg text-text-secondary mt-2">A few of my proudest accomplishments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-secondary p-8 rounded-xl shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-400 ease-in-out-quart border border-transparent hover:border-accent">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-text-primary">{achievement.title}</h3>
                <p className="text-md font-semibold text-text-secondary">{achievement.issuer} ({achievement.year})</p>
              </div>
              <p className="text-text-secondary">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
