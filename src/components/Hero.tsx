import ParticleBackground from './ParticleBackground';
import { Linkedin } from 'lucide-react';
const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/02d759e2-2f3e-42a2-b224-103a64f6ce5c.png" alt="Tomer Arian" className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl" />
          </div>
          
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Tomer Arian
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl">
              Mechanical Engineering Student
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
              Motivated and analytical problem solver with a strong ability to learn quickly and adapt to new challenges. Experienced in small-scale projects, with a hands-on approach to problem-solving and process optimization. Eager to apply my knowledge and skills in a dynamic environment while continuously expanding my expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="/resume" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                View Resume
              </a>
              <a href="/projects" className="bg-transparent hover:bg-black/10 text-black border-2 border-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                View Projects
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mb-6">
              <a href="https://www.linkedin.com/in/tomerarian/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://ratings.fide.com/profile/2826682" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-transparent hover:bg-black/10 text-black border-2 border-black px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                <img src="/lovable-uploads/7c02b1b5-5612-462b-a052-e921cf31f614.png" alt="FIDE" className="w-5 h-5" />
                <span>FIDE</span>
              </a>
            </div>

            <div className="text-center lg:text-left">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;