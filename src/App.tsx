import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Instagram, MapPin, ExternalLink, Menu, X, Award, Users, Palette, Sparkles, Star, Calendar, Clock, Heart, Camera, Crown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Intersection Observer for animations
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { 
      name: 'Bridal Makeup', 
      price: 'Starting at $300',
      icon: <Crown className="w-8 h-8" />, 
      description: 'Complete bridal look with trial session',
      features: ['Trial session included', 'Long-lasting formula', 'Touch-up kit provided', 'Hair styling available']
    },
    { 
      name: 'Special Events', 
      price: 'Starting at $150',
      icon: <Sparkles className="w-8 h-8" />, 
      description: 'Perfect for parties, galas, and celebrations',
      features: ['Custom look design', 'Photo-ready finish', 'Premium products', 'Quick touch-ups']
    },
    { 
      name: 'Editorial/Photoshoot', 
      price: 'Starting at $200',
      icon: <Camera className="w-8 h-8" />, 
      description: 'Professional makeup for photography and media',
      features: ['HD makeup techniques', 'Multiple look changes', 'Collaboration with photographers', 'Portfolio building']
    },
    { 
      name: 'Makeup Lessons', 
      price: 'Starting at $100',
      icon: <Palette className="w-8 h-8" />, 
      description: 'Learn professional techniques and tips',
      features: ['Personalized instruction', 'Product recommendations', 'Technique practice', 'Take-home guide']
    }
  ];

  const portfolioItems = [
    {
      title: 'Elegant Bridal Look',
      category: 'Bridal',
      description: 'Timeless and romantic bridal makeup with soft glam finish',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Glamorous Evening',
      category: 'Special Event',
      description: 'Bold and sophisticated look for red carpet events',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Editorial Fashion',
      category: 'Editorial',
      description: 'High-fashion editorial makeup for magazine photoshoot',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Natural Beauty',
      category: 'Everyday',
      description: 'Fresh and natural everyday makeup enhancement',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Vintage Glam',
      category: 'Special Event',
      description: 'Classic vintage-inspired makeup with modern twist',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Artistic Expression',
      category: 'Editorial',
      description: 'Creative and artistic makeup for fashion editorial',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      event: 'Wedding Day',
      rating: 5,
      text: 'Kanika made me feel absolutely stunning on my wedding day. Her attention to detail and ability to enhance my natural beauty was incredible. I felt confident and beautiful all day long!',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Emily Chen',
      event: 'Photoshoot',
      rating: 5,
      text: 'Working with Kanika for my professional headshots was amazing. She understood exactly what I needed and created a look that was both professional and striking. Highly recommend!',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Maria Rodriguez',
      event: 'Special Event',
      rating: 5,
      text: 'Kanika transformed me for my anniversary celebration. Her expertise and professionalism are unmatched. I received so many compliments and felt absolutely radiant!',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Kanika Chanda
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase()
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white w-full text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image with Animation */}
            <div className="relative mb-12 animate-fadeInUp">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-spin-slow"></div>
                <img
                  src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Kanika Chanda - Professional Makeup Artist"
                  className="w-60 h-60 rounded-full mx-auto object-cover shadow-2xl relative z-10 border-4 border-black"
                  style={{ margin: '8px' }}
                />
              </div>
            </div>

            {/* Hero Text with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold animate-fadeInUp delay-200">
                Professional{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-shimmer">
                  Makeup Artist
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fadeInUp delay-400 max-w-3xl mx-auto">
                Transforming beauty through artistry. Specializing in bridal, editorial, 
                and special occasion makeup that enhances your natural radiance
              </p>

              {/* CTA Buttons with Hover Animations */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fadeInUp delay-600">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 hover:shadow-2xl transform hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Portfolio</span>
                    <Camera className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-10 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Book Consultation</span>
                    <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.about ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible.about ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl"></div>
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kanika Chanda at work"
                  className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible.about ? 'animate-slideInRight' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  With over <span className="text-yellow-400 font-semibold">8 years of experience</span> in the beauty industry, 
                  I am passionate about enhancing natural beauty and creating stunning transformations. 
                  My expertise spans from intimate bridal sessions to high-fashion editorial shoots.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe makeup is an art form that should celebrate individuality while enhancing 
                  confidence. Using only premium products and the latest techniques, I ensure every 
                  client feels radiant and camera-ready for their special moments.
                </p>
              </div>

              {/* Stats with Animation */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '500+', label: 'Happy Clients', icon: <Heart className="w-6 h-6" /> },
                  { number: '200+', label: 'Bridal Looks', icon: <Crown className="w-6 h-6" /> },
                  { number: '8+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-yellow-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.services ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:scale-105 ${
                  isVisible.services ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-yellow-400 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <span className="text-yellow-400 font-bold text-lg">{service.price}</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.portfolio ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>

          {/* Featured Work */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.filter(item => item.featured).map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:scale-105 ${
                  isVisible.portfolio ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <ExternalLink className="w-8 h-8 text-yellow-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Portfolio Items */}
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.filter(item => !item.featured).map((item, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:scale-105 ${
                  isVisible.portfolio ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <ExternalLink className="w-6 h-6 text-yellow-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.testimonials ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Love</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:scale-105 ${
                  isVisible.testimonials ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-yellow-400 text-sm">{testimonial.event}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.contact ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Book Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Session</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible.contact ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-6">Let's Create Magic Together</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Ready to transform your look? I'd love to discuss your vision and create 
                    a stunning makeup experience tailored just for you. Book your consultation today!
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'kanika@makeupstudio.com', href: 'mailto:kanika@makeupstudio.com' },
                    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                    { icon: <MapPin className="w-6 h-6" />, label: 'Studio', value: 'Downtown Beauty District', href: '#' },
                    { icon: <Clock className="w-6 h-6" />, label: 'Hours', value: 'Mon-Sat: 9AM-7PM', href: '#' },
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-lg group-hover:text-yellow-400 transition-colors duration-300">{contact.label}</div>
                        <div className="text-gray-300">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 pt-8">
                  {[
                    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Instagram' },
                    { icon: <Mail className="w-6 h-6" />, href: '#', label: 'Email' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white rounded-full flex items-center justify-center hover:border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible.contact ? 'animate-slideInRight' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="bridal">Bridal Makeup</option>
                        <option value="special-event">Special Event</option>
                        <option value="editorial">Editorial/Photoshoot</option>
                        <option value="lessons">Makeup Lessons</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell me about your vision
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                        placeholder="Describe your event, style preferences, or any special requests..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 hover:shadow-2xl transform hover:scale-105 group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Book Consultation</span>
                        <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Kanika Chanda
            </div>
            <p className="text-gray-400 mb-6">
              © 2024 Kanika Chanda Makeup Artistry. All rights reserved. Creating beauty, one face at a time.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: '#' },
                { icon: <Mail className="w-5 h-5" />, href: '#' },
                { icon: <Phone className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;