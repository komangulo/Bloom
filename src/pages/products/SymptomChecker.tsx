
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SymptomChecker = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Symptom Checker
        </h1>
        
        <div className="inline-block bg-bloom-500 text-white text-xs px-2 py-1 rounded mb-4">NEW</div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Understand what your symptoms might mean and when to seek medical advice.
        </p>

        {/* Content would go here in a fully implemented version */}
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
          <p className="mb-8">This page is under development.</p>
          
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Get Started with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
