import React, { useEffect, useRef } from 'react';
import { Page } from '../types';
import { services } from '../constants';
import { SecondaryLogo } from '../components/Logo';

interface HomePageProps {
    navigateTo: (page: Page) => void;
}

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number }> = ({ icon, title, description, index }) => (
    <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 will-animate h-full" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-dms-light-gray rounded-full transition-all duration-500 group-hover:scale-[3] group-hover:bg-dms-green/5 opacity-50"></div>
        <div className="relative z-10">
            <div className="w-16 h-16 bg-dms-light-gray rounded-2xl flex items-center justify-center mb-6 text-dms-green transition-all duration-500 group-hover:bg-dms-green group-hover:text-white group-hover:rotate-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-dms-gray mb-4 group-hover:text-dms-green transition-colors">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
        </div>
    </div>
);

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.will-animate').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
    useScrollReveal();

    return (
        <div className="overflow-x-hidden pt-0">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-dms-dark-gray">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-dms-blue to-dms-green opacity-20 animate-gradient-xy"></div>
                    <div 
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale opacity-20 mix-blend-overlay"
                    ></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-6 inline-block">
                        <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] font-semibold animate-fade-in opacity-0" style={{animationFillMode: 'forwards'}}>
                            Premier Marketing Agency
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] uppercase animate-fade-in-up">
                        Dependable<br/>
                        <span className="text-gradient">Marketing</span><br/>
                        Solutions
                    </h1>
                    <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto text-gray-400 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Turning complex data into simple growth strategies for ambitious brands.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={() => navigateTo('services')} 
                            className="bg-dms-green text-white font-bold py-5 px-10 rounded-full hover:bg-dms-green-light transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                            Our Capabilities
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                        <button 
                            onClick={() => navigateTo('about')}
                            className="glass text-white font-bold py-5 px-10 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                            Our Story
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { val: '250+', label: 'Brands Managed' },
                        { val: '85%', label: 'Avg ROI Growth' },
                        { val: '12M+', label: 'Leads Generated' },
                        { val: '15yr', label: 'Industry Expertise' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center will-animate" style={{ animationDelay: `${0.1 * i}s` }}>
                            <div className="text-3xl md:text-4xl font-black text-dms-gray mb-1">{stat.val}</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Insight Section */}
            <section className="py-32 bg-dms-light-gray relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-dms-green/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div className="will-animate order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-dms-green/20 rounded-3xl rotate-3"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
                                alt="Modern Workspace" 
                                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
                            />
                        </div>
                    </div>
                    <div className="will-animate order-1 md:order-2">
                        <SecondaryLogo className="w-16 h-16 text-dms-blue mb-8"/>
                        <h2 className="text-4xl md:text-6xl font-black text-dms-gray mb-8 leading-tight uppercase tracking-tighter">A Passion For <span className="text-dms-green">Creating</span></h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                            We don't just "do" marketing. We architect experiences that resonate. Our visual identity reflects precision and modernity—the core traits of a data-driven partner.
                        </p>
                        <button onClick={() => navigateTo('about')} className="flex items-center gap-4 text-dms-gray font-black uppercase tracking-widest group">
                            <span className="h-[2px] w-12 bg-dms-green transition-all duration-500 group-hover:w-20"></span>
                            Discover More
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Showcase */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="will-animate">
                            <span className="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-black text-dms-gray leading-none uppercase tracking-tighter">Full Spectrum<br/>Marketing</h2>
                        </div>
                        <p className="max-w-md text-gray-500 will-animate" style={{ animationDelay: '0.2s' }}>
                            From search to social, we provide high-octane solutions that move the needle.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, index) => (
                            <ServiceCard 
                                key={index} 
                                index={index}
                                icon={<service.icon className="w-8 h-8" />} 
                                title={service.title} 
                                description={service.description} 
                            />
                        ))}
                    </div>
                </div>
            </section>

             {/* Dynamic Testimonial */}
            <section className="py-32 bg-dms-dark-gray text-white relative overflow-hidden">
                <div className="absolute left-0 top-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dms-green via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center will-animate">
                        <div className="mb-12 inline-block">
                            <div className="w-20 h-20 rounded-full border-4 border-dms-green mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl font-serif">“</span>
                            </div>
                        </div>
                        <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12">
                            "Dependable Marketing Solutions decoded our metrics and built a strategy that saw our engagement triple in six months. They are the benchmark for excellence."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-[1px] bg-dms-green"></div>
                            <div>
                                <div className="font-black uppercase tracking-widest text-sm">Annie Steiner</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">CEO, Creative Solutions Inc.</div>
                            </div>
                            <div className="w-12 h-[1px] bg-dms-green"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;