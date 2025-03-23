"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const features = [
  {
    category: "CYBER STRATEGY",
    question: "Design and operationalize a secure business strategy to protect value and customer trust",
    answer: "We craft comprehensive security strategies that align with your business goals, ensuring protection without compromising operational efficiency.",
    image: "/images/whyUs1.jpeg",
    size: "col-span-full md:col-span-2" // Full width on mobile, 2 cols on larger screens
  },
  {
    category: "CYBER PROTECTION",
    question: "Rapidly modernize security to safeguard your digital core",
    answer: "Leverage cutting-edge security solutions that adapt to your growing business needs while maintaining robust protection.",
    hasImage: false,
    size: "col-span-full md:col-span-1"
  },
  {
    category: "QUANTUM SECURITY",
    question: "Shield your data for a quantum-safe future",
    stats: "75%",
    statsText: "of encryption in use today is at risk",
    hasImage: false,
    size: "col-span-full md:col-span-1",
    variant: "stats"
  },
  {
    category: "CYBER RESILIENCE",
    question: "Ready to respond quickly to unseen security threats and new regulations?",
    answer: "Our proactive approach and rapid response protocols ensure your business stays protected against emerging threats and evolving regulations.",
    image: "/images/whyUs2.jpeg",
    size: "col-span-full md:col-span-1"
  },
  {
    category: "CYBER-PHYSICAL SECURITY",
    question: "Protect your operational technology and connected products confidently",
    answer: "Secure your physical and digital assets with our comprehensive cyber-physical security solutions.",
    image: "/images/whyUs3.jpeg",
    size: "col-span-full md:col-span-1"
  },
  {
    category: "CYBER INDUSTRY",
    question: "Is your cyber resilience fit for your industry?",
    answer: "Industry-specific solutions tailored to your unique challenges and compliance requirements.",
    hasImage: false,
    size: "col-span-full md:col-span-1"
  },
  {
    category: "CYBERSECURITY CENTERS",
    question: "How will you outsmart your toughest cybersecurity challenges?",
    answer: "Our security operations centers provide 24/7 monitoring and rapid incident response to keep your business protected.",
    image: "/images/whyUs4.jpeg",
    size: "col-span-full md:row-span-1 md:col-span-2"
  }
];

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="why-us" className="py-8 px-4 md:px-8 lg:px-16 bg-black" ref={ref}>
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-16 text-primary-500"
        >
          Why Security Monks?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] sm:auto-rows-[minmax(250px,auto)] gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${feature.size}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
            >
              {/* Background Image or Color */}
              {feature.image ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.category}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/70"></div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-zinc-900 transition-colors duration-300 group-hover:bg-zinc-800"></div>
              )}

              {/* Content */}
              <div className="relative h-full p-4 sm:p-6 flex flex-col">
                {/* Category */}
                <div className="mb-3 sm:mb-4">
                  <div className="h-1 w-12 bg-primary-500 mb-3 sm:mb-4"></div>
                  <span className="text-sm font-medium text-primary-500">
                    {feature.category}
                  </span>
                </div>

                {/* Question/Answer or Stats */}
                {feature.variant === 'stats' ? (
                  <div className="flex flex-col justify-center items-start h-full">
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">{feature.stats}</div>
                    <p className="text-lg sm:text-xl text-gray-300">{feature.statsText}</p>
                  </div>
                ) : (
                  <div className="relative flex-1">
                    <div
                      className={`absolute inset-0 transition-all duration-300 ${
                        activeIndex === index ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                      }`}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {feature.question}
                      </h3>
                    </div>

                    <div
                      className={`absolute inset-0 transition-all duration-300 ${
                        activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    >
                      <p className="text-sm sm:text-base text-gray-200">
                        {feature.answer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Learn More Link */}
                {/* <div className={`mt-4 transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-primary-500 text-sm font-medium cursor-pointer hover:text-primary-400">
                    Learn more →
                  </span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 