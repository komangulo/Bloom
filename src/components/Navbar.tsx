
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, User, Settings, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-bloom-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
              </div>
              <span className="font-bold text-xl text-bloom-600 dark:text-bloom-400">Bloom</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">
                Home
              </Link>
              
              <Link to="/tracker" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Tracker
              </Link>
              
              <Link to="/insights" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">
                Insights
              </Link>
              
              <Link to="/premium" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400">
                Premium
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-4 pt-2 pb-4 border-b border-border">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400">
              Home
            </Link>
            
            <Link to="/tracker" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Tracker
            </Link>
            
            <Link to="/insights" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400">
              Insights
            </Link>
            
            <Link to="/premium" className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-bloom-600 dark:hover:text-bloom-400">
              Premium
            </Link>
            
            <div className="pt-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <div className="w-4"></div>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500 mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
