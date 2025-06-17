
import { Link, useLocation } from 'react-router-dom';
import { FileText, FolderOpen, Home } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
  ];

  return (
    <nav className={`${isHomePage ? 'bg-white/10 backdrop-blur-md border-b border-white/20' : 'bg-white shadow-lg'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Engineering Portfolio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
