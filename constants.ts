import { TeamMember, Service } from './types';
import { SeoIcon, SocialIcon, PpcIcon, ContentIcon, DesignIcon } from './components/Icons';

export const teamMembers: TeamMember[] = [
    { 
        name: 'Amal Maher', 
        role: 'Founder & CEO', 
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        name: 'Ahmed Hossam', 
        role: 'Chief Technology Officer', 
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        name: 'Amira Hassan', 
        role: 'Senior Software Engineer', 
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        name: 'Mohamed Hussain', 
        role: 'Lead Data Strategist', 
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' 
    },
];

export const services: Service[] = [
    {
        icon: SeoIcon,
        title: 'Search Engine Optimization',
        description: 'SEO, you know you need it. Your competition is doing it. We identify the words and phrases people are using to find what they need and then we make the changes to your site so that you\'re the one they find.',
    },
    {
        icon: SocialIcon,
        title: 'Social Media Marketing',
        description: 'Social media marketing is one of the most effective ways to tell your story, share your vision, and promote your business in Clearwater, FL. We can help you create informative and engaging content.',
    },
     {
        icon: ContentIcon,
        title: 'Content Marketing',
        description: 'The content you create is the foundation of your buyer’s journey. Our experts help in creating high-quality content that helps you attract your ideal customer and aligns with your brand’s voice.',
    },
    {
        icon: PpcIcon,
        title: 'Pay Per Click',
        description: 'PPC ads are displayed when people search for products and services like yours online. You only pay when a user clicks on your ad, making pay-per-click advertising a flexible and affordable way to market your business.',
    },
     {
        icon: DesignIcon,
        title: 'Design',
        description: 'Dependable Marketing Solutions, a premier website design agency in Clearwater, FL, provides a comprehensive range of website design services to businesses in the area. Our design services will help you create engaging and responsive websites that capture attention.',
    },
];