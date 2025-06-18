
import { Download } from 'lucide-react';

const ResumeHeader = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1z7Icwl_QuquzT4qLlnBugY6Py0VMa9x6';
    link.download = 'Tomer_Arian_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
  );
};

export default ResumeHeader;
