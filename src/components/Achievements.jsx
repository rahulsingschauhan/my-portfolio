import React from 'react';

const achievements = [
  {
    icon: 'fas fa-trophy',
    title: '15+ Deployed Apps',
    description: 'Successfully deployed over 15 apps on the Google Play Store and Apple App Store.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Full Lifecycle Expertise',
    description: 'Expertise in the full mobile app lifecycle and meeting tight deadlines.',
  },
  {
    icon: 'fas fa-star',
    title: 'High User Satisfaction',
    description: 'Excellent feedback and user satisfaction for deployed apps.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 shadow-lg text-center transform transition-transform hover:-translate-y-2">
              <i className={`${achievement.icon} text-blue-500 text-4xl mb-6`}></i>
              <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
