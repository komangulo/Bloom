import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MentalHealthMenstrualCycle = () => {
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
            9 min read
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bloom-100 text-bloom-800 dark:bg-bloom-900 dark:text-bloom-100">
            Mental Health
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            Menstrual Cycle
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          Embracing Your Cycle: How a Period Tracker Enhances Women's Health and Fertility Awareness
        </h1>
        
        <div className="w-full mb-8 relative">
          <div className="absolute -z-10 w-64 h-64 bg-purple-100 rounded-full -top-20 -left-20 opacity-60"></div>
          <div className="absolute -z-10 w-32 h-32 bg-blue-100 rounded-full top-1/2 -right-10 opacity-60"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <img 
              src="https://img.freepik.com/vector-premium/mujeres-trabajando-juntas-oficina-ilustracion-vectorial-plana_9209-10333.jpg" 
              alt="Mujeres apoyándose mutuamente en el bienestar mental"
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <h2>Understanding the Menstrual Cycle Like Never Before</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Tracking your menstrual health has never been easier, thanks to the availability of period tracker free apps. If you've ever asked yourself, when will my next period be, or wondered about unusual menstrual cycle symptoms, these digital tools offer a simple, effective way to gain clarity. Knowing how to track your cycle empowers you to notice period symptoms before it starts, such as mood swings or fatigue, so you can plan your days better.
        </p>

        <h3>Addressing Common Questions and Concerns</h3>
        <p>
          Many women experience symptoms that may feel confusing or worrying: <strong>cramps but no period</strong>, <strong>brown discharge before period</strong>, or <strong>pink discharge after sex</strong>. These can be normal variations but might also signal underlying conditions like <strong>endometriosis symptoms</strong> or <strong>PCOS symptoms</strong>. A period tracker allows you to record these symptoms over time, creating a clear picture of your reproductive health that can be invaluable during medical consultations.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "Your cycle is a vital sign, just like your pulse or blood pressure. Tracking it provides insights that go far beyond just knowing when to expect your period."
        </blockquote>

        <h3>The Puzzle of a Late Period</h3>
        <p>
          Experiencing a <strong>late period but not pregnant</strong> is a common concern. Stress, lifestyle changes, or <strong>birth control side effects</strong> can disrupt your cycle. Using a period tracker, you can monitor cycle length and spot irregularities, helping to answer <strong>how long does a period last</strong> for you personally. This awareness can reduce anxiety and guide you when to seek professional advice.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl my-8">
          <h3 className="text-2xl font-semibold text-bloom-600 dark:text-bloom-400 mb-4">
            Unlocking Fertility Insights
          </h3>
          <p className="mb-4">
            For those trying to conceive or simply wanting to understand fertility better, features like an <strong>ovulation calculator</strong> and identifying your <strong>fertile window</strong> are invaluable. Questions like <strong>when do I ovulate</strong> become easier to answer, helping you optimize conception chances or avoid pregnancy naturally.
          </p>
          <p>
            Tracking <strong>implantation symptoms</strong> and <strong>pregnancy symptoms first week</strong> can provide early clues to pregnancy, even before a <strong>missed period</strong>. A <strong>pregnancy test calculator</strong> also guides timing to ensure accurate results. Wondering <strong>can I get pregnant during my period</strong>? Tracking your cycle gives personalized answers rather than relying on general assumptions.
          </p>
        </div>

        <h3>Supporting Overall Female Reproductive Health</h3>
        <p>
          Cycle tracking isn't just about periods and pregnancy. It's a gateway to better <strong>female reproductive health</strong> management. With insights into <strong>perimenopause symptoms</strong> and practical <strong>vaginal health tips</strong>, you're better equipped to care for your body through different life stages.
        </p>

        <p className="my-4">
          Questions like <strong>is spotting normal</strong> or concerns about <strong>sex during period</strong> are easier to navigate with detailed records. These insights help foster conversations with healthcare providers and promote informed decisions.
        </p>

        <h3>Practical Tips on How to Track Your Cycle Effectively</h3>
        <p>
          Effective cycle tracking means consistently logging your start and end dates, symptoms, moods, and any irregularities. Over time, this data reveals your unique pattern, helping you recognize deviations early and understand your body's signals.
        </p>

        <div className="bg-bloom-50 dark:bg-bloom-900/20 p-8 rounded-xl my-12 text-center">
          <h2 className="text-3xl font-bold text-bloom-700 dark:text-bloom-300 mb-4">
            Start Your Journey to Better Cycle Awareness
          </h2>
          <p className="text-lg mb-6">
            Join thousands of women who have taken control of their reproductive health through cycle tracking.
          </p>
          <Button 
            asChild 
            className="bg-bloom-600 hover:bg-bloom-700 text-white"
          >
            <Link to="/signup">
              Begin Tracking Today
            </Link>
          </Button>
        </div>

        <h3>Final Thoughts: Knowledge is Power</h3>
        <p>
          Using a <strong>period tracker free</strong> app is more than convenience—it's a vital step towards holistic self-care. Whether managing <strong>PCOS symptoms</strong>, understanding <strong>birth control side effects</strong>, or just answering everyday questions about your cycle, embracing this technology equips you with knowledge and confidence.
        </p>

        <p className="mt-6">
          Your cycle is a powerful tool for understanding your body. By tracking it consistently, you're not just predicting periods—you're gaining insights into your overall health and wellbeing that can last a lifetime.
        </p>
      </article>
    </div>
  );
};

export default MentalHealthMenstrualCycle;
