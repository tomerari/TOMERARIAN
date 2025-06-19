
import { Mail, Phone, MapPin } from 'lucide-react';

const PersonalInfo = () => {
  return (
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
            <span>+972-53-341-1356</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>Israel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
