import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function DrLaneInterview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-bloom-600 hover:text-bloom-800 dark:text-bloom-400 dark:hover:text-bloom-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>
      
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-12">
          <span className="text-bloom-600 dark:text-bloom-400 font-medium">Interview</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">
            Q&A with Dr. Lane: Exploring Female Health, Bloom, and Candle Crafting
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <span>May 26, 2025</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" 
            alt="Dr. Emily Lane"
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Dr. Emily Lane has been part of Bloom's expert board since 2019. She is a board-certified obstetrician and gynecologist accredited by the American Board of Obstetrics and Gynecology.
          </p>
          
          <p>
            In addition to her role at Bloom, Dr. Lane practices obstetrics and gynecology at Cedars-Sinai Medical Center, a position she has held since 2019. She is also the co-founder of Women's Health Collective alongside her friend and professional partner, Dr. Naomi Cross.
          </p>

          <p>
            Dr. Lane holds a medical degree from Albany Medical College and earned her Bachelor of Science in Biological and Physical Sciences from the University of California, Santa Barbara. She completed her internship and residency in obstetrics and gynecology at the University of Southern California.
          </p>

          <p className="font-medium">
            Keep reading to learn how Dr. Lane became part of Bloom, what she enjoys outside of medicine, and the unexpected artistic hobby that connects with her professional life: candle crafting.
          </p>

          <div className="bg-bloom-50 dark:bg-bloom-900/30 p-6 rounded-lg border-l-4 border-bloom-500">
            <h3 className="text-xl font-semibold mb-4">What inspired you to join Bloom's expert board?</h3>
            <p>
              In 2019, one of Bloom's medical directors reached out after discovering my blog, LadyCycles, where I write about fertility, pregnancy, and general women's health topics. She thought I might be a good fit, and after we talked, I agreed. I appreciated Bloom's dedication to accurate information, scientific sourcing, and a balanced, evidence-based approach. Their tone isn't alarmist, which really resonated with me.
            </p>
          </div>

          <h3>Do you personally use Bloom?</h3>
          <p>
            I do! I use the Bloom app to track my menstrual cycle and to experience the app as a user would. It's user-friendly and beautifully designed—very intuitive and clear.
          </p>

          <h3>What have you most enjoyed in your work with Bloom?</h3>
          <p>
            I really enjoy the anonymous Q&A sessions. Many of the questions users ask are the same ones I hear from patients in my practice. It's incredibly rewarding to provide clear, helpful information and see others engage—responding with things like, "I've been wondering the same thing," or "This helped answer my concern, too." Even though I'm not giving individual medical advice, the shared knowledge really benefits a wide audience.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">From your experience, what is the most misunderstood aspect of female health?</h3>
            <p>
              Honestly, I'd say the menstrual cycle. There's a huge knowledge gap about how it works—from the natural hormonal rhythm to the fact that menstruation is closely tied to ovulation. So much of reproductive medicine is anchored in understanding the cycle: hormonal contraception, fertility tracking, and even menopause. Yet, many patients haven't been taught the basic physiology.
            </p>
          </div>

          <h3>Which topics are you most passionate about in female health, and why?</h3>
          <p>
            Obstetrics is a cornerstone of my practice. It's incredible to guide people through pregnancy, childbirth, and the postpartum experience. These are such significant, life-altering moments—and I feel honored to support them through it.
          </p>
          <p>
            I'm also very passionate about sexual wellness. Historically, it's been a neglected area in women's health. But that's changing. We now have growing research, new treatments, and better recognition of the psychological, biological, and social dimensions of sexual well-being. It's a complex topic that deserves multidimensional care.
          </p>

          <h3>Looking ahead five years, what changes would you like to see in female health?</h3>
          <p>
            There's growing awareness around menopause and its symptoms, which is encouraging. For too long, menopause has been overlooked in medical discussions. I hope to see an increase in menopause specialists and more comprehensive care models to support women during this transitional stage.
          </p>

          <div className="bg-bloom-50 dark:bg-bloom-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What do you enjoy beyond your professional work?</h3>
            <p>
              I'm a mom of two and married—so spending time with my family is a top priority. We love to explore Los Angeles and travel whenever we can. We're actually headed to Italy this summer.
            </p>
            <p className="mt-4">
              I'm also a cofounder of Women's Health Collective with Dr. Naomi Cross. We run educational workshops aimed at improving sexual health literacy. Just like my work with Bloom, it's another way to use my clinical expertise to empower people through education.
            </p>
          </div>

          <h3>What's your most unexpected hobby?</h3>
          <p>
            Candle crafting! I run a small business called Blocklight Candles. The concept actually overlaps with my medical world: I design candles shaped like children's building blocks, which can be stacked into shapes like rectangles or squares. They've become popular for baby showers—people take a candle home, and when the parent goes into labor, everyone lights theirs in support. It's a beautiful, symbolic tradition that ties back to pregnancy and birth in a unique way.
          </p>

          <h3>Lastly, what's your morning ritual?</h3>
          <p>
            If I'm headed to the clinic, it's usually a chaotic dash out the door. But on my non-clinical days, I take it slow—my kids wake me up as they're getting ready for school, then I sip my coffee at the dining table and go through my emails. It's my way of easing into the day, getting mentally organized, and planning what's ahead.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" 
                alt="Dr. Emily Lane"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">Dr. Emily Lane</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Obstetrician and Gynecologist, Bloom's Expert Board</p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
