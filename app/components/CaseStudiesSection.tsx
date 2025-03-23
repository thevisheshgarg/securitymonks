'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'Financial Institution Security Upgrade',
    industry: 'Banking',
    challenge: 'Outdated security infrastructure vulnerable to modern threats',
    solution: 'Implemented advanced threat detection and prevention systems',
    result: '95% reduction in security incidents',
    image: '/images/case_bank.jpeg'
  },
  {
    title: 'Healthcare Data Protection',
    industry: 'Healthcare',
    challenge: 'Need for HIPAA compliance and patient data security',
    solution: 'Comprehensive data encryption and access control system',
    result: 'Achieved 100% HIPAA compliance',
    image: '/images/case_health.jpeg'
  },
  {
    title: 'E-commerce Platform Security',
    industry: 'Retail',
    challenge: 'Multiple security breaches in payment system',
    solution: 'Implementation of secure payment gateway and regular security audits',
    result: 'Zero breaches since implementation',
    image: '/images/case_ecom.jpeg'
  }
];

export default function CaseStudiesSection() {
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
    <section id="case-studies" className="py-8 px-4 md:px-8 lg:px-16 bg-black" ref={ref}>
      {/* Background Pattern - matching EnquirySection */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />

      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
            Case Studies
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Real-world examples of how we&apos;ve helped businesses strengthen their security posture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-0">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden 
                       transition-all duration-300 hover:-translate-y-1 border border-zinc-800"
            >
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
              </div>
              <motion.div 
                className="p-8 relative"
                variants={itemVariants}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
                <div className="relative">
                  <motion.div 
                    className="text-primary-500 text-sm font-semibold mb-3 flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    {study.industry}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors"
                    variants={itemVariants}
                  >
                    {study.title}
                  </motion.h3>
                  <motion.div 
                    className="space-y-3 text-gray-300"
                    variants={itemVariants}
                  >
                    <p><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold">Solution:</span> {study.solution}</p>
                    <p><span className="font-semibold">Result:</span> {study.result}</p>
                  </motion.div>
                  {/* <motion.button 
                    className="mt-6 inline-flex items-center gap-2 text-primary-500 font-semibold 
                             hover:text-primary-400 transition-colors group-hover:gap-3"
                    variants={itemVariants}
                  >
                    Read Full Case Study
                    <svg 
                      className="w-5 h-5 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </motion.button> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 