"use client"

import { Shield, Lock, Bell, ChevronLeft, ChevronRight, Zap, Globe, Server, FileText, Users, Eye } from 'lucide-react';
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Enhanced services array with categories
const services = [
  {
    id: 1,
    icon: Shield,
    heading: 'Application Security Assessments',
    description: 'Comprehensive evaluations to identify vulnerabilities, enhance security posture, and safeguard applications against evolving cyber threats.',
    category: 'Assessment',
    bgClass: 'bg-gradient-to-br from-orange-100 via-amber-200 to-orange-200',
    textColor: 'text-black'
  },
  {
    id: 2,
    icon: FileText,
    heading: 'Compliance & Regulatory Consulting',
    description: 'Expert guidance to navigate complex regulations, ensuring seamless compliance with GDPR, HIPAA, ISO 27001, and industry standards.',
    category: 'Consulting',
    bgClass: 'bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200',
    textColor: 'text-black'
  },
  {
    id: 3,
    icon: Users,
    heading: 'Resource Augmentation',
    description: 'Flexible staffing solutions providing top-tier cybersecurity professionals to meet project demands without the overhead of full-time hires.',
    category: 'Services',
    bgClass: 'bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800',
    textColor: 'text-white'
  },
  {
    id: 4,
    icon: Bell,
    heading: 'Security Awareness Training',
    description: 'Customized training programs to educate employees on emerging threats, phishing attacks, and best practices for risk mitigation.',
    category: 'Training',
    bgClass: 'bg-gradient-to-br from-purple-900 to-indigo-900',
    textColor: 'text-white'
  },
  {
    id: 5,
    icon: Lock,
    heading: 'Approved Scanning Vendors (ASV) Services',
    description: 'Certified PCI-compliant scanning to detect vulnerabilities, ensure compliance, and strengthen security against external threats.',
    category: 'Assessment',
    bgClass: 'bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-200',
    textColor: 'text-black'
  },
  {
    id: 6,
    icon: Globe,
    heading: 'Cloud Security Review',
    description: 'Thorough security assessments to identify misconfigurations, enforce best practices, and fortify cloud environments against breaches.',
    category: 'Assessment',
    bgClass: 'bg-gradient-to-br from-pink-800 via-rose-700 to-red-800',
    textColor: 'text-white'
  },
  {
    id: 7,
    icon: Zap,
    heading: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    description: 'Rigorous security evaluations combining automated scans and manual testing to uncover and remediate vulnerabilities effectively.',
    category: 'Testing',
    bgClass: 'bg-gradient-to-br from-violet-800 via-purple-700 to-fuchsia-800',
    textColor: 'text-white'
  },
  {
    id: 8,
    icon: Eye,
    heading: 'Red Teaming Assessment',
    description: 'Simulated real-world attacks to test defenses, expose security gaps, and enhance incident response capabilities.',
    category: 'Testing',
    bgClass: 'bg-gradient-to-br from-red-700 via-rose-600 to-pink-700',
    textColor: 'text-white'
  },
  {
    id: 9,
    icon: Server,
    heading: 'Threat Intelligence Services',
    description: 'Proactive threat detection and analysis to provide actionable insights, helping organizations mitigate risks before they escalate.',
    category: 'Services',
    bgClass: 'bg-gradient-to-br from-slate-800 via-gray-700 to-zinc-800',
    textColor: 'text-white'
  }
];



export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollPaused, setScrollPaused] = useState(false);
  const [hasEnoughCards, setHasEnoughCards] = useState(true);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(services.map(service => service.category)))];

  // Filter services based on selected category
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const scrollToOffset = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3; // Width of 3 cards
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Temporarily pause auto-scrolling when manual navigation is used
      setScrollPaused(true);
      setTimeout(() => setScrollPaused(false), 2000);
    }
  }, []);

  // Check if we have enough cards for scrolling
  useEffect(() => {
    const checkCardCount = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.offsetWidth;
        const contentWidth = scrollRef.current.scrollWidth;
        setHasEnoughCards(contentWidth > containerWidth);
      }
    };

    checkCardCount();
    window.addEventListener('resize', checkCardCount);
    
    // Check again when filtered services change
    setTimeout(checkCardCount, 100);

    return () => {
      window.removeEventListener('resize', checkCardCount);
    };
  }, [filteredServices]);

  // Improved auto-scroll effect with better control
  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current && !isHovering && !scrollPaused && hasEnoughCards) {
          const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth - 20;
          
          if (isAtEnd) {
            // Smooth reset to start when reaching the end
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            // Pause briefly after returning to start
            setScrollPaused(true);
            setTimeout(() => setScrollPaused(false), 1500);
          } else {
            // Smooth scroll movement
            scrollRef.current.scrollBy({
              left: 1,
              behavior: 'auto'
            });
          }
        }
      }, 20);
    };

    // Start scrolling if conditions permit
    if (hasEnoughCards && !isHovering && !scrollPaused) {
      startScrolling();
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovering, scrollPaused, hasEnoughCards]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-12 px-4 md:px-8 lg:px-16 bg-black relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
            Business Offerings
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">
            Stay ahead with our latest solutions and insights in cybersecurity
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative px-3 md:px-0">
          <AnimatePresence mode="wait">
            {/* Navigation Buttons - only shown when we have enough cards */}
            {hasEnoughCards && (
              <>
                <motion.button
                  key="left-button"
                  onClick={() => scrollToOffset('left')}
                  className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10"
                >
                  <ChevronLeft className="w-10 h-10 text-black" />
                </motion.button>
                <motion.button
                  key="right-button"
                  onClick={() => scrollToOffset('right')}
                  className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10"
                >
                  <ChevronRight className="w-10 h-10 text-black" />
                </motion.button>
              </>
            )}

            <motion.div
              key="services-container"
              ref={scrollRef}
              className={`flex flex-wrap md:flex-nowrap md:overflow-x-auto ${hasEnoughCards ? 'overflow-hidden' : ''} scroll-smooth gap-6 hide-scrollbar`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-none w-full md:w-[calc(45%-12px)] lg:w-[calc(30%-16px)] group relative rounded-xl overflow-hidden cursor-pointer 
                            shadow-xl shadow-black/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-black/30 transition-all duration-300
                            ${service.bgClass}`}
                  style={{ height: '380px' }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setActiveIndex(index);
                    }
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 768) {
                      setActiveIndex(null);
                    }
                    setIsHovering(false);
                  }}
                >
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium">
                    {service.category}
                  </div>
                  
                  {/* Overlay gradient - enhanced with depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/70" />

                  {/* Content Container */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Icon with improved styling */}
                    <div className="mb-6 rounded-lg p-4 bg-black/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center">
                      <service.icon className={`w-8 h-8 ${service.textColor}`} />
                    </div>

                    {/* Heading only (default state) */}
                    <div className={`mt-auto transition-all duration-300 ${
                      activeIndex === index ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <h3 className={`text-2xl font-bold ${service.textColor}`}>
                        {service.heading}
                      </h3>
                    </div>

                    {/* Expanded content (on hover/active) */}
                    <div 
                      className={`absolute inset-0 p-8 pt-28 transition-all duration-300 flex flex-col ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="mt-auto">
                        <h3 className={`text-2xl font-bold mb-3 ${service.textColor}`}>
                          {service.heading}
                        </h3>
                        <p className={`text-base ${
                          service.textColor === 'text-white' ? 'text-gray-200' : 'text-black/80'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
  );
}