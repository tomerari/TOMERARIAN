
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import ResumeHeader from '../components/resume/ResumeHeader';
import PersonalInfo from '../components/resume/PersonalInfo';

const Resume = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          <ResumeHeader />
          <PersonalInfo />
        </div>
      </main>
    </div>
  );
};

export default Resume;
