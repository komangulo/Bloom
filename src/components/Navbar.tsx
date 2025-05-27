import { useState } from 'react';
import { Calendar, BookOpen, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const baseUrl = 'https://www.period.click/signup';

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href={baseUrl} className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-bloom-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
              </div>
              <span className="font-bold text-xl text-bloom-600 dark:text-bloom-400">Bloom</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400"
              >
                Home
              </a>
              <a 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
              >
                <Calendar className="h-4 w-4 mr-1" />
                Tracker
              </a>
              <a 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-bloom-600 dark:text-bloom-400 hover:text-bloom-700 dark:hover:text-bloom-300"
              >
                Premium
              </a>
              <a 
                href={baseUrl}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-bloom-600 dark:hover:text-bloom-400 flex items-center"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Blog
              </a>
            </div>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a 
              href={baseUrl}
              className="px-4 py-2 text-sm font-medium text-white bg-bloom-600 hover:bg-bloom-700 rounded-md"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
            <a 
              href={baseUrl} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href={baseUrl}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Tracker
              </div>
            </a>
            <a 
              href={baseUrl}
              className="block px-3 py-2 rounded-md text-base font-medium text-bloom-600 dark:text-bloom-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Premium
            </a>
            <a 
              href={baseUrl}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </div>
            </a>
            <div className="pt-2">
              <a
                href={baseUrl}
                className="block w-full px-4 py-2 text-base font-medium text-white text-center bg-bloom-600 hover:bg-bloom-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
