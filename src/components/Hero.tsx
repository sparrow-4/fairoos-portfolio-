import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column - Content */}
                <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-neon-green" />
                        <span className="text-gray-300 font-medium">Hello There</span>
                        <span className="w-2 h-2 rounded-full bg-neon-green" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        I'M <span className="text-neon-green underline decoration-2 underline-offset-8">Mohammed Fairoos</span>,<br />
                        <span className="text-neon-cyan">Ui / Ux Designer</span><br />
                        Based In India
                    </motion.h1>

                    {/* Description - Optional based on design, keeping it minimal */}
                    {/* <p className="text-gray-400 max-w-lg mb-8 text-lg">
                        {profileData.description}
                    </p> */}

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6 mt-8"
                    >
                        <a
                            href="#projects"
                            className="bg-neon-green text-dark-bg px-8 py-3 rounded-full font-bold hover:bg-neon-green/90 transition-all shadow-[0_0_20px_rgba(35,255,136,0.5)]"
                        >
                            View My Portfolio
                        </a>

                        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm group">
                            <Play className="w-5 h-5 fill-white text-white translate-x-0.5 group-hover:scale-110 transition-transform" />
                        </button>

                        <a
                            href="#contact"
                            className="text-white border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                </div>

                {/* Right Column - Image */}
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                    {/* Abstract Blob Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-neon-cyan/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl animate-float opacity-50" />

                    {/* Main Shape */}
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Green Geometric Shape Behind */}
                        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-neon-green/80 drop-shadow-[0_0_50px_rgba(35,255,136,0.2)]" fill="currentColor">
                            <path d="M45,-75C58.3,-69.3,69.2,-58.5,77.6,-46.1C85.9,-33.7,91.7,-19.7,90.4,-6.1C89.1,7.5,80.7,20.7,71.5,32.2C62.3,43.7,52.3,53.5,41.1,62.1C29.9,70.7,17.5,78,3.5,72C-10.5,66,-26.1,46.7,-38.6,31.7C-51.1,16.7,-60.5,6,-63.9,-6.7C-67.3,-19.4,-64.7,-34.1,-55.9,-45.3C-47.1,-56.5,-32.1,-64.2,-17.7,-67.2C-3.4,-70.2,10.3,-68.5,23.3,-64.9L45,-75Z" transform="translate(100 100) scale(1.1)" />
                        </svg>

                        {/* Image masked or layered */}
                        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                            <img
                                src={profileData.profileImage}
                                alt={profileData.name}
                                className="w-full h-full object-contain grayscale contrast-125 z-10"
                                onError={(e) => {
                                    e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${profileData.name}`;
                                }}
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 bottom-20 z-20 bg-neon-green text-dark-bg px-5 py-3 rounded-xl font-bold shadow-lg rotate-[-5deg]"
                        >
                            Graphic Designer
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-4 top-40 z-20 bg-neon-cyan text-dark-bg px-5 py-3 rounded-xl font-bold shadow-lg rotate-[5deg]"
                        >
                            UI/UX Desinger
                        </motion.div>

                        {/* Small Deco Elements */}
                        <div className="absolute top-20 right-10 w-4 h-4 bg-white rounded-full animate-ping" />
                        <div className="absolute bottom-10 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-neon-green border-r-[10px] border-r-transparent rotate-45" />

                    </div>
                </div>
            </div>
        </section>
    );
};
