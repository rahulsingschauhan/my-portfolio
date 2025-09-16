import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-gray-400">A little bit about my journey and skills.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="https://via.placeholder.com/300" alt="Profile" className="rounded-full mx-auto shadow-lg w-64 h-64 object-cover" />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
            <p className="text-lg leading-relaxed">Innovative Flutter Developer with over 2 years of professional experience in designing, developing, and deploying mobile applications for Android and iOS. I have delivered more than 15 applications across various domains, including Event Management, HRMS, E-Commerce, CRM, Food Delivery, Ride Booking, AI-based Finance, and Social Networking. I am skilled in Flutter, Dart, Firebase, REST APIs, and state management frameworks like GetX and Provider. Recognized for my ability to manage the complete app delivery process, from gathering requirements to deployment on the Play Store and App Store.</p>
          </div>
        </div>

        <hr className="border-t-2 border-gray-700 my-16" />

        <div id="core-skills">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Core Skills</h3>
            <p className="text-lg text-gray-400">The tools and technologies I use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Frameworks & Languages</h4>
              <p className="text-gray-400">Flutter, Dart, React Native, JavaScript</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">State Management</h4>
              <p className="text-gray-400">GetX, Provider</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Backend & Database</h4>
              <p className="text-gray-400">Firebase, REST APIs, MySQL</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Integrations</h4>
              <p className="text-gray-400">Payment Gateway, Google Maps, QR, Push Notifications, AI Features</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Tools</h4>
              <p className="text-gray-400">Android Studio, VS Code, Git, Postman, Figma</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Methodologies</h4>
              <p className="text-gray-400">Agile, Scrum, Code Reviews, Testing</p>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-700 my-16" />

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Professional Experience</h3>
            <p className="text-lg text-gray-400">My career so far.</p>
          </div>
          <div className="relative">
            <div className="border-l-2 border-gray-600 absolute h-full left-1/2 -translate-x-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h4 className="font-bold text-lg">Flutter Developer</h4>
                <p className="text-gray-400">Technorizen Software Solutions Pvt. Ltd. | Feb 2025 - Present</p>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="w-1/2 pl-8 text-left">
                <h4 className="font-bold text-lg">Flutter Developer</h4>
                <p className="text-gray-400">Moryeahs IT Technologies Pvt. Ltd. | Oct 2023 - Feb 2025</p>
              </div>
              <div className="w-1/2 pr-8"></div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h4 className="font-bold text-lg">Personal Banker</h4>
                <p className="text-gray-400">HDFC Bank Ltd. | May 2023 - Oct 2023</p>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-700 my-16" />

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Education</h3>
            <p className="text-lg text-gray-400">My academic background.</p>
          </div>
          <div className="relative">
            <div className="border-l-2 border-gray-600 absolute h-full left-1/2 -translate-x-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h4 className="font-bold text-lg">MBA (Marketing Management)</h4>
                <p className="text-gray-400">Institute of Management Studies, DAVV, Indore (2021-2023)</p>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
              <div className="w-1/2 pl-8 text-left">
                <h4 className="font-bold text-lg">B.Sc. (Computer Science)</h4>
                <p className="text-gray-400">Medicaps University, Indore (2017-2020)</p>
              </div>
              <div className="w-1/2 pr-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;