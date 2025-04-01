
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PregnancyDueDateCalculator = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Pregnancy Due Date Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate your estimated due date based on your last period.
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

export default PregnancyDueDateCalculator;
