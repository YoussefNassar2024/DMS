import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';

interface HeaderProps {
    currentPage: Page;
    navigateTo: (page: Page) => void;
}

const MobileNavLink: React.FC<{ page: Page; currentPage: Page; navigateTo: (page: Page) => void; children: React.ReactNode; index: number }> = ({ page, currentPage, navigateTo, children, index }) => {
    const isActive = currentPage === page;
    
    return (
        <a 
            onClick={() => navigateTo(page)} 
            className="group flex items-baseline gap-6 py-4 border-b border-white/5 w-full transform transition-all duration-500 hover:pl-4"
            style={{ animation: `fadeInUp 0.6s ease forwards ${0.2 + index * 0.1}s`, opacity: 0 }}
        >
            <span className="text-dms-green font-black text-sm tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
            <span className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-dms-green' : 'text-white group-hover:text-dms-green'}`}>
                {children}
            </span>
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks: { page: Page; label: string }[] = [
        { page: 'home', label: 'Home' },
        { page: 'about', label: 'Agency' },
        { page: 'services', label: 'Services' },
        { page: 'contact', label: 'Start Project' },
    ];

    const handleNavigation = (page: Page) => {
        navigateTo(page);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header 
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                    scrolled ? 'py-3' : 'py-6'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className={`glass px-4 sm:px-6 py-3 rounded-full flex justify-between items-center shadow-2xl transition-all duration-500 ${scrolled ? 'mx-0' : 'mx-0 sm:mx-12'}`}>
                        {/* Logo & Company Name */}
                        <div className="cursor-pointer flex items-center gap-4 group" onClick={() => handleNavigation('home')}>
                            <Logo className="h-9 sm:h-11 text-dms-green flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
                            <div className="flex flex-col justify-center border-l-2 border-gray-100 pl-4 h-8 sm:h-10">
                                <span className="font-black text-dms-gray leading-tight text-[11px] sm:text-[13px] uppercase tracking-[0.15em] antialiased">
                                    Dependable<br/>
                                    <span className="text-dms-green">Marketing</span><br/>
                                    Solutions
                                </span>
                            </div>
                        </div>
                        
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.page}
                                    onClick={() => handleNavigation(link.page)}
                                    className={`cursor-pointer transition-all duration-500 uppercase font-bold tracking-[0.2em] text-[10px] relative group ${
                                        currentPage === link.page ? 'text-dms-green' : 'text-dms-gray hover:text-dms-green'
                                    }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-dms-green transition-all duration-300 ease-out group-hover:w-full ${currentPage === link.page ? 'w-full' : ''}`}></span>
                                </a>
                            ))}
                        </nav>

                        {/* Toggle Button & Desktop CTA */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button 
                                onClick={() => handleNavigation('contact')}
                                className="hidden lg:block bg-dms-gray text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-dms-green transition-all duration-300"
                            >
                                Free Consultation
                            </button>
                            
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className={`p-2 focus:outline-none z-[110] transition-colors duration-500 ${isMenuOpen ? 'text-white' : 'text-dms-gray'} md:hidden`}
                                aria-label="Toggle Menu"
                            >
                                <div className="w-5 sm:w-6 h-4 sm:h-5 relative flex flex-col justify-between">
                                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Enhanced Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] glass-dark flex flex-col transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-dms-green/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-dms-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-10 h-full flex flex-col pt-32 pb-12 relative z-10">
                    <div className="mb-12 opacity-0 transform -translate-y-4" style={{ animation: isMenuOpen ? 'fadeInDown 0.6s ease forwards 0.1s' : 'none' }}>
                        <span className="text-dms-green text-[10px] font-black uppercase tracking-[0.5em] block mb-2">Navigation Menu</span>
                        <div className="w-12 h-1 bg-dms-green"></div>
                    </div>

                    <nav className="flex-grow flex flex-col justify-center">
                        {navLinks.map((link, i) => (
                            <MobileNavLink 
                                key={link.page} 
                                page={link.page} 
                                currentPage={currentPage} 
                                navigateTo={handleNavigation} 
                                index={i}
                            >
                                {link.label}
                            </MobileNavLink>
                        ))}
                    </nav>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
                        <div className="opacity-0 transform translate-y-4" style={{ animation: isMenuOpen ? 'fadeInUp 0.6s ease forwards 0.6s' : 'none' }}>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Get In Touch</p>
                            <a href="mailto:info@trustthedata.net" className="block text-white text-lg font-light mb-2 hover:text-dms-green transition-colors">info@trustthedata.net</a>
                            <a href="tel:7272184871" className="block text-white text-lg font-light hover:text-dms-green transition-colors">(727) 218-4871</a>
                        </div>

                        <div className="flex flex-col items-start sm:items-end gap-6 opacity-0 transform translate-y-4" style={{ animation: isMenuOpen ? 'fadeInUp 0.6s ease forwards 0.7s' : 'none' }}>
                            <div className="flex gap-6">
                                <a href="#" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><FacebookIcon className="w-5 h-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><InstagramIcon className="w-5 h-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><TwitterIcon className="w-5 h-5" /></a>
                                <a href="#" className="text-gray-400 hover:text-dms-green transition-all transform hover:-translate-y-1"><LinkedInIcon className="w-5 h-5" /></a>
                            </div>
                            <p className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-bold text-left sm:text-right">
                                Trust the Data.<br/>Reach the Goal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />
        </>
    );
};

export default Header;