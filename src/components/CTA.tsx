import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="section-padding bg-gradient-to-br from-dark-secondary to-dark-bg relative overflow-hidden" ref={elementRef} id="contact">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-gradient">Let's Talk for Your Next Project</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Have an idea? Let's bring it to life together. I'm always excited to
                        work on new and challenging projects.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.a
                            href="mailto:hello@alexrivera.com"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-green to-neon-cyan text-dark-bg font-semibold rounded-full overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get In Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            <div className="absolute inset-0 shadow-[0_0_40px_rgba(0,255,136,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>

                        <motion.a
                            href="#"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass-card-hover font-semibold rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
