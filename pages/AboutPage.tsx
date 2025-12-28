import React, { useEffect } from 'react';
import { SecondaryLogo } from '../components/Logo';
import { teamMembers } from '../constants';

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

const BeliefCard: React.FC<{ title: string; children: React.ReactNode; index: number }> = ({ title, children, index }) => {
    return (
        <div className="p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 will-animate border border-gray-100 group" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-dms-light-gray rounded-xl flex items-center justify-center text-dms-green group-hover:bg-dms-green group-hover:text-white transition-colors duration-500">
                    <SecondaryLogo className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-dms-gray ml-4 uppercase tracking-tighter">{title}</h3>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">{children}</p>
        </div>
    )
};

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0]; index: number }> = ({ member, index }) => (
    <div className="group will-animate" style={{ animationDelay: `${0.1 * index}s` }}>
        <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 bg-dms-light-gray">
            <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dms-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-[2px] bg-dms-green mb-2"></div>
                    <p className="text-white text-xs uppercase tracking-[0.3em] font-bold">Expert Strategist</p>
                </div>
            </div>
        </div>
        <h3 className="text-xl font-black text-dms-gray uppercase tracking-tighter group-hover:text-dms-green transition-colors">{member.name}</h3>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{member.role}</p>
    </div>
);


const AboutPage: React.FC = () => {
    useScrollReveal();

    return (
        <div className="overflow-x-hidden">
            {/* Minimalist Hero */}
            <section className="bg-white pt-40 pb-20 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <span className="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">Clearwater, FL Office</span>
                        <h1 className="text-5xl md:text-8xl font-black text-dms-gray mb-8 leading-[0.9] uppercase tracking-tighter animate-fade-in-up">
                            Understanding Your<br/>
                            <span className="text-dms-green">Business</span> Goals.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            We proudly provide all the digital marketing services you need to ensure you get the best results for your business.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* The Narrative Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <div className="md:w-1/2 will-animate">
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                                    alt="Collaboration in Clearwater" 
                                    className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-dms-blue rounded-full p-8 text-white flex items-center justify-center text-center font-black text-xs uppercase tracking-widest hidden lg:flex shadow-2xl">
                                    Trust the Data<br/>FLORIDA
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 will-animate" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-4xl font-black text-dms-gray mb-8 uppercase tracking-tighter">Our Story</h2>
                            <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                                <p>
                                    At Trust the Data in Clearwater, FL, we are a marketing and SEO company that works closely with our clients to understand their business and help them set their company apart from the competition.
                                </p>
                                <p>
                                    We proudly provide all the digital marketing services you need to ensure you get the best results for your business. The Internet is highly competitive. We understand using the right marketing strategies is essential to elevate your business above all the others.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-32 bg-dms-light-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 will-animate">
                        <h2 className="text-4xl md:text-6xl font-black text-dms-gray mb-6 uppercase tracking-tighter">Our <span className="text-dms-blue">Approach</span></h2>
                        <div className="w-24 h-1 bg-dms-green mx-auto mb-8"></div>
                        <p className="text-gray-600 font-medium text-lg">Setting your business apart through data-driven precision.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <BeliefCard title="Close Collaboration" index={0}>
                           We work closely with our clients to understand their business at its core.
                        </BeliefCard>
                        <BeliefCard title="Strategic Elevation" index={1}>
                            Elevating your business above the highly competitive internet landscape.
                        </BeliefCard>
                         <BeliefCard title="Proven Results" index={2}>
                           Ensuring you get the best results through comprehensive digital marketing.
                        </BeliefCard>
                        <BeliefCard title="Competitive Edge" index={3}>
                            Helping you set your company apart from the competition strategically.
                        </BeliefCard>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-20 bg-dms-blue text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Ready to outrank the rest?</h2>
                    <button className="bg-white text-dms-blue font-black py-6 px-12 rounded-full hover:bg-dms-green hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-2xl">
                        Start Digital Growth
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;