import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mb-8">
                <img src="/images/profile.jpg" alt="Ritik Vani" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Ritik Vani,</h1>
                <h2 className="text-4xl md:text-6xl font-bold">Flutter Mobile Application Developer.</h2>
                <p className="mt-4 text-lg">Innovative Flutter Developer with over 2 years of professional experience in designing, developing, and deploying mobile applications for Android and iOS.</p>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">View My Work</a>
                    <a href="#contact" className="text-gray-400 hover:text-white border-2 border-gray-400 hover:border-white font-bold py-3 px-6 rounded-full">Contact Me</a>
                </div>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://github.com/" className="text-gray-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://linkedin.com/in/ritik-vani-858639198" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
