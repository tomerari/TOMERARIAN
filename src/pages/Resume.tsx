import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import { Download, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';
const Resume = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1z7Icwl_QuquzT4qLlnBugY6Py0VMa9x6';
    link.download = 'Tomer_Arian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Resume</h1>
            <button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-200 transform hover:scale-105">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Tomer Arian</h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">Mechanical Engineering Student</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Mail size={16} />
                  <span>tomerarian55@gmail.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone size={16} />
                  <span>+972-54-341-1356</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Israel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Education</h3>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Mechanical Engineering</h4>
                      <p className="text-blue-600 font-medium">Tel Aviv University</p>
                    </div>
                    <span className="text-gray-500 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">Third Year Student</p>
                  <p className="text-gray-700">
                    <strong>Relevant Coursework:</strong> Statics, Dynamics, Strength of Materials, 
                    Thermodynamics, Fluid Mechanics, Heat Transfer, Control Theory, Manufacturing Processes
                  </p>
                </div>
              </section>

              <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Experience</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Warehouse Worker</h4>
                        <p className="text-blue-600 font-medium">Various Companies</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2018 - 2022
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Gained experience in logistics and warehouse operations</li>
                      <li>Developed strong work ethic and time management skills</li>
                      <li>Worked efficiently in team-oriented environments</li>
                      <li>Handled inventory management and quality control</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Military Service</h4>
                        <p className="text-blue-600 font-medium">Israel Defense Forces</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2019 - 2022
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Served in mandatory military service</li>
                      <li>Developed leadership and teamwork capabilities</li>
                      <li>Enhanced problem-solving skills under pressure</li>
                      <li>Maintained high standards of discipline and responsibility</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Projects</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Slope Master Game</h4>
                        <p className="text-blue-600 font-medium">Arduino Project</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2024
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Developed slope-based ball game using Arduino</li>
                      <li>Programmed microcontroller for game logic and control</li>
                      <li>Implemented moving obstacle mechanisms</li>
                      <li>Applied embedded systems and control theory concepts</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Lettuce Dryer</h4>
                        <p className="text-blue-600 font-medium">Mechanical Design Project</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2023
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Designed complete mechanical system using SolidWorks</li>
                      <li>Created detailed technical drawings and documentation</li>
                      <li>Implemented gear systems and mechanical components</li>
                      <li>Collaborated effectively in team design environment</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">CAD Software</h4>
                    <div className="space-y-1">
                      {['SolidWorks', 'AutoCAD', 'Technical Drawings', '3D Modeling'].map(skill => <div key={skill} className="text-gray-700">{skill}</div>)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Programming</h4>
                    <div className="space-y-1">
                      {['Arduino', 'C++', 'Embedded Systems', 'Control Programming'].map(skill => <div key={skill} className="text-gray-700">{skill}</div>)}
                    </div>
                  </div>

                  <div>
                    
                    <div className="space-y-1">
                      {['Mechanical Design', 'Control Systems', 'Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Manufacturing Processes'].map(skill => {})}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Languages</h3>
                
                <div className="space-y-3">
                  {['Hebrew (Native)', 'English (Fluent)', 'Russian (Conversational)', 'Arabic (Basic)'].map(lang => <div key={lang} className="text-gray-700">{lang}</div>)}
                </div>
              </section>

              
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Resume;