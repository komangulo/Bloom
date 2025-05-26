
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-bloom-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
              </div>
              <span className="font-bold text-xl text-bloom-600 dark:text-bloom-400">Bloom</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Your privacy-first reproductive health companion. Track your cycle, understand your fertility, and take control of your health.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tracker" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Cycle Tracker
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Health Insights
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Premium Features
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="mailto:support@bloom-health.app" className="text-gray-600 dark:text-gray-400 hover:text-bloom-600 dark:hover:text-bloom-400 text-sm">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Bloom Health. All rights reserved. <br className="md:hidden" />
            Your privacy is our priority.
          </p>
        </div>
      </div>
    </footer>
  );
}
