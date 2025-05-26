import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExerciseMenstrualCycle = () => {
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
            Exercise
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            Menstrual Health
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          How a Period Tracker Can Transform Your Understanding of Your Menstrual and Reproductive Health
        </h1>
        
        <div className="w-full mb-8 relative">
          <div className="absolute -z-10 w-48 h-48 bg-pink-100 rounded-full -top-10 left-1/2 transform -translate-x-1/2 opacity-60"></div>
          <div className="absolute -z-10 w-32 h-32 bg-purple-100 rounded-full bottom-10 right-10 opacity-60"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <img 
              src="https://img.freepik.com/vector-premium/grupo-mujeres-haciendo-ejercicio-gimnasio-ilustracion-vectorial-plana_9209-10315.jpg" 
              alt="Mujeres haciendo ejercicio juntas"
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <h2>Take Control of Your Cycle with a Period Tracker</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Wondering when will my next period be? Or struggling with menstrual cycle symptoms that disrupt your daily life? Using a period tracker free app can provide invaluable insights, helping you anticipate changes and prepare better. From tracking period symptoms before it starts to monitoring how long your bleeding lasts, these apps are a game-changer for many.
        </p>

        <h3>Navigating Common Concerns: Discharge, Cramps, and Irregularities</h3>
        <p>
          Have you noticed <strong>brown discharge before period</strong> or felt <strong>cramps but no period</strong>? These signs can sometimes be confusing and worrying. By logging such symptoms regularly, a period tracker helps you identify patterns that might point to issues like <strong>endometriosis symptoms</strong> or <strong>PCOS symptoms</strong>. Similarly, experiencing <strong>pink discharge after sex</strong> can be normal but should be noted for your healthcare provider.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "A period tracker isn't just about dates—it's about understanding your body's unique language and responding with care and knowledge."
        </blockquote>

        <h3>What Happens When Your Period is Late But You're Not Pregnant?</h3>
        <p>
          A <strong>late period but not pregnant</strong> can feel puzzling. Various factors—stress, hormonal imbalances, <strong>birth control side effects</strong>—can influence this. Tracking your cycle with a reliable app enables you to understand your body's rhythm better and know <strong>how long does a period last</strong> for you, which helps distinguish between normal variation and something worth investigating.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8">
          <h3 className="text-2xl font-semibold text-bloom-600 dark:text-bloom-400 mb-4">
            Boost Your Fertility Awareness: Ovulation and Early Pregnancy Signs
          </h3>
          <p className="mb-4">
            Trying to conceive or just curious about your fertility? An <strong>ovulation calculator</strong> lets you find your <strong>fertile window</strong> and answers the question <strong>when do I ovulate</strong>. It's a crucial tool for family planning.
          </p>
          <p>
            Early pregnancy detection is also easier with data. By noting <strong>implantation symptoms</strong> and <strong>pregnancy symptoms first week</strong>, you can spot early pregnancy signs even before a <strong>missed period</strong>. If you wonder, <strong>can I get pregnant during my period</strong>?, a period tracker helps clarify your fertility timeline. Plus, using a <strong>pregnancy test calculator</strong> can optimize when you take your test.
          </p>
        </div>

        <h3>Caring for Your Female Reproductive Health Beyond Menstruation</h3>
        <p>
          Your cycle reflects much about your <strong>female reproductive health</strong>. Tracking changes helps manage <strong>perimenopause symptoms</strong> and maintain vaginal wellbeing through <strong>vaginal health tips</strong>.
        </p>

        <p className="my-4">
          Questions like <strong>is spotting normal</strong> or the safety of <strong>sex during period</strong> become easier to understand with regular tracking. Apps help you log these nuances and communicate them effectively to your doctor.
        </p>

        <h3>How to Track Your Cycle Effectively</h3>
        <p>
          Effective tracking means logging your period start and end dates, any <strong>menstrual cycle symptoms</strong>, and unusual signs such as changes in discharge or mood. Over time, this empowers you to recognize personal patterns and spot red flags early.
        </p>

        <div className="bg-bloom-50 dark:bg-bloom-900/20 p-8 rounded-xl my-12 text-center">
          <h2 className="text-3xl font-bold text-bloom-700 dark:text-bloom-300 mb-4">
            Empower Your Health Journey
          </h2>
          <p className="text-lg mb-6">
            Start tracking your cycle today and gain valuable insights into your body's unique patterns and needs.
          </p>
          <Button 
            asChild 
            className="bg-bloom-600 hover:bg-bloom-700 text-white"
          >
            <Link to="/signup">
              Begin Tracking Now
            </Link>
          </Button>
        </div>

        <h3>Empower Yourself with Knowledge</h3>
        <p>
          A <strong>period tracker free</strong> app isn't just a calendar—it's a personal health assistant. From spotting potential issues like <strong>endometriosis symptoms</strong> to understanding <strong>birth control side effects</strong>, or timing your <strong>fertile window</strong>, tracking your cycle deepens your understanding and control over your reproductive health.
        </p>
      </article>
    </div>
  );
};

export default ExerciseMenstrualCycle;
