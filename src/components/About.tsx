import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';
import { ArrowRight, Download } from 'lucide-react';

export const About = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

    const marqueeText = "WEB Design >> app design >> prototyping >> wire framing >> frontend development >> ";

    return (
        <section className="relative py-20 bg-dark-bg overflow-hidden" ref={elementRef}>

            {/* Scrolling Marquee */}
            <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
                <motion.div
                    className="inline-block text-2xl md:text-3xl font-mono text-neon-cyan tracking-widest uppercase font-bold"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                    {marqueeText.repeat(10)}
                </motion.div>
            </div>

            <div className="container-custom relative z-10 pt-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image Composition */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Blue Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-cyan rounded-full blur-sm" />

                        {/* Image */}
                        <div className="relative z-10 w-[300px] md:w-[380px]">
                            <img
                                src={profileData.about.image}
                                alt="About"
                                className="w-full h-auto object-cover grayscale contrast-125 z-10 mask-image-gradient"
                                onError={(e) => {
                                    e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=about&backgroundColor=transparent`;
                                }}
                            />

                            {/* Floating Pills - Stacked */}
                            <div className="absolute bottom-10 -left-4 md:-left-8 flex flex-col gap-3 items-start z-20">
                                <span className="bg-[#4ADE80] text-dark-bg px-4 py-1.5 rounded-full text-xs font-bold shadow-lg -rotate-6 transform translate-x-8">UI/UX Designer</span>
                                <div className="flex gap-2">
                                    <span className="bg-[#222] text-white border border-gray-700 px-4 py-1.5 rounded-full text-xs shadow-lg -rotate-3">Wireframing</span>
                                    <span className="bg-[#4ADE80] text-dark-bg px-4 py-1.5 rounded-full text-xs font-bold shadow-lg rotate-2">Prototype</span>
                                </div>
                                <div className="flex gap-2 -ml-4">
                                    <span className="bg-[#4ADE80] text-dark-bg px-4 py-1 rounded-full text-[10px] font-bold shadow-lg rotate-[-10deg]">video shooting</span>
                                    <span className="bg-[#222] text-white border border-gray-700 px-4 py-1 rounded-full text-[10px] shadow-lg rotate-[-2deg]">Graphic Designer</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="bg-[#23ff88] text-dark-bg px-5 py-2 rounded-full text-sm font-bold shadow-lg -rotate-2">Branding</span>
                                    <span className="bg-[#222] text-white border border-gray-700 px-5 py-2 rounded-full text-xs shadow-lg rotate-3">Mobile App Designer</span>
                                </div>
                            </div>

                            {/* Play Arrow Decoration */}
                            <div className="absolute -bottom-4 right-0 text-neon-green animate-bounce">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-neon-green text-lg font-medium mb-2">-About Me</h4>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neon-cyan leading-tight">
                            {profileData.about.title}
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base">
                            {profileData.about.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {profileData.stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    isVisible={isVisible}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>

                        {/* Formatting for Call To Action */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <button className="group flex items-center justify-between gap-4 bg-neon-green hover:bg-neon-green/90 text-dark-bg px-2 pl-6 py-2 rounded-full font-bold transition-all w-full sm:w-auto min-w-[180px]">
                                <span>Download Cv</span>
                                <div className="bg-dark-bg/20 p-2 rounded-full group-hover:bg-dark-bg/30 transition-colors">
                                    <ArrowRight size={18} />
                                </div>
                            </button>

                            <span className="font-['Kaushan_Script'] text-neon-cyan text-2xl rotate-[-5deg]">
                                {profileData.name}
                            </span>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface StatCardProps {
    stat: { label: string; value: number; suffix: string };
    isVisible: boolean;
    delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
    const count = useCountUp({
        end: stat.value,
        duration: 2000,
        isVisible,
    });

    return (
        <div className="bg-dark-secondary/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {count}{stat.suffix}
            </div>
            <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
        </div>
    );
};
