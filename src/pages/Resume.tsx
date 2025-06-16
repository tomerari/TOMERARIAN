
import Navigation from '../components/Navigation';
import { Download, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-200 transform hover:scale-105">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Name</h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">Mechanical Engineer</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Mail size={16} />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>City, State</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Professional Experience</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Mechanical Engineer</h4>
                        <p className="text-blue-600 font-medium">Company Name</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2022 - Present
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Designed and optimized mechanical components using SolidWorks, reducing manufacturing costs by 15%</li>
                      <li>Led cross-functional team of 5 engineers in developing new product line</li>
                      <li>Implemented lean manufacturing principles, improving production efficiency by 20%</li>
                      <li>Conducted FEA analysis to ensure component reliability and safety standards</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Junior Mechanical Engineer</h4>
                        <p className="text-blue-600 font-medium">Previous Company</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        2020 - 2022
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Assisted in design and testing of automotive components</li>
                      <li>Performed quality control inspections and created detailed reports</li>
                      <li>Collaborated with manufacturing team to troubleshoot production issues</li>
                      <li>Maintained technical documentation and design specifications</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">Engineering Intern</h4>
                        <p className="text-blue-600 font-medium">Internship Company</p>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        Summer 2019
                      </span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Supported senior engineers in product development projects</li>
                      <li>Created technical drawings and 3D models using CAD software</li>
                      <li>Participated in design reviews and testing procedures</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Education</h3>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Mechanical Engineering</h4>
                      <p className="text-blue-600 font-medium">University Name</p>
                    </div>
                    <span className="text-gray-500 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2018 - 2022
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">Magna Cum Laude, GPA: 3.8/4.0</p>
                  <p className="text-gray-700">
                    <strong>Relevant Coursework:</strong> Thermodynamics, Fluid Mechanics, Materials Science, 
                    Control Systems, Manufacturing Processes, Machine Design
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">CAD Software</h4>
                    <div className="space-y-1">
                      {['SolidWorks', 'AutoCAD', 'Inventor', 'Fusion 360'].map((skill) => (
                        <div key={skill} className="text-gray-700">{skill}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Analysis Tools</h4>
                    <div className="space-y-1">
                      {['ANSYS', 'MATLAB', 'Simulink', 'LabVIEW'].map((skill) => (
                        <div key={skill} className="text-gray-700">{skill}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
                    <div className="space-y-1">
                      {['CNC Machining', 'Injection Molding', 'Welding', '3D Printing'].map((skill) => (
                        <div key={skill} className="text-gray-700">{skill}</div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Programming</h4>
                    <div className="space-y-1">
                      {['Python', 'C++', 'MATLAB', 'G-code'].map((skill) => (
                        <div key={skill} className="text-gray-700">{skill}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Certifications</h3>
                
                <div className="space-y-3">
                  {[
                    'Certified SolidWorks Professional (CSWP)',
                    'Six Sigma Green Belt',
                    'AutoCAD Certified User',
                    'PMP (In Progress)'
                  ].map((cert) => (
                    <div key={cert} className="flex items-start space-x-2">
                      <FileText size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">Awards</h3>
                
                <div className="space-y-3">
                  {[
                    'Employee of the Month - March 2023',
                    'Innovation Award 2022',
                    'Dean\'s List - 4 Semesters',
                    'Outstanding Senior Design Project'
                  ].map((award) => (
                    <div key={award} className="text-gray-700">{award}</div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
