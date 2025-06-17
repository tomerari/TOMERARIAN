import ParticleBackground from './ParticleBackground';
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
            <p className="text-lg text-gray-700 mb-8">tomerarian55@gmail.com</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/resume" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                View Resume
              </a>
              <a href="/projects" className="bg-transparent hover:bg-black/10 text-black border-2 border-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;