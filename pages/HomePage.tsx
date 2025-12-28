import React, { useEffect } from 'react';
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
            <h3 className="text-xl font-bold text-dms-gray mb-4 group-hover:text-dms-green transition-colors uppercase tracking-tighter">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
        </div>
    </div>
);

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
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
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-dms-blue to-dms-green opacity-20 animate-gradient-xy"></div>
                    <div 
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale opacity-20 mix-blend-overlay"
                    ></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-6 inline-block">
                        <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] font-bold animate-fade-in opacity-0" style={{animationFillMode: 'forwards'}}>
                            Trust the Data in Clearwater, FL
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.95] uppercase animate-fade-in-up">
                        Dependable<br/>
                        <span className="text-gradient">Marketing</span><br/>
                        Solutions
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                            We proudly provide all the digital marketing services you need to ensure you get the best results for your business. The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={() => navigateTo('services')} 
                            className="bg-dms-green text-white font-black py-5 px-12 rounded-full hover:bg-dms-green-light transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 uppercase tracking-widest text-xs">
                            Our Capabilities
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                        <button 
                            onClick={() => navigateTo('about')}
                            className="glass text-white font-black py-5 px-12 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-xs">
                            Our Story
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </section>

            {/* Clearwater Identity Section - NEW */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 text-center max-w-5xl">
                    <h2 className="text-2xl md:text-4xl font-black text-dms-gray uppercase tracking-tighter mb-8 will-animate">
                        At <span className="text-dms-green">Trust the Data</span> in Clearwater, FL
                    </h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed will-animate mb-8" style={{ animationDelay: '0.1s' }}>
                        We are a marketing and SEO company that works closely with our clients to understand their business and help them set their company apart from the competition. We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                    </p>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed will-animate" style={{ animationDelay: '0.2s' }}>
                        The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others.
                    </p>
                </div>
            </section>

            {/* Ranking Insight Section */}
            <section className="py-32 bg-dms-light-gray relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-dms-green/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div className="will-animate order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-dms-green/20 rounded-3xl rotate-3"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                                alt="Clearwater Marketing Strategy" 
                                className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
                            />
                        </div>
                    </div>
                    <div className="will-animate order-1 md:order-2">
                        <SecondaryLogo className="w-16 h-16 text-dms-blue mb-8"/>
                        <h2 className="text-4xl md:text-5xl font-black text-dms-gray mb-8 leading-tight uppercase tracking-tighter">
                            Where does your business <span className="text-dms-green">rank?</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                            With help from our SEO company in Clearwater, FL, you can more easily outrank your competitors for the right keywords to put your name in front of more prospective customers.
                        </p>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                            We understand using the right marketing strategies is essential to elevate your business above all the others. We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                        </p>
                        <button onClick={() => navigateTo('about')} className="flex items-center gap-4 text-dms-gray font-black uppercase tracking-widest group">
                            <span className="h-[2px] w-12 bg-dms-green transition-all duration-500 group-hover:w-20"></span>
                            Our Strategy
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Showcase */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="will-animate">
                            <span className="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Solutions</span>
                            <h2 className="text-4xl md:text-6xl font-black text-dms-gray leading-none uppercase tracking-tighter">Strategic <br/>Services</h2>
                        </div>
                        <p className="max-w-md text-gray-500 font-medium will-animate" style={{ animationDelay: '0.2s' }}>
                            We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
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

             {/* Testimonial Affirmation - NEW */}
            <section className="py-32 bg-dms-dark-gray text-white relative overflow-hidden">
                <div className="absolute left-0 top-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dms-green via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center will-animate">
                        <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
                            "The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others."
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-[1px] bg-dms-green"></div>
                            <div>
                                <div className="font-black uppercase tracking-widest text-sm text-dms-green">Trust the Data</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Clearwater, FL</div>
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