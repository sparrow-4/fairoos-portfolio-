import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Play } from 'lucide-react';

export const Projects = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

    // Split projects into two columns for Masonry layout
    const leftColumnProjects = projectsData.filter((_, index) => index % 2 === 0);
    const rightColumnProjects = projectsData.filter((_, index) => index % 2 !== 0);

    return (
        <section className="section-padding bg-dark-bg" ref={elementRef} id="projects">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        <span className="text-gray-400 text-sm mb-2 block">-My projects</span>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="text-neon-cyan">My Latest</span> <span className="text-neon-green">Projects</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#1faa50] text-dark-bg px-6 py-2 rounded-full font-bold transition-all group"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        View My Projects
                        <div className="w-6 h-6 rounded-full bg-dark-bg/20 flex items-center justify-center group-hover:bg-dark-bg/30 transition-colors">
                            <Play size={12} fill="currentColor" />
                        </div>
                    </motion.button>
                </div>

                {/* Masonry Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8">
                        {leftColumnProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isVisible={isVisible}
                                columnIndex={0}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 md:pt-16">
                        {rightColumnProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isVisible={isVisible}
                                columnIndex={1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: any;
    index: number;
    isVisible: boolean;
    columnIndex: number;
}

const ProjectCard = ({ project, index, isVisible, columnIndex }: ProjectCardProps) => {
    // Determine aspect ratio based on position to match bento layout
    // Left Col: Tall, Wide, Wide(Square-ish)
    // Right Col: Wide, Tall, Wide 

    // Manual overrides for aspect ratios to match the provided image
    let aspectRatio = "aspect-[4/3]";
    if (columnIndex === 0 && index === 0) aspectRatio = "aspect-[3/4]"; // Top Left Tall
    if (columnIndex === 1 && index === 1) aspectRatio = "aspect-[9/16]"; // Middle Right Tall

    // For specific branding card (Laqtat Arabiya)
    const isBranding = project.category === "Branding";

    return (
        <motion.div
            className={`group relative rounded-3xl overflow-hidden bg-[#1a1f3a] cursor-pointer ${aspectRatio}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + (columnIndex * 0.2) + (index * 0.1) }}
        >
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        // Fallback placeholders matching the visual vibe
                        const color = isBranding ? '3f2e22' : '1a1f3a';
                        e.currentTarget.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${project.title}&backgroundColor=${color}`;
                    }}
                />
            </div>

            {/* Content Overlay - Only shows on hover or always for Branding? 
                 Design shows clean look, maybe hover for details */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-neon-green text-sm font-medium mb-1">{project.category}</p>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>

            {/* Branding Specific styling mockup for the 5th item if needed */}
            {isBranding && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#3f2e22]">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37]">
                            <span className="text-2xl font-serif">M</span>
                        </div>
                        <h3 className="text-[#d4af37] font-serif tracking-widest text-sm">LAQTAT ARABIYA</h3>
                    </div>
                    {/* Mockup sub-boxes */}
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#5c4033] border-t border-r border-[#d4af37]/20 p-4">
                        <p className="text-[#d4af37] text-[10px] mb-2">LOGO CONCEPT</p>
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#d4af37]" />
                            <div className="w-4 h-4 rounded-full border border-[#d4af37]" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[#d4af37] p-4 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border border-[#3f2e22] flex items-center justify-center text-[#3f2e22]">
                            <span className="font-serif">L</span>
                        </div>
                    </div>
                </div>
            )}

        </motion.div>
    );
};
