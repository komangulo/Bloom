import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavigatingPerimenopause = () => {
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
            8 min read
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bloom-100 text-bloom-800 dark:bg-bloom-900 dark:text-bloom-100">
            Women's Health
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            Period Tracking
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          Why Understanding Your Cycle Is Power: How Period Tracking Empowers Women's Health
        </h1>
        
        <div className="w-full mb-8 relative">
          <div className="absolute -z-10 w-56 h-56 bg-orange-100 rounded-full -top-10 -right-10 opacity-60"></div>
          <div className="absolute -z-10 w-40 h-40 bg-pink-100 rounded-full bottom-0 left-0 opacity-60"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <img 
              src="https://img.freepik.com/vector-premium/concepto-menopausia-ilustracion-vectorial-plana_9209-10313.jpg" 
              alt="Mujer en la etapa de perimenopausia"
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <h2>Knowing Your Body Starts with One Simple Question:</h2>
        <h3 className="text-2xl font-semibold text-bloom-600 dark:text-bloom-400 mb-6">"When will my next period be?"</h3>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          It might seem like a small detail — but knowing the answer can change everything. From managing menstrual cycle symptoms to planning around your fertile window, understanding your cycle isn't just helpful — it's empowering.
        </p>

        <p className="mb-8">
          That's why more and more people are turning to period tracker free apps and tools that put knowledge and control right at their fingertips. Whether you're managing cramps but no period, curious about pink discharge after sex, or simply wondering how to track your cycle, you're not alone — and you're asking the right questions.
        </p>

        <h2>The Power of Personalized Period Tracking</h2>
        <p>
          Every body is different. Some people get headaches, others feel bloated, and many experience brown discharge before period — all of which are normal but deeply individual.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "Tracking your cycle is more than just logging a date. It helps you spot patterns, prepare for symptoms, and take action when something feels off," says Dr. Melinda Jameson, a gynecologist focused on female reproductive health.
        </blockquote>

        <p className="mb-4">
          Understanding your body's rhythm helps you answer questions like:
        </p>
        
        <ul className="mb-6 space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>How long does a period last?</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Are these cramps normal or something more?</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Is spotting normal during this phase of my cycle?</span>
          </li>
        </ul>

        <p className="mb-8">
          And with a free period tracker, you don't need to guess. You can observe, reflect, and make decisions with clarity.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8">
          <h2 className="text-2xl font-semibold text-bloom-600 dark:text-bloom-400 mb-4">Fertility: Tracking for When It Matters Most</h2>
          <p className="mb-4">
            If you're planning (or preventing) pregnancy, tracking your cycle becomes even more crucial. Tools like an ovulation calculator or pregnancy test calculator can help you:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Know when do I ovulate</li>
            <li>Identify your fertile window</li>
            <li>Spot early implantation symptoms</li>
            <li>Recognize pregnancy symptoms first week after conception</li>
          </ul>
          <blockquote className="border-l-4 border-bloom-500 pl-4 italic mt-4">
            "The best part about digital tools is how they bring science into everyday life," explains Dr. Anika Patel, a fertility specialist. "If you've had a missed period or are experiencing early pregnancy signs, having that data from your cycle tracking can be a game-changer for you and your doctor."
          </blockquote>
          <p className="mt-4">
            And yes — one of the most searched questions still holds true:
            <br />
            <span className="font-medium">"Can I get pregnant during my period?"</span>
            <br />
            Short answer: It's rare, but not impossible. Tracking your cycle gives you the context to understand why.
          </p>
        </div>

        <h2>Your Cycle, Your Health</h2>
        <p>
          Many conditions affecting people with cycles can go undiagnosed for years — especially PCOS symptoms or endometriosis symptoms, which often mimic everyday discomfort.
        </p>

        <p className="my-4 font-medium">
          If you're experiencing:
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Period symptoms before it starts that feel extreme</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Late period but not pregnant</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Unexplained mood changes or fatigue</span>
          </li>
        </ul>

        <p className="mb-8">
          ...it might be time to talk to a doctor — armed with your period tracking history.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "Cycle tracking is a form of self-advocacy," says Dr. Boyle, OB-GYN. "Patients who come in with a clear pattern of symptoms are far more likely to get a faster diagnosis."
        </blockquote>

        <h2>Beyond the Cycle: Whole-Body Wisdom</h2>
        <p className="mb-4">
          Tracking doesn't stop at menstruation. It opens doors to understanding:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Birth control side effects</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sex during period – yes, it's safe (and even beneficial!) for some</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Vaginal health tips to maintain comfort and balance</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Perimenopause symptoms as your body transitions over time</span>
          </li>
        </ul>

        <div className="bg-bloom-50 dark:bg-bloom-900/20 p-8 rounded-xl my-12 text-center">
          <h2 className="text-3xl font-bold text-bloom-700 dark:text-bloom-300 mb-4">Own Your Health Journey</h2>
          <p className="text-lg mb-6">
            You deserve to feel informed, confident, and in control. Start tracking your cycle today and unlock the power of your body's natural rhythms.
          </p>
          <Button className="bg-bloom-600 hover:bg-bloom-700 text-white">
            Start Tracking Now
          </Button>
        </div>

        <h2>Final Thoughts</h2>
        <p>
          Understanding your cycle is about more than just knowing when your period will come. It's about having the knowledge and confidence to make informed decisions about your health, your body, and your life. Whether you're trying to conceive, manage symptoms, or simply understand your body better, tracking your cycle is the first step toward taking control of your reproductive health.
        </p>

        <p className="mt-6">
          Because when you understand your cycle, you're not just counting days — you're rewriting the rules of how you care for your body.
        </p>
      </article>
    </div>
  );
};

export default NavigatingPerimenopause;
