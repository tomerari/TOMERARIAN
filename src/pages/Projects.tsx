
import Navigation from '../components/Navigation';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automated Assembly Line Design",
      description: "Designed and implemented an automated assembly line that increased production efficiency by 40%. Included pneumatic systems, conveyor belts, and quality control sensors.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Automation", "Pneumatics", "Quality Control", "SolidWorks"],
      date: "2023",
      duration: "6 months",
      details: [
        "Reduced cycle time from 45 seconds to 27 seconds",
        "Implemented fail-safe mechanisms for operator safety",
        "Created comprehensive documentation and training materials",
        "Collaborated with software team for PLC programming"
      ]
    },
    {
      id: 2,
      title: "Heat Exchanger Optimization",
      description: "Redesigned industrial heat exchanger using CFD analysis to improve thermal efficiency by 25% while reducing pressure drop by 15%.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["CFD", "Thermal Analysis", "ANSYS", "Energy Efficiency"],
      date: "2022",
      duration: "4 months",
      details: [
        "Performed detailed CFD analysis using ANSYS Fluent",
        "Optimized fin geometry for enhanced heat transfer",
        "Validated results through experimental testing",
        "Achieved 20% cost reduction in manufacturing"
      ]
    },
    {
      id: 3,
      title: "Robotic Gripper Design",
      description: "Developed a pneumatic gripper for industrial robots capable of handling objects weighing up to 50kg with precision control.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Robotics", "Pneumatics", "Control Systems", "3D Printing"],
      date: "2022",
      duration: "3 months",
      details: [
        "Designed modular gripper system for multiple object types",
        "Integrated force feedback sensors for delicate handling",
        "Created rapid prototypes using 3D printing",
        "Reduced cycle time by 30% compared to existing solution"
      ]
    },
    {
      id: 4,
      title: "Sustainable Packaging Machine",
      description: "Designed eco-friendly packaging machine that reduces material waste by 35% while maintaining product protection standards.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Sustainability", "Material Science", "Lean Manufacturing"],
      date: "2021",
      duration: "5 months",
      details: [
        "Implemented biodegradable packaging materials",
        "Optimized cutting patterns to minimize waste",
        "Designed modular components for easy maintenance",
        "Achieved ROI payback period of 18 months"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of mechanical engineering projects demonstrating innovation, efficiency, and practical solutions
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Duration: {project.duration}</span>
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                          <Github size={16} />
                          <span>View Code</span>
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                          <ExternalLink size={16} />
                          <span>Learn More</span>
                        </button>
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
                href="mailto:your.email@example.com"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <span>Get In Touch</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
