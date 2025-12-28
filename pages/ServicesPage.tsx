import React, { useEffect, useRef } from 'react';
import { services } from '../constants';
import { SecondaryLogo } from '../components/Logo';
import { Page } from '../types';

interface ServicesPageProps {
    navigateTo: (page: Page) => void;
}

const ServiceDetailCard: React.FC<{ service: typeof services[0], index: number, navigateTo: (page: Page) => void }> = ({ service, index, navigateTo }) => {
    const isReversed = index % 2 !== 0;
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={cardRef} 
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 lg:gap-32 will-animate mb-32 last:mb-0`}
        >
            <div className={`w-full md:w-1/2 ${isReversed ? 'md:order-2' : ''}`}>
                <div className="mb-8">
                    <span className="text-dms-green font-black text-6xl md:text-8xl opacity-10 block mb-2 leading-none select-none">
                        0{index + 1}
                    </span>
                    <div className="flex items-center mb-6">
                        <div className="p-5 bg-dms-light-gray rounded-3xl mr-6 text-dms-blue shadow-inner transition-transform duration-700">
                            <service.icon className="w-10 h-10 lg:w-12 lg:h-12" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-dms-gray tracking-tighter uppercase leading-tight">
                            {service.title}
                        </h2>
                    </div>
                </div>
                <p className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                    {service.description}
                </p>
                <button 
                    onClick={() => navigateTo('contact')} 
                    className="inline-flex items-center gap-6 bg-dms-gray text-white py-5 px-10 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-dms-green transition-all duration-500 group shadow-xl hover:shadow-dms-green/20"
                >
                    Learn More
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </button>
            </div>

            <div className={`w-full md:w-1/2 flex justify-center items-center ${isReversed ? 'md:order-1' : ''}`}>
                 <div className="relative group w-full max-w-md aspect-square">
                    <div className="absolute inset-0 bg-dms-green/5 rounded-[4rem] rotate-12 transition-transform duration-1000 group-hover:rotate-[20deg] scale-110"></div>
                    <div className="absolute inset-0 bg-dms-blue/5 rounded-[4rem] -rotate-6 transition-transform duration-1000 group-hover:-rotate-12 scale-105"></div>
                    
                    <div className="relative w-full h-full bg-white rounded-[4rem] shadow-2xl flex items-center justify-center p-16 border border-gray-50 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] transition-transform duration-[10000ms] group-hover:rotate-45">
                             <SecondaryLogo className="w-full h-full text-dms-gray scale-150" />
                        </div>
                        <div className="relative z-10 p-8 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                            <service.icon className="w-24 h-24 lg:w-32 lg:h-32 text-dms-gray" />
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-dms-blue text-white p-6 lg:p-10 rounded-full shadow-2xl z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] leading-none whitespace-nowrap block">Best Results</span>
                    </div>
                 </div>
            </div>
        </div>
    );
};

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
    return (
        <div className="overflow-x-hidden pt-0 selection:bg-dms-blue selection:text-white">
            {/* Immersive Hero */}
            <section className="bg-dms-dark-gray text-white pt-56 pb-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                     <div className="absolute top-0 left-1/4 w-96 h-96 bg-dms-green rounded-full blur-[160px] animate-float"></div>
                     <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dms-blue rounded-full blur-[160px] animate-float" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-10 inline-block overflow-hidden">
                        <span className="text-dms-green font-bold text-xs uppercase tracking-[0.8em] mb-6 block animate-reveal">
                            Strategic Excellence
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                        The <span className="text-gradient">Impact</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        We proudly provide all the digital marketing services you need to ensure you get the best results for your business. The Internet is highly competitive; our strategies are essential to elevate your business above all others.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Services List Section */}
            <section className="py-32 lg:py-48 bg-white">
                <div className="container mx-auto px-6">
                    {services && services.length > 0 ? (
                        <div className="space-y-48">
                            {services.map((service, index) => (
                                <ServiceDetailCard 
                                    key={index} 
                                    service={service} 
                                    index={index} 
                                    navigateTo={navigateTo} 
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-bold text-gray-400">Loading Capabilities...</h2>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom Strategic CTA */}
            <section className="py-32 bg-dms-light-gray relative overflow-hidden border-t border-gray-100">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <SecondaryLogo className="w-16 h-16 text-dms-green opacity-20 mx-auto mb-10" />
                        <h3 className="text-3xl md:text-6xl font-black text-dms-gray uppercase tracking-tighter mb-10 leading-tight">
                            Elevate Your <span className="text-dms-blue">Business</span>
                        </h3>
                        <p className="text-xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={() => navigateTo('contact')}
                                className="bg-dms-blue text-white py-6 px-16 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-dms-green transition-all duration-500 shadow-2xl hover:scale-105"
                            >
                                Start Growth
                            </button>
                            <button 
                                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                                className="glass text-dms-gray py-6 px-16 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500"
                            >
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;