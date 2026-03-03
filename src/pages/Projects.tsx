
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 4,
      title: "Chess Clock",
      description: "Designed and built a digital chess clock using an Arduino Nano microcontroller, chosen for its compact size, along with complex graphic displays to show both players' time simultaneously. The enclosure was 3D printed with threaded inserts to secure the top cover. The main learning objective was gaining experience with displays and Arduino.",
      image: "/lovable-uploads/chess-clock.png",
      tags: ["Arduino", "3D Printing", "Embedded Systems", "Electronics"],
      date: "2025",
      details: [
        "Built around an Arduino Nano with graphic displays for simultaneous time display",
        "Turn transfer mechanism using two buttons — pressing pauses your timer and starts the opponent's",
        "Additional buttons for selecting game time presets and pausing/resuming the game",
        "3D-printed enclosure with threaded inserts for secure assembly",
        "Future improvements planned: buzzer for time-up alert and rechargeable lithium battery for portability"
      ]
    },
    {
      id: 5,
      title: "Alvik Sumo Robot",
      description: "Assisted in building an autonomous sumo robot on the Arduino Alvik platform for a mechatronics lab competition. The team designed and 3D-printed a custom shell using SolidWorks to push opponents and conquer a central hill in a 2-meter arena. The robot navigates autonomously using onboard sensors including a color sensor to detect arena boundaries.",
      image: "/lovable-uploads/sumo-robot.png",
      tags: ["Arduino", "SolidWorks", "3D Printing", "Autonomous Systems", "Mechatronics"],
      date: "2025",
      details: [
        "Autonomous navigation using encoders and color sensor for arena edge detection",
        "Custom 3D-printed shell designed in SolidWorks for pushing opponents off the arena",
        "State machine logic for searching, attacking, and defending strategies",
        "Wireless data logging of sensor readings and state transitions during matches",
        "Competed in a 10-minute match to capture and hold the central hill"
      ]
    },
    {
      id: 1,
      title: "Slope Master",
      description: "Developed a slope-based ball game using Arduino to control moving obstacles, provide feedback on successful attacks. Gained experience in embedded systems, system control, and collaborative project work.",
      image: "/lovable-uploads/d8c03771-5491-48b8-ab34-a55a8057ae3b.png",
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
      image: "/lovable-uploads/6522efe4-383c-46ec-9333-5c174dfbf237.png",
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
      image: "/lovable-uploads/8524d847-17dd-474b-a254-af10b4c5ad2f.png",
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
                      className="w-full h-64 lg:h-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
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

          <div className="mt-16 flex justify-center">
            <a 
              href="mailto:tomerarian558@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
