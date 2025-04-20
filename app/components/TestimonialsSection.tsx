'use client';

import { motion } from 'framer-motion';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    content: string;
}

const testimonials: TestimonialProps[] = [
    {
        name: "John Smith",
        role: "CTO",
        company: "Fintech Company",
        content: "Security Monks doesn't just find vulnerabilities — they understand how those risks translate to our business. Their team worked like an extension of ours, constantly collaborating and adapting to our fast-paced dev cycles. In fintech, trust is everything — and with Security Monks, we're ahead of threats, not reacting to them."
    },
    {
        name: "Michael Chen",
        role: "Director of Technology",
        company: "Health Tech",
        content: "Working with Security Monks has been a game-changer for us. In the health sector, where protecting patient data is critical, compliance with HIPAA is paramount. Security Monks not only helped us identify vulnerabilities but also ensured that our systems were aligned with HIPAA standards. Their approach was thorough and tailored to the unique needs of healthcare technology, giving us the confidence that our data is secure and our compliance is intact."
    },
    {
        name: "Sarah Johnson",
        role: "VP of Engineering",
        company: "Ecommerce D2C",
        content: "Working with Security Monks honestly felt like adding a few senior folks to our own team. They didn't just run scans and send a report — they understood how our product works, how our engineers build, and gave us feedback that actually made sense in our world. Super easy to work with, super sharp, and genuinely helpful."
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-8 px-4 md:px-8 lg:px-16 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-white text-lg">
                        Don&apos;t just take our word for it - hear from our satisfied clients
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <svg
                                    className="h-8 w-8 text-primary-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-gray-300 mb-6 italic flex-grow">
                                {testimonial.content}
                            </p>
                            <div className="border-t border-gray-700 pt-4 mt-auto">
                                <p className="text-white font-semibold">
                                    {/* {testimonial.name} */}
                                </p>
                                <p className="text-primary-500">
                                    {testimonial.role} 
                                    <span className="text-white"> @ </span>
                                    {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
