
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate mechanical engineer with expertise in design, manufacturing, and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a mechanical engineer, I've always been fascinated by how things work and how they can be improved. 
                  My journey began with taking apart household appliances as a child, which eventually led me to pursue 
                  mechanical engineering.
                </p>
                <p>
                  Throughout my career, I've worked on diverse projects ranging from automotive components to 
                  manufacturing automation systems. I thrive on solving complex problems and turning innovative 
                  ideas into practical solutions.
                </p>
                <p>
                  I'm particularly passionate about sustainable engineering practices and incorporating new 
                  technologies like IoT and AI into traditional mechanical systems.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Design & Analysis</h3>
                  <div className="flex flex-wrap gap-2">
                    {['SolidWorks', 'AutoCAD', 'ANSYS', 'MATLAB', 'FEA', 'CFD'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
                  <div className="flex flex-wrap gap-2">
                    {['CNC Machining', 'Injection Molding', 'Welding', 'Quality Control', 'Lean Manufacturing'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Management</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Agile', 'Risk Assessment', 'Budget Planning', 'Team Leadership', 'Documentation'].map((skill) => (
                      <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Science in Mechanical Engineering</h3>
                <p className="text-gray-600 mb-2">University Name • 2018-2022</p>
                <p className="text-gray-700">
                  Graduated Magna Cum Laude with specialization in Design and Manufacturing. 
                  Relevant coursework: Thermodynamics, Fluid Mechanics, Materials Science, Control Systems.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Certifications</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Certified SolidWorks Professional (CSWP)</li>
                  <li>• Project Management Professional (PMP) - In Progress</li>
                  <li>• Six Sigma Green Belt</li>
                  <li>• AutoCAD Certified User</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always interested in discussing new opportunities and innovative projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:your.email@example.com" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
