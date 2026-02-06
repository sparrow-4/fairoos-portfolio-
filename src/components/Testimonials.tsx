import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonials';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="section-padding" ref={elementRef}>
            <div className="container-custom">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gradient">What Clients Say</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="glass-card p-8 md:p-12"
                            >
                                <Quote className="w-12 h-12 text-neon-green/30 mb-6" />

                                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                    "{testimonialsData[currentIndex].content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonialsData[currentIndex].avatar}
                                        alt={testimonialsData[currentIndex].name}
                                        className="w-16 h-16 rounded-full border-2 border-neon-green/50"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonialsData[currentIndex].name}`;
                                        }}
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            {testimonialsData[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {testimonialsData[currentIndex].role} at{' '}
                                            {testimonialsData[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full glass-card-hover flex items-center justify-center group"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 text-neon-green" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full glass-card-hover flex items-center justify-center group"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 text-neon-green" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-neon-green'
                                            : 'w-2 bg-gray-600'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
