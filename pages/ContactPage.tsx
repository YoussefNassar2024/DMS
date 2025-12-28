import React, { useEffect } from 'react';

const ContactPage: React.FC = () => {
    const services = [
        "SEO Strategy",
        "Social Media Ads",
        "Search Engine Marketing",
        "Brand Identity",
        "Content Production",
        "Other"
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Transmission Received. Our strategist will contact you within 24 hours via phone or email.');
        e.currentTarget.reset();
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('animated');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.will-animate').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const CustomCheckbox: React.FC<{ label: string }> = ({ label }) => (
        <label className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative h-6 w-6">
                <input type="checkbox" className="absolute opacity-0 w-full h-full peer"/>
                <span className="w-6 h-6 inline-block border-2 border-gray-200 rounded-lg transition-all duration-300 group-hover:border-dms-green peer-checked:bg-dms-green peer-checked:border-dms-green"></span>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <span className="text-gray-500 font-medium group-hover:text-dms-gray transition-colors">{label}</span>
        </label>
    );

    return (
        <div className="bg-white min-h-screen pt-40 pb-20">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-20 text-center will-animate">
                <span className="text-dms-green font-bold text-xs uppercase tracking-[0.6em] mb-6 block">Ready to Scale?</span>
                <h1 className="text-5xl md:text-8xl font-black text-dms-gray uppercase tracking-tighter leading-none">Let's Talk <span className="text-dms-blue">Growth</span></h1>
            </div>

            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50 flex flex-col lg:flex-row overflow-hidden">
                    {/* Sidebar: Strategic Info */}
                    <div className="lg:w-1/3 bg-dms-dark-gray text-white p-12 lg:p-20 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dms-green/20 blur-3xl rounded-full"></div>
                        <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Strategic HQ</h2>
                        
                        <div className="space-y-12">
                             <div>
                                <h3 className="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">Direct Email</h3>
                                <a href="mailto:srd.inquiry@gmail.com" className="text-2xl font-light hover:text-dms-green transition-colors">srd.inquiry@gmail.com</a>
                            </div>
                            <div>
                                <h3 className="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">Immediate Line</h3>
                                <a href="tel:+201112457711" className="text-2xl font-light hover:text-dms-green transition-colors">+20 111 245 7711</a>
                            </div>
                             <div>
                                <h3 className="text-xs font-black text-dms-green uppercase tracking-[0.4em] mb-4">DMS Office</h3>
                                <p className="text-xl font-light text-gray-400 leading-relaxed">6 October<br/>Giza<br/>Egypt</p>
                            </div>
                        </div>

                        <div className="mt-20 pt-12 border-t border-white/10">
                            <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                                Our team operates globally. Expect a strategic response within one business day.
                            </p>
                        </div>
                    </div>

                    {/* Main: Intake Form */}
                    <div className="lg:w-2/3 p-12 lg:p-20 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Full Name</label>
                                    <input type="text" placeholder="Your Name" required className="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-medium"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Organization</label>
                                    <input type="text" placeholder="Enter Company Name" required className="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-medium"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Email Address</label>
                                    <input type="email" placeholder="your_email@company.com" required className="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-medium"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Phone Number</label>
                                    <input type="tel" placeholder="+201112457711" required className="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-medium"/>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Project Budget</label>
                                    <select className="w-full pb-4 bg-transparent border-b-2 border-gray-100 focus:border-dms-green transition-colors duration-300 focus:outline-none text-xl font-medium appearance-none cursor-pointer">
                                        <option value="">Choose a range</option>
                                        <option>$5k - $10k</option>
                                        <option>$10k - $25k</option>
                                        <option>$25k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-6">
                                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Interest Spectrum</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.map((service, index) => (
                                        <CustomCheckbox key={index} label={service} />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 pt-6">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Brief Overview</label>
                                <textarea placeholder="Tell us about your objectives..." rows={4} className="w-full p-6 bg-dms-light-gray rounded-2xl border-2 border-transparent focus:border-dms-green transition-all duration-300 focus:outline-none text-lg"></textarea>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="w-full bg-dms-green text-white font-black py-6 px-12 rounded-full transition-all duration-500 transform hover:scale-[1.02] shadow-2xl uppercase tracking-[0.3em] text-sm hover:bg-dms-green-light">
                                    Initialize Connection
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;