import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import * as LucideIcons from 'lucide-react';

export const Skills = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="section-padding bg-dark-bg" ref={elementRef} id="tools">
            <div className="container-custom">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="text-gray-400 text-lg block mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    >
                        -My Favorite Tools
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-neon-green">Exploring The Tools</span><br />
                        <span className="text-neon-cyan">Behind My Designs</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skillsData[0].skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface SkillCardProps {
    skill: { name: string; icon: string; color?: string };
    index: number;
    isVisible: boolean;
}

const SkillCard = ({ skill, index, isVisible }: SkillCardProps) => {
    // Dynamic Icon
    const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Codesandbox;

    return (
        <motion.div
            className="group relative aspect-square rounded-3xl bg-[#0a1525] hover:bg-[#0d1b30] border border-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "backOut"
            }}
            whileHover={{ y: -5 }}
        >
            {/* Background Glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${skill.color || '#23ff88'} 0%, transparent 70%)` }}
            />

            {/* Icon Box */}
            <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: skill.color || '#23ff88' }}
            >
                <IconComponent size={32} />
            </div>

            {/* Label */}
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
            </span>
        </motion.div>
    );
};
