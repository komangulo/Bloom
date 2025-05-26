import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Tech, Data, and Compassion: The Future of Personalized Care in OB-GYN',
    excerpt: 'Exploring how technology and compassion work together to shape the future of personalized OB-GYN care.',
    date: 'April 15, 2025',
    readTime: '8 min',
    category: 'Healthcare Technology',
    image: 'https://img.freepik.com/vector-premium/mujeres-analizando-datos-salud-ilustracion-vectorial-plana_9209-10311.jpg',
    slug: 'tech-data-compassion'
  },
  {
    id: 2,
    title: 'The Role of Personalized Care in Obstetrics and Gynecology',
    excerpt: 'Exploring how personalized care is transforming OB-GYN practices and improving patient outcomes.',
    date: 'March 28, 2025',
    readTime: '9 min',
    category: 'Patient Care',
    image: 'https://img.freepik.com/vector-premium/medico-mujer-paciente-femenina-ilustracion-vectorial-plana_9209-10314.jpg',
    slug: 'personalized-care-obgyn'
  },
  {
    id: 3,
    title: 'Optimizing Your OB-GYN Workflow: Practical Tips to Boost Practice Efficiency',
    excerpt: 'Discover practical strategies to streamline your OB-GYN practice, leverage technology, and improve patient care through efficient workflows.',
    date: 'March 26, 2025',
    readTime: '8 min',
    category: 'Practice Management',
    image: 'https://img.freepik.com/vector-premium/grupo-mujeres-haciendo-ejercicio-gimnasio-ilustracion-vectorial-plana_9209-10315.jpg',
    slug: 'optimizing-obgyn-workflow'
  },
  {
    id: 4,
    title: 'Enhancing Efficiency in OB-GYN Practices: The ESAD Framework and AI',
    excerpt: 'Learn how implementing the ESAD framework and leveraging AI can transform your OB-GYN practice for better efficiency and patient care.',
    date: 'March 13, 2025',
    readTime: '10 min',
    category: 'Practice Management',
    image: 'https://img.freepik.com/vector-premium/mujeres-trabajando-juntas-oficina-ilustracion-vectorial-plana_9209-10333.jpg',
    slug: 'esad-framework-ai-obgyn'
  },
  {
    id: 5,
    title: 'Time-Saving Tips for Overworked OB-GYNs',
    excerpt: 'Expert-endorsed strategies to help overworked OB-GYNs reclaim their time and improve work-life balance.',
    date: 'January 20, 2025',
    readTime: '7 min',
    category: 'Practice Management',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'time-saving-tips-obgyn'
  },
  {
    id: 6,
    title: 'Navigating Perimenopause: A Guide for Emotional and Physical Health',
    excerpt: 'Comprehensive insights into perimenopause, its symptoms, and strategies for managing this transitional phase with confidence and clarity.',
    date: 'January 15, 2025',
    readTime: '10 min',
    category: 'Women\'s Health',
    image: 'https://img.freepik.com/vector-premium/concepto-menopausia-ilustracion-vectorial-plana_9209-10313.jpg',
    slug: 'navigating-perimenopause'
  },
  {
    id: 7,
    title: 'Q&A with Dr. Lane: Exploring Women\'s Health, Bloom, and Candle Making',
    excerpt: 'An interview with Dr. Emily Lane, obstetrician and gynecologist at Bloom, about women\'s health, her work on the app, and her unexpected hobby of candle making.',
    date: 'January 10, 2025',
    readTime: '8 min',
    category: 'Interview',
    image: 'https://img.freepik.com/vector-premium/doctora-hablando-paciente-sobre-salud-femenina-ilustracion-vectorial-plana_9209-10317.jpg',
    slug: 'dr-lane-interview'
  },
  {
    id: 8,
    title: 'Managing Premenstrual Syndrome',
    excerpt: 'Effective strategies to relieve PMS symptoms and improve your well-being during this phase of your cycle.',
    date: 'January 5, 2025',
    readTime: '6 min',
    category: 'Wellness',
    image: 'https://img.freepik.com/vector-premium/mujer-joven-meditando-estilo-dibujos-animados-aislado_29190-5730.jpg',
    slug: 'managing-pms'
  },
  {
    id: 9,
    title: 'Nutrition for Hormonal Health',
    excerpt: 'The best foods to balance your hormones and improve your reproductive health.',
    date: 'January 1, 2025',
    readTime: '7 min',
    category: 'Nutrition',
    image: 'https://img.freepik.com/vector-premium/mujeres-comiendo-ensalada-juntas-ilustracion-vectorial-plana_9209-10312.jpg',
    slug: 'nutrition-hormonal-health'
  },
  {
    id: 10,
    title: 'Exercise During Your Menstrual Cycle',
    excerpt: 'How to adapt your workout routine to each phase of your cycle for optimal results.',
    date: 'December 25, 2024',
    readTime: '6 min',
    category: 'Exercise',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    slug: 'exercise-menstrual-cycle'
  },
  {
    id: 11,
    title: 'Mental Health and the Menstrual Cycle',
    excerpt: 'Understanding the connection between your mental health and hormonal fluctuations throughout your cycle.',
    date: 'December 20, 2024',
    readTime: '7 min',
    category: 'Mental Health',
    image: 'https://img.freepik.com/vector-premium/mujer-joven-meditando-estilo-dibujos-animados-aislado_29190-5730.jpg',
    slug: 'mental-health-menstrual-cycle'
  }
];

// Popular categories
const categories = [
  { name: 'Women\'s Health', count: 12 },
  { name: 'Pregnancy', count: 8 },
  { name: 'Nutrition', count: 10 },
  { name: 'Exercise', count: 7 },
  { name: 'Mental Health', count: 9 },
  { name: 'Wellness', count: 11 }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-bloom-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bloom Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover informative articles and tips about women's health, wellness, and more.
            </p>
            
            {/* Barra de búsqueda */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-5 py-3 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-bloom-400"
                />
                <button className="absolute right-3 top-3 text-gray-500">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Artículos del blog */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      <Link to={`/blog/${post.slug}`} className="hover:text-bloom-500 dark:hover:text-bloom-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bloom-100 text-bloom-800 dark:bg-bloom-900/30 dark:text-bloom-400">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-bloom-600 dark:text-bloom-400 hover:text-bloom-700 dark:hover:text-bloom-300 text-sm font-medium flex items-center"
                      >
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Anterior
                </button>
                <button className="px-3 py-1 rounded-md bg-bloom-500 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  2
                </button>
                <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  3
                </button>
                <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* About the Blog */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">About the Blog</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to the Bloom Blog, your trusted source for women's health, wellness, and healthy lifestyle information.
              </p>
              <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                      <span className="bg-gray-200 dark:bg-slate-600 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Articles */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Popular Articles</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-bloom-500 dark:group-hover:text-bloom-400 transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Read more</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Health', 'Wellness', 'Nutrition', 'Exercise', 'Pregnancy', 'Fertility', 'Menopause', 'Hormones'].map((tag, index) => (
                  <Link 
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-bloom-100 hover:text-bloom-700 dark:hover:bg-bloom-900/30 dark:hover:text-bloom-400 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
