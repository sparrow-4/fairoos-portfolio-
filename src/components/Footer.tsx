import { profileData } from '../data/profile';
import * as LucideIcons from 'lucide-react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="section-padding bg-dark-bg border-t border-white/10">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-4">
                            {profileData.name}
                        </h3>
                        <p className="text-gray-400 mb-4">{profileData.role}</p>
                        <p className="text-sm text-gray-500">
                            Creating exceptional digital experiences through innovative design
                            and development.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-neon-green">
                            Contact Info
                        </h4>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${profileData.contact.email}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors duration-300"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="text-sm">{profileData.contact.email}</span>
                            </a>
                            <a
                                href={`tel:${profileData.contact.phone}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-sm">{profileData.contact.phone}</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">{profileData.contact.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-neon-cyan">
                            Follow Me
                        </h4>
                        <div className="flex gap-4">
                            {profileData.social.map((social) => {
                                const IconComponent = (LucideIcons as any)[social.icon] || LucideIcons.Link;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full glass-card-hover flex items-center justify-center group"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-neon-green transition-colors duration-300" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {profileData.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
