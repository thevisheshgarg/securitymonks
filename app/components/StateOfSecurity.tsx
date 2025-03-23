'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// Define stat type
interface Stat {
  value: string;
  text: string;
  startValue: number;
}

// Custom hook for animated counter
const useCounter = (end: string, start: number = 0, duration: number = 2000, shouldAnimate: boolean = false) => {
  const [count, setCount] = useState<number | string>(start);
  
  useEffect(() => {
    if (!shouldAnimate) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      let nextCount: number | string;
      if (!isNaN(Number(end))) {
        nextCount = Math.floor(start + (Number(end) - start) * easeOutQuart);
      } else if (end.endsWith('s')) {
        // For seconds format (39s)
        const endNum = parseInt(end);
        nextCount = Math.floor(start + (endNum - start) * easeOutQuart);
      } else if (end.includes('M')) {
        // For million format ($4.45M)
        const endNum = parseFloat(end.replace('$', '').replace('M', ''));
        const currentNum = start + (endNum - start) * easeOutQuart;
        nextCount = currentNum.toFixed(2);
      } else if (end.includes('%')) {
        // For percentage format (82%)
        const endNum = parseInt(end);
        nextCount = Math.floor(start + (endNum - start) * easeOutQuart);
      } else {
        nextCount = start;
      }
      
      setCount(nextCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, start, duration, shouldAnimate]);
  
  return count;
};

// Format the count to match the target format
const formatCount = (count: number | string, format: string): string => {
  if (format.includes('$')) {
    return `$${count}M`;
  } else if (format.includes('s')) {
    return `${count}s`;
  } else if (format.includes('%')) {
    return `${count}%`;
  }
  return count.toString();
};

// Individual stat component
const AnimatedStat: React.FC<{
  stat: Stat;
  isInView: boolean;
  itemVariants: Variants;
}> = ({ stat, isInView, itemVariants }) => {
  const count = useCounter(stat.value, stat.startValue, 2000, isInView);
  
  return (
    <motion.div 
      variants={itemVariants}
      className="p-6 ps-0"
    >
      <div className="h-1 w-12 bg-primary-500 mb-6"></div>
      <motion.div 
        className="text-4xl md:text-5xl font-bold mb-4 text-white"
        variants={itemVariants}
      >
        {formatCount(count, stat.value)}
      </motion.div>
      <motion.p 
        className="text-gray-200 text-lg"
        variants={itemVariants}
      >
        {stat.text}
      </motion.p>
    </motion.div>
  );
};

export default function StateOfSecurity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats: Stat[] = [
    {
      value: "$4.45M",
      text: "Average cost of a data breach in 2023",
      startValue: 0
    },
    {
      value: "39s",
      text: "A cyberattack occurs somewhere in the world",
      startValue: 0
    },
    {
      value: "82%",
      text: "Data breaches involve human error, weak passwords, or social engineering",
      startValue: 0
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 bg-black" ref={ref}>
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
          State of Security
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              stat={stat}
              isInView={isInView}
              itemVariants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}