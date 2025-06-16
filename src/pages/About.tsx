
import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Passionate mechanical engineer with expertise in design, manufacturing, and innovation
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Photo Section */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  {/* Placeholder for profile photo - you can replace this with your actual photo */}
                  <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    Your Photo
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">your.email@example.com</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Your City, State</span>
                  </div>
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">My Engineering Journey</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    As a mechanical engineer, I've always been fascinated by how things work and how they can be improved. 
                    My journey began with taking apart household appliances as a child, which eventually led me to pursue 
                    mechanical engineering with a passion for innovation.
                  </p>
                  <p>
                    Throughout my career, I've worked on diverse projects ranging from automotive components to 
                    manufacturing automation systems. I thrive on solving complex problems and turning innovative 
                    ideas into practical, real-world solutions that make a difference.
                  </p>
                  <p>
                    I'm particularly passionate about sustainable engineering practices and incorporating cutting-edge 
                    technologies like IoT, AI, and advanced materials into traditional mechanical systems to create 
                    the future of engineering.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Design & Analysis</h3>
                </div>
                <div className="space-y-3">
                  {['SolidWorks', 'AutoCAD', 'ANSYS', 'MATLAB', 'FEA', 'CFD'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Manufacturing</h3>
                </div>
                <div className="space-y-3">
                  {['CNC Machining', 'Injection Molding', 'Welding', 'Quality Control', 'Lean Manufacturing'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Leadership</h3>
                </div>
                <div className="space-y-3">
                  {['Project Management', 'Team Leadership', 'Risk Assessment', 'Budget Planning', 'Documentation'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                <div className="pl-8">
                  <div className="absolute left-0 top-6 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1.5"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bachelor of Science in Mechanical Engineering</h3>
                  <p className="text-blue-600 font-semibold mb-3">University Name • 2018-2022</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Graduated Magna Cum Laude with specialization in Design and Manufacturing. 
                    Relevant coursework: Thermodynamics, Fluid Mechanics, Materials Science, Control Systems.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h3>
                <div className="space-y-4">
                  {[
                    'Certified SolidWorks Professional (CSWP)',
                    'Project Management Professional (PMP) - In Progress',
                    'Six Sigma Green Belt',
                    'AutoCAD Certified User'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <Award className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700 text-lg">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, and collaborative ventures. 
              Let's connect and explore how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:your.email@example.com" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail size={24} />
                <span className="text-lg">Email Me</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={24} />
                <span className="text-lg">LinkedIn</span>
              </a>
              
              <a 
                href="/resume" 
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={24} />
                <span className="text-lg">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
