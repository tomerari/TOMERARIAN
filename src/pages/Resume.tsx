
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

const Resume = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1z7Icwl_QuquzT4qLlnBugY6Py0VMa9x6';
    link.download = 'Tomer_Arian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Resume</h1>
            <button 
              onClick={handleDownloadPDF} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-200 transform hover:scale-105"
            >
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
        </div>
      </main>
    </div>
  );
};

export default Resume;
