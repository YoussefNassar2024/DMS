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
            <p className="text-gray-500 leading-relaxed font-light">{children}</p>
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
                        <span className="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">Our Agency</span>
                        <h1 className="text-5xl md:text-8xl font-black text-dms-gray mb-8 leading-[0.9] uppercase tracking-tighter animate-fade-in-up">
                            Driven By Data.<br/>
                            <span className="text-dms-green">Defined</span> By Results.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            We bridge the gap between creative vision and measurable growth.
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
                                    alt="Collaboration" 
                                    className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dms-blue rounded-full p-8 text-white flex items-center justify-center text-center font-bold text-xs uppercase tracking-widest hidden lg:flex">
                                    Established Since 2009
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 will-animate" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-4xl font-black text-dms-gray mb-8 uppercase tracking-tighter">Our Story</h2>
                            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
                                <p>
                                    At Dependable Marketing Solutions, we identified a critical flaw in the modern agency model: a lack of accountability. We saw business owners overwhelmed by jargon and underwhelmed by performance.
                                </p>
                                <p>
                                    Our mission was simple: provide radical clarity. We scale businesses by focusing on the metrics that actually matter to your bottom line. We work with you as partners, not vendors.
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
                        <h2 className="text-4xl md:text-6xl font-black text-dms-gray mb-6 uppercase tracking-tighter">Core <span className="text-dms-blue">Principles</span></h2>
                        <div className="w-24 h-1 bg-dms-green mx-auto mb-8"></div>
                        <p className="text-gray-500 font-light text-lg">Every campaign we launch is rooted in these four pillars of excellence.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <BeliefCard title="Unyielding Tenacity" index={0}>
                           We solve problems that others walk away from. If the data shows a hurdle, we engineer a bridge.
                        </BeliefCard>
                        <BeliefCard title="Radical Curiosity" index={1}>
                            The digital landscape shifts every hour. We stay ahead by being perpetual students of the game.
                        </BeliefCard>
                         <BeliefCard title="Data Fidelity" index={2}>
                           Trust is earned through transparency. We provide real-time reporting that leaves zero room for doubt.
                        </BeliefCard>
                        <BeliefCard title="Deep Partnership" index={3}>
                            Your success is our only KPI. We immerse ourselves in your brand until we're indistinguishable from your team.
                        </BeliefCard>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="will-animate">
                            <span className="text-dms-green font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Meet the Minds</span>
                            <h2 className="text-4xl md:text-6xl font-black text-dms-gray leading-none uppercase tracking-tighter">Our Core <br/><span className="text-dms-blue">Strategists</span></h2>
                        </div>
                        <p className="max-w-md text-gray-500 will-animate font-light text-lg" style={{ animationDelay: '0.2s' }}>
                            A collective of data architects, creative disruptors, and performance specialists dedicated to your growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-20 bg-dms-blue text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Ready to see the data?</h2>
                    <button className="bg-white text-dms-blue font-black py-6 px-12 rounded-full hover:bg-dms-green hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-2xl">
                        Schedule a Strategy Session
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;