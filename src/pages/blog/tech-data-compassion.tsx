import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export const meta = {
  title: 'Tech, Data, and Compassion: The Future of Personalized Care in OB-GYN',
  description: 'Exploring how technology and compassion work together to shape the future of personalized OB-GYN care.',
  date: '2025-04-15',
  readTime: '8 min',
  category: 'Healthcare Technology',
  image: 'https://images.unsplash.com/photo-1571019614248-8e1c4c4f3a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

const TechDataCompassion = () => {
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
        <div className="absolute -z-10 w-56 h-56 bg-blue-100 rounded-full -top-10 -right-10 opacity-60"></div>
        <div className="absolute -z-10 w-40 h-40 bg-indigo-100 rounded-full bottom-0 left-0 opacity-60"></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <img 
            src="https://img.freepik.com/vector-premium/mujeres-analizando-datos-salud-ilustracion-vectorial-plana_9209-10311.jpg" 
            alt="Mujeres analizando datos de salud"
            className="w-full h-auto max-h-80 object-contain mx-auto"
          />
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>When Patients Turn to the Internet, Who Guides Them?</h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          In today's digital world, patients increasingly look online for answers — especially when it comes to personalized health care. According to data from the CDC, 6 in 10 women used the internet to search for health information in the second half of 2022.¹
        </p>

        <p>
          But there's a catch: not all information is reliable, and few digital sources combine evidence-based content with the nuance of real clinical care. That's where technology, when used wisely, can become a bridge — not a barrier — between patients and their providers.
        </p>

        <h2>Empowering Patients Through Technology</h2>
        <p>
          Apps like Bloom, a female health app with over 380 million users worldwide, are reshaping how patients engage with their reproductive health. From tracking menstrual cycles and pregnancy milestones to logging symptoms and accessing curated health content, Bloom helps users identify patterns and make more informed decisions.
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "Technology has the potential to help with personalized patient care by empowering patients through knowledge." — Dr. Jennifer Boyle, OB-GYN and Bloom expert
        </blockquote>

        <p>Bloom's approach is built around three core principles:</p>
        
        <ul>
          <li><strong>Accuracy:</strong> Providing reliable, evidence-based health information.</li>
          <li><strong>Personalization:</strong> Tailoring content and insights to each user's journey.</li>
          <li><strong>Privacy:</strong> Ensuring user data is kept safe and secure.</li>
        </ul>

        <p>
          This aligns with recommendations from the American College of Obstetricians and Gynecologists (ACOG), which encourages clinicians to help patients track menstrual cycles and patterns to improve communication and understanding during medical visits.²
        </p>

        <p className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
          "Patient education through tools like Bloom helps people arrive at appointments informed and ready to partner in decision-making," adds Dr. Boyle. "That means more productive conversations and better outcomes."
        </p>

        <h2>Technology + Compassion = Real Personalized Care</h2>
        <p>
          While data and apps are revolutionizing the patient experience, OB-GYNs are clear: technology alone isn't enough.
        </p>

        <p className="font-medium my-4">
          Dr. Celestine puts it plainly:
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "There are things you pick up on as a doctor that technology simply can't replace."
        </blockquote>

        <p>
          The human connection—the emotional, empathetic presence of a provider—remains at the heart of truly personalized care. Dr. Boyle agrees:
        </p>

        <blockquote className="border-l-4 border-bloom-500 pl-4 italic my-6">
          "There's something healing about knowing someone cares, that they're sorry you're suffering, and that they genuinely want to help you. That's the essence of the doctor-patient relationship — and no app can replicate that."
        </blockquote>

        <p className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg my-6">
          "Technology can support us," she continues, "but it will never replace our ability to offer compassion, guidance, and a human touch."
        </p>

        <h2>Looking Ahead</h2>
        <p>
          The future of personalized care in OB-GYN isn't a choice between human or digital. It's about integrating both — using tech and data to inform care, while preserving the warmth and empathy only a human can offer.
        </p>

        <p className="text-xl font-medium mt-8">
          Together, we can build a future where every patient feels informed, empowered, and truly cared for.
        </p>

        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg mt-12 text-sm">
          <h3 className="font-semibold mb-2">Sources</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Centers for Disease Control and Prevention (CDC), Health Information Trends 2022</li>
            <li>American College of Obstetricians and Gynecologists (ACOG), Menstrual Health Guidelines</li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default TechDataCompassion;
