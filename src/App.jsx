import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900">
          <Hero />
        </section>

        {/* About Me */}
        <section className="bg-gray-800">
          <About />
        </section>

        {/* My Projects */}
        <section className="bg-gray-900">
          <Projects />
        </section>

        {/* My Achievements */}
        <section className="bg-gray-800">
          <Achievements />
        </section>

        {/* Get In Touch */}
        <section className="bg-gray-900">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
