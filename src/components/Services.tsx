import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import * as LucideIcons from 'lucide-react';

export const Services = () => {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="section-padding bg-dark-bg text-center" ref={elementRef} id="services">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="text-gray-400 text-sm md:text-base mb-2 block">- services</span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-neon-green">Services</span> <span className="text-neon-cyan">| Provide</span>
                    </h2>
                </motion.div>

                {/* Quote/Description */}
                <motion.p
                    className="max-w-2xl mx-auto text-gray-400 text-xs md:text-sm mb-12"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    I'm Mohammed Fairoos, a UI/UX designer with a passion for intuitive solutions and seamless interactions. My core strengths lie in mobile app design, web interfaces, prototyping,
                </motion.p>

                {/* Main Services Container */}
                <div className="relative max-w-5xl mx-auto border-2 border-dashed border-white/10 rounded-3xl p-8 md:p-12 bg-white/[0.02]">
                    <div className="grid md:grid-cols-2 gap-y-16 gap-x-12 relative">

                        {/* Vertical Divider (Desktop) */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/5 -translate-x-1/2 border-r border-dashed border-white/10" />

                        {/* Horizontal Divider (Desktop) */}
                        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-white/5 -translate-y-1/2 border-b border-dashed border-white/10" />

                        {servicesData.map((service, index) => (
                            <ServiceBlock
                                key={service.id}
                                service={service}
                                index={index}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceBlock = ({ service, index, isVisible }: { service: any, index: number, isVisible: boolean }) => {
    return (
        <motion.div
            className="text-left relative pl-4 md:pl-8 group"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
        >
            {/* Background Number */}
            <div className="absolute -top-10 -left-4 text-[100px] font-bold text-white/[0.03] select-none leading-none z-0 group-hover:text-white/[0.05] transition-colors">
                {service.id}
            </div>

            {/* Content */}
            <div className="relative z-10 pt-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-10 whitespace-pre-line leading-tight">
                    {service.title}
                </h3>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    {service.features.map((feature: any, idx: number) => {
                        const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Zap;

                        return (
                            <div key={idx} className="flex flex-col gap-3 group/item">
                                <IconComponent
                                    className="w-6 h-6 text-neon-cyan/70 group-hover/item:text-neon-green transition-colors"
                                    strokeWidth={1.5}
                                />
                                <span className="text-gray-400 text-sm group-hover/item:text-gray-200 transition-colors">
                                    {feature.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};
