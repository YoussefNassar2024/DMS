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
        title: 'SEARCH ENGINE OPTIMIZATION',
        description: 'We make it possible for your business to compete online by placing your website higher in local search results of Google and strategically placing your ads where they are most effective.',
    },
    {
        icon: SocialIcon,
        title: 'SOCIAL MEDIA MARKETING',
        description: 'Our social media distribution is excellent at reaching a larger audience quickly so you don’t need an expensive marketing team!',
    },
     {
        icon: ContentIcon,
        title: 'CONTENT MARKETING',
        description: 'We will write content to rank high on Google, so you can start getting traffic from search engines and converting visitors into customers.',
    },
    {
        icon: PpcIcon,
        title: 'PAY PER CLICK',
        description: 'We provide well targeted PPC advertising. Our industry leading AI technology gives us access to vast amounts of data that keep us ahead of other PPC providers.',
    },
     {
        icon: DesignIcon,
        title: 'WEBSITE DESIGN',
        description: 'Having trouble with design? Our team is ready to take your dreams and make them a reality! Click the button below to read more about our web design services.',
    },
];