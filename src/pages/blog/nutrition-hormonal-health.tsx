import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NutritionHormonalHealth = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-bloom-500 hover:text-bloom-600 dark:hover:text-bloom-400 transition-colors mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
        </Link>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            May 26, 2025
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            7 min read
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bloom-100 text-bloom-800 dark:bg-bloom-900 dark:text-bloom-100">
            Nutrition
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            Hormonal Health
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          How a Period Tracker Can Empower Your Journey to Better Health
        </h1>
        
        <div className="w-full mb-8 relative">
          <div className="absolute -z-10 w-56 h-56 bg-green-100 rounded-full -top-10 -right-10 opacity-60"></div>
          <div className="absolute -z-10 w-40 h-40 bg-blue-100 rounded-full bottom-0 left-0 opacity-60"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <img 
              src="https://img.freepik.com/vector-premium/mujeres-comiendo-ensalada-juntas-ilustracion-vectorial-plana_9209-10312.jpg" 
              alt="Mujeres compartiendo una comida saludable"
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <h2>When Will My Next Period Be? The Power of Tracking</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          For many, the question "when will my next period be?" is more than a date on the calendar — it's a vital clue about their health and wellbeing. Thanks to period tracker free apps, women now have tools to answer this question with greater accuracy and confidence.
        </p>

        <p className="mb-8">
          Using a period tracker helps you recognize <strong>menstrual cycle symptoms</strong> early, from subtle <strong>period symptoms before it starts</strong> to confusing moments like <strong>cramps but no period</strong>. These insights allow you to understand your body's rhythms like never before.
        </p>

        <h3>Spotting the Signs: Brown Discharge Before Period and Pink Discharge After Sex</h3>
        <p>
          Sometimes your cycle comes with unexpected signals. Noticing <strong>brown discharge before period</strong> can be normal or a sign to watch closely, while <strong>pink discharge after sex</strong> often surprises many but can be harmless.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "By logging these details in your period tracker, you create a personalized health diary that supports better female reproductive health and guides discussions with your healthcare provider."
        </blockquote>

        <h3>Late Period But Not Pregnant? What Could It Mean?</h3>
        <p>
          A <strong>late period but not pregnant</strong> is a common concern. Stress, hormonal changes, or health conditions such as <strong>PCOS symptoms</strong> or <strong>endometriosis symptoms</strong> might be involved. Tracking your cycle closely can help you spot irregularities and know when to seek medical advice.
        </p>

        <p className="my-4">
          Understanding <strong>how long does a period last</strong> on average, compared to your own history, adds another layer to your self-awareness and care.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8">
          <h3 className="text-2xl font-semibold text-bloom-600 dark:text-bloom-400 mb-4">
            Fertility and Pregnancy: Tracking for Life Changes
          </h3>
          <p className="mb-4">
            When planning for pregnancy or contraception, knowing your <strong>fertile window</strong> is crucial. An <strong>ovulation calculator</strong> answers the question, <strong>when do I ovulate</strong>? helping you pinpoint peak fertility days.
          </p>
          <p>
            Tracking <strong>implantation symptoms</strong> and <strong>pregnancy symptoms first week</strong> provides early clues to pregnancy, often even before a <strong>missed period</strong>. And if you wonder, <strong>can I get pregnant during my period</strong>?, your cycle data can give you a personalized answer.
          </p>
          <p className="mt-4">
            A <strong>pregnancy test calculator</strong> can also help decide the best time to test, reducing anxiety and uncertainty.
          </p>
        </div>

        <h3>Women's Health Beyond the Cycle</h3>
        <p>
          Cycle tracking goes beyond periods. It helps you monitor <strong>birth control side effects</strong>, get reliable <strong>vaginal health tips</strong>, and recognize <strong>perimenopause symptoms</strong> as you age.
        </p>

        <p className="my-4">
          Questions like <strong>is spotting normal</strong>? or <strong>sex during period — is it safe</strong>? are easier to answer with accurate cycle data, making your healthcare conversations more productive and personalized.
        </p>

        <h3>How to Track Your Cycle Effectively</h3>
        <p>
          Consistency is key. Logging start and end dates is just the beginning. Note symptoms, moods, discharge, and any unusual changes.
        </p>

        <p className="my-4">
          Using a <strong>period tracker free</strong> app simplifies this process, turning daily observations into meaningful health insights.
        </p>

        <div className="bg-bloom-50 dark:bg-bloom-900/20 p-8 rounded-xl my-12 text-center">
          <h2 className="text-3xl font-bold text-bloom-700 dark:text-bloom-300 mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-lg mb-6">
            Track your cycle, understand your body, and take control of your reproductive health with confidence.
          </p>
          <Button 
            asChild 
            className="bg-bloom-600 hover:bg-bloom-700 text-white"
          >
            <Link to="/signup">
              Start Tracking Now
            </Link>
          </Button>
        </div>

        <h3>Final Thoughts: Knowledge is Empowerment</h3>
        <p>
          Your menstrual cycle is a powerful health indicator. A <strong>free period tracker</strong> puts you in control, offering clarity on everything from <strong>PCOS symptoms</strong> and <strong>endometriosis symptoms</strong> to fertility and early pregnancy signs.
        </p>

        <p className="mt-6">
          When you track your cycle, you're not just keeping dates — you're empowering your journey toward better health and wellbeing.
        </p>
      </article>
    </div>
  );
};

export default NutritionHormonalHealth;
