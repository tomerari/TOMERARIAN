
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, Tag } from 'lucide-react';
import slopeMasterImage from '../assets/slope-master-hd.jpg';
import insuloadImage from '../assets/insuload-hd.jpg';
import lettuceDryerImage from '../assets/lettuce-dryer-hd.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Slope Master",
      description: "Developed a slope-based ball game using Arduino to control moving obstacles, provide feedback on successful attacks. Gained experience in embedded systems, system control, and collaborative project work.",
      image: slopeMasterImage,
      tags: ["Arduino", "Embedded Systems", "Control Systems", "Game Development"],
      date: "2024",
      details: [
        "Programmed Arduino microcontroller for game logic",
        "Designed moving obstacle control mechanisms",
        "Implemented feedback systems for user interaction",
        "Developed embedded software for real-time control",
        "Applied system integration and testing methodologies"
      ]
    },
    {
      id: 2,
      title: "Insuload",
      description: "Assisted in engineering design course for biomedical engineering, developing an innovative insulin delivery system. Gained hands-on experience in biomedical device design and engineering principles.",
      image: insuloadImage,
      tags: ["Biomedical Engineering", "Device Design", "Engineering Assistance", "Medical Technology"],
      date: "2024",
      details: [
        "Assisted in biomedical engineering design course",
        "Contributed to insulin delivery system development",
        "Applied engineering principles to medical device design",
        "Gained experience in biomedical technology",
        "Collaborated on innovative healthcare solutions"
      ]
    },
    {
      id: 3,
      title: "Lettuce Dryer",
      description: "Designed and built a mechanical lettuce dryer using SolidWorks and technical drawings, gained experience with gears and teamwork in a design project.",
      image: lettuceDryerImage,
      tags: ["SolidWorks", "Mechanical Design", "Gears", "Technical Drawings"],
      date: "2023",
      details: [
        "Designed complete mechanical system using SolidWorks",
        "Created detailed technical drawings and documentation",
        "Implemented gear systems for optimal functionality",
        "Collaborated effectively in team environment",
        "Applied engineering principles to real-world application"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Projects</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              A showcase of mechanical engineering projects demonstrating hands-on experience with design, 
              embedded systems, and collaborative problem-solving
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">{project.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Tag size={16} className="text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">Technologies Used:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
              <p className="text-xl mb-6 opacity-90">
                I'm always excited to discuss new projects and opportunities
              </p>
              <a 
                href="mailto:tomerarian558@gmail.com"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
