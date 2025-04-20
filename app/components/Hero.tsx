'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    // const logoVariants = {
    //     hidden: { opacity: 0, scale: 0.8 },
    //     visible: {
    //         opacity: 1,
    //         scale: 1,
    //         transition: { duration: 0.5 }
    //     }
    // };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3 }
        }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.6 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.7 }
        }
    };

    // const itemVariants = {
    //     hidden: { opacity: 0, x: -20 },
    //     visible: (index: number) => ({
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 0.5, delay: 0.8 + index * 0.1 }
    //     })
    // };

    return (
        <section
            className="py-8 px-4 md:px-8 lg:px-16 bg-black"
            aria-label="Hero section"
            itemScope
            itemType="https://schema.org/Service"
        >
            <ParticlesBackground />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto h-full flex items-center justify-center py-12 md:py-20 relative">
                {/* Content Section - Text-center on mobile, left-aligned on lg screens */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={containerVariants}
                        className="w-full lg:w-3/4 flex flex-col items-center lg:items-start space-y-8 pt-4 md:pt-0 text-center lg:text-left"
                    >
                        {/* Logo with enhanced glow
                        <motion.div
                            variants={logoVariants}
                            className="w-32 md:w-36 lg:w-44 relative"
                        >
                            <div className="absolute -inset-2 bg-primary-500/20 blur-xl rounded-full animate-pulse" aria-hidden="true" />
                            <Image
                                src="/testLogo3.png"
                                alt="Security Monks Logo"
                                width={144}
                                height={36}
                                className="w-full h-auto relative"
                                priority
                                itemProp="image"
                            />
                        </motion.div> */}

                        {/* Main Content */}
                        <motion.div
                            variants={contentVariants}
                            className="space-y-6 mt-8 md:mt-16"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight font-orbitron" itemProp="name">
                                <span className="sr-only">Security Monks - </span>
                                <span className="inline-block">
                                    Secure like a
                                    <br />
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-primary-500 text-6xl md:text-8xl"> Monk</span>
                                    </span>
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white max-w-2xl" itemProp="description">
                            In a world where threats never sleep, we bring clarity, discipline, and foresight to your defenses. At Security Monks, we don&apos;t wait for breaches — we prevent them. Our forward defense strategy blends continuous offensive testing with real-world attacker mindset, helping you protect what matters before it&apos;s too late.                            
                            </p>
                        </motion.div>

                        {/* Features List */}
                        <motion.div
                            variants={listVariants}
                            className="w-full flex justify-center lg:justify-start"
                        >
                            <a 
                                href="#contact"
                                className="inline-flex items-center py-4 text-lg font-semibold 
                                border lg:border-0 border-primary-400/30 px-8 lg:px-0
                                text-primary-500 rounded-lg hover:text-primary-600 
                                bg-black/20 lg:bg-transparent
                                hover:bg-black/60 lg:hover:bg-transparent
                                transition-all duration-300 justify-start"

                            >
                                Get Started
                                <svg 
                                    className="ml-2 -mr-1 w-5 h-5" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side SVG - Only visible on lg screens and up */}
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={imageVariants}
                        className="hidden lg:flex w-1/3 justify-end items-center"
                    >
                        <div className="relative left-10">
                            {/* Simple glow effect behind the SVG */}
                            <Image
                                src="/temp7.png"
                                alt="hero image"
                                width={576}
                                height={1024}
                                className="w-full h-auto rounded-full"
                                priority
                                itemProp="image"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



