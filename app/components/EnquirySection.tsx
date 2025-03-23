'use client';

import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EnquirySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
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
        <section id="contact"  className="relative bg-black py-8 px-4 md:px-8 lg:px-16" ref={ref}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" aria-hidden="true" />

            <motion.div 
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Column - Image and Text */}
                    <motion.div 
                        className="relative"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                            Let&apos;s Secure Your Business Together
                        </h2>
                        <p className="text-gray-200 text-lg mb-8">
                            Get in touch with our cybersecurity experts to protect your business from evolving digital threats.
                        </p>
                        <motion.div 
                            className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden"
                            variants={itemVariants}
                        >
                            <Image
                                src="/enquiry3.png"
                                alt="Cybersecurity Consultation"
                                // fill
                                className="object-cover mx-auto"
                                width={300}
                                height={400}
                                // sizes="(max-width: 500px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div 
                        className="relative"
                        variants={itemVariants}
                    >
                        {/* Form Container */}
                        <div className="relative">
                            <EnquiryForm />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
} 