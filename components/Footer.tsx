import React, { useEffect, useRef } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';

interface FooterProps {
    navigateTo: (page: Page) => void;
    currentPage: Page;
}

const Footer: React.FC<FooterProps> = ({ navigateTo, currentPage }) => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ctaRef.current) {
            observer.observe(ctaRef.current);
        }

        return () => {
            if (ctaRef.current) {
                observer.unobserve(ctaRef.current);
            }
        };
    }, [currentPage]);

    return (
        <footer className="bg-white text-dms-gray">
             {currentPage !== 'contact' && (
                <div className="bg-dms-green py-16 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div ref={ctaRef} className="container mx-auto px-6 text-center relative z-10 will-animate">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to launch your next digital project?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>Let us craft strategies that drive results and growth.</p>
                        <button onClick={() => navigateTo('contact')} className="bg-white text-dms-green font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105" style={{ animationDelay: '0.4s' }}>
                            Get In Touch
                        </button>
                    </div>
                </div>
             )}
            <div className="bg-dms-dark-gray text-gray-300 py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo & About */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-6 cursor-pointer group" onClick={() => navigateTo('home')}>
                             <Logo className="h-12 text-dms-green flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                             <div className="ml-4 border-l-2 border-white/10 pl-4">
                                <span className="text-white font-black text-[15px] leading-tight uppercase tracking-[0.1em] block antialiased">
                                    DEPENDABLE<br/>
                                    <span className="text-dms-green">MARKETING</span><br/>
                                    SOLUTIONS
                                </span>
                             </div>
                        </div>
                        <p className="text-sm text-gray-400">
                           Crafting data-driven strategies for service-based businesses to clarify marketing focus and deliver tangible results.
                        </p>
                    </div>

                    {/* Column 2: Menu */}
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider mb-4">Menu</h3>
                        <ul className="space-y-3">
                            <li><a onClick={() => navigateTo('home')} className="hover:text-dms-green cursor-pointer transition-colors">Home</a></li>
                            <li><a onClick={() => navigateTo('about')} className="hover:text-dms-green cursor-pointer transition-colors">About</a></li>
                            <li><a onClick={() => navigateTo('services')} className="hover:text-dms-green cursor-pointer transition-colors">Services</a></li>
                             <li><a onClick={() => navigateTo('contact')} className="hover:text-dms-green cursor-pointer transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider mb-4">Services</h3>
                         <ul className="space-y-3">
                            <li><a onClick={() => navigateTo('services')} className="hover:text-dms-green cursor-pointer transition-colors">SEO</a></li>
                            <li><a onClick={() => navigateTo('services')} className="hover:text-dms-green cursor-pointer transition-colors">Social Media</a></li>
                            <li><a onClick={() => navigateTo('services')} className="hover:text-dms-green cursor-pointer transition-colors">Content Marketing</a></li>
                            <li><a onClick={() => navigateTo('services')} className="hover:text-dms-green cursor-pointer transition-colors">PPC</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><TwitterIcon className="w-6 h-6" /></a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><LinkedInIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-gray-500 text-center py-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Dependable Marketing Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;