import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export const meta = {
  title: 'The Role of Personalized Care in Obstetrics and Gynecology',
  description: 'Exploring how personalized care is transforming OB-GYN practices and improving patient outcomes.',
  date: '2025-03-28',
  readTime: '9 min',
  category: 'Patient Care',
  image: 'https://images.unsplash.com/photo-1505751172876-fa12633140d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

const PersonalizedCareOBGYN = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {meta.readTime} read
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-6 dark:text-white">{meta.title}</h1>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bloom-100 text-bloom-800 dark:bg-bloom-900/30 dark:text-bloom-400">
            <Tag className="h-3 w-3 mr-1" />
            {meta.category}
          </span>
        </div>
      </header>

      <div className="w-full mb-8 relative">
        <div className="absolute -z-10 w-56 h-56 bg-pink-100 rounded-full -top-10 -right-10 opacity-60"></div>
        <div className="absolute -z-10 w-40 h-40 bg-purple-100 rounded-full bottom-0 left-0 opacity-60"></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <img 
            src="https://img.freepik.com/vector-premium/medico-mujer-paciente-femenina-ilustracion-vectorial-plana_9209-10314.jpg" 
            alt="Médica y paciente en consulta ginecológica"
            className="w-full h-auto max-h-80 object-contain mx-auto"
          />
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Why Personalized Care Is On the Rise</h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Personalized care is no longer a buzzword — it's a global movement. The personalized medicine market is projected to exceed $1.2 billion by 2033,¹ and in England alone, the National Health Service (NHS) anticipates that up to 2.5 million people will benefit from personalized care by 2024.²
        </p>

        <p>
          Why such rapid growth? Because personalized care puts the individual at the center of treatment — empowering patients with information, choice, and ownership of their health. Studies suggest that this model leads to:
        </p>

        <ul className="my-6 space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Better health outcomes</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Greater health equity</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-bloom-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>More efficient use of healthcare services³</span>
          </li>
        </ul>

        <p className="mb-8">
          And the fields of obstetrics and gynecology (OB-GYN) are evolving rapidly to embrace this transformation.
        </p>

        <h2>What Personalized Care Looks Like in OB-GYN</h2>
        <p>
          Personalized care isn't a single approach — it's a mindset.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "Personalized care as an OB-GYN means treating everyone as an individual. No two people or two problems are the same. I take the time to listen to each person and tailor their treatment accordingly." — Dr. Charlsie Celestine, OB-GYN and member of Bloom's Board of Medical Experts
        </blockquote>

        <p>
          For Dr. Jennifer Boyle, also a Bloom expert and practicing OB-GYN, this means focusing on what matters most to the patient:
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
          <p className="font-medium">"Understanding what is most important to each person — what they value, what they prioritize — helps me work with them as a team," she says.</p>
        </div>

        <p>
          Both experts agree that one of the greatest benefits of personalized care is patient empowerment.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "When people help design their own care plan, they're more likely to follow through and feel in control of their health. That engagement makes a huge difference." — Dr. Jennifer Boyle
        </blockquote>

        <h2>Using Data for Smarter, More Individualized Care</h2>
        <p>
          We live in a world flooded with data — but the real value comes from using it strategically.
        </p>

        <p>
          For OB-GYNs, patient-generated health data — such as menstrual cycle logs, blood pressure, glucose levels, or fitness data — can provide actionable insights that support faster, more accurate diagnosis and more effective treatment plans.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <p className="font-medium mb-2">Dr. Celestine on tracking symptoms:</p>
            <p className="italic">"Tracking symptoms can help us pinpoint concerns like skipped periods in PCOS, or cycle-related pain that might indicate endometriosis."</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="font-medium mb-2">Dr. Boyle on PMDD diagnosis:</p>
            <p className="italic">"The entire diagnosis of PMDD relies on understanding when mood symptoms occur in the menstrual cycle. If a patient comes in already tracking that, it's incredibly helpful and saves time."</p>
          </div>
        </div>

        <p>
          This approach echoes the definition of high-quality, patient-centered care by the Agency for Healthcare Research and Quality (AHRQ) — care that respects and responds to each patient's values, preferences, and needs.
        </p>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-8">
          <p className="font-medium">"When someone walks in already understanding how their body works, it shifts the whole dynamic," says Dr. Boyle. "They're not just being treated — they're actively participating in their care."</p>
        </div>

        <h2>Looking Forward</h2>
        <p>
          Personalized care in OB-GYN isn't just a trend — it's a necessary evolution. By combining patient engagement, smart use of data, and empathy-driven care, providers can deliver not only more effective treatments, but more meaningful and empowering healthcare experiences.
        </p>

        <p className="text-xl font-medium mt-8 text-center">
          And at the center of it all? The individual patient — seen, heard, and treated like no one else.
        </p>

        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg mt-12 text-sm">
          <h3 className="font-semibold mb-2">Sources</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Global Market Insights, Personalized Medicine Market Forecast (2023–2033)</li>
            <li>National Health Service (NHS), England Personalized Care Model Report</li>
            <li>Health Foundation, "Personalised Care: Why Now?"</li>
            <li>Agency for Healthcare Research and Quality (AHRQ), Six Domains of Quality Care</li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default PersonalizedCareOBGYN;
