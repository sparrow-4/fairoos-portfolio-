import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import * as LucideIcons from 'lucide-react';

export const Experience = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="section-padding" ref={elementRef}>
            <div className="container-custom">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-gradient">Education & Experience</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-neon-green">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {experienceData.education.map((edu, index) => (
                                <ExperienceCard
                                    key={edu.id}
                                    item={edu}
                                    index={index}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">
                            Work Experience
                        </h3>
                        <div className="space-y-4">
                            {experienceData.work.map((work, index) => (
                                <ExperienceCard
                                    key={work.id}
                                    item={work}
                                    index={index}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface ExperienceCardProps {
    item: any;
    index: number;
    isVisible: boolean;
}

const ExperienceCard = ({ item, index, isVisible }: ExperienceCardProps) => {
    const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Circle;

    return (
        <motion.div
            className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-shadow duration-300">
                        <IconComponent className="w-6 h-6 text-dark-bg" />
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-1">
                        {item.degree || item.position}
                    </h4>
                    <p className="text-gray-400 mb-1">
                        {item.institution || item.company}
                    </p>
                    {item.field && (
                        <p className="text-sm text-gray-500 mb-1">{item.field}</p>
                    )}
                    <p className="text-sm text-neon-green">{item.period}</p>
                </div>
            </div>
        </motion.div>
    );
};
