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

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.8 + index * 0.1 }
        })
    };

    return (
        <section
            className="relative w-full min-h-[80vh] bg-black py-8 md:py-0 overflow-hidden"
            aria-label="Hero section"
            itemScope
            itemType="https://schema.org/Service"
        >
            <ParticlesBackground />

            {/* Main Container */}
            <div className="container mx-auto px-4 md:px-4 h-full flex items-center justify-center py-12 md:py-20 relative">
                {/* Content Section - Text-center on mobile, left-aligned on lg screens */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={containerVariants}
                        className="w-full lg:w-3/4 flex flex-col items-center lg:items-start space-y-8 pt-4 md:pt-0 text-center lg:text-left"
                    >
                        {/* Logo with enhanced glow */}
                        <motion.div
                            variants={logoVariants}
                            className="w-32 md:w-36 lg:w-44 relative"
                        >
                            <div className="absolute -inset-2 bg-primary-500/20 blur-xl rounded-full animate-pulse" aria-hidden="true" />
                            <Image
                                src="/SecurityMonks.png"
                                alt="Security Monks Logo"
                                width={144}
                                height={36}
                                className="w-full h-auto relative"
                                priority
                                itemProp="image"
                            />
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            variants={contentVariants}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight" itemProp="name">
                                <span className="sr-only">Security Monks - </span>
                                <span className="inline-block">
                                    Secure like a
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-primary-500"> Monk</span>
                                    </span>
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white max-w-2xl" itemProp="description">
                                Elite cybersecurity solutions engineered to defend against advanced threats.
                                Protecting your assets with military-grade security protocols.
                            </p>
                        </motion.div>

                        {/* Features List */}
                        <motion.ul
                            variants={listVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
                            aria-label="Key features"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ItemList"
                        >
                            {[
                                'Advanced Threat Detection',
                                'Zero-Day Attack Prevention',
                                'AI-Powered Security',
                                'Quantum-Ready Encryption'
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    custom={index}
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 group justify-center lg:justify-start 
                                             bg-secondary-800/50 backdrop-blur-sm p-3 rounded-lg
                                             border border-secondary-700/50 hover:border-primary-500/50
                                             transition-all duration-300"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                    itemProp="itemListElement"
                                >
                                    <span
                                        className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="text-base sm:text-lg text-white font-medium group-hover:text-primary-400 transition-colors duration-300"
                                        itemProp="name"
                                    >
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
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