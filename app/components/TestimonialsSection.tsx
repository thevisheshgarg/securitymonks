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
        role: "CEO",
        company: "Tech Solutions Inc.",
        content: "Working with this team has been transformative for our business. Their expertise in web development and attention to detail is unmatched."
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "Digital Innovations",
        content: "The level of professionalism and technical skill demonstrated by the team is exceptional. They delivered beyond our expectations."
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "StartUp Labs",
        content: "Their innovative approach to problem-solving and commitment to quality made our project a huge success. Highly recommended!"
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
                            className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                            <p className="text-gray-300 mb-6 italic">
                                {testimonial.content}
                            </p>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="text-white font-semibold">
                                    {testimonial.name}
                                </p>
                                <p className="text-primary-500">
                                    {testimonial.role} at {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 