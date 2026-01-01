import { TeamMember, Service } from './types';
import { SeoIcon, SocialIcon, PpcIcon, ContentIcon, DesignIcon } from './components/Icons';

// --- 1. GRAB DATA FROM WORDPRESS ---
// We check if 'window.DMS_DATA' exists (it will on the live site)
const wpData = typeof window !== 'undefined' ? window.DMS_DATA : null;

// Helper to match string names from ACF to actual React components
const getIcon = (name: string) => {
    const icons: any = { SeoIcon, SocialIcon, PpcIcon, ContentIcon, DesignIcon };
    // Default to SeoIcon if the name doesn't match or is empty
    return icons[name] || SeoIcon; 
};

// --- 2. EXPORT VARIABLES (DYNAMIC OR FALLBACK) ---

// HERO TITLE
export const heroTitle = wpData && wpData.heroTitle 
    ? wpData.heroTitle 
    : "Dependable Marketing Solutions"; // Default Fallback

// TEAM MEMBERS
// We check for length > 0 so that if the list exists but is empty, we show the fallback.
export const teamMembers: TeamMember[] = wpData && wpData.team && wpData.team.length > 0
    ? wpData.team.map((t: any) => ({
        name: t.name,
        role: t.role,
        imageUrl: t.image || 'https://via.placeholder.com/800x1000?text=No+Image' // Safety fallback for image
    }))
    : [
        // FALLBACK DATA (Used if ACF is empty or during development)
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

// SERVICES
export const services: Service[] = wpData && wpData.services && wpData.services.length > 0
    ? wpData.services.map((s: any) => ({
        title: s.title,
        description: s.description,
        // If you saved "SocialIcon" in ACF, this converts it to the component
        icon: getIcon(s.icon_name || 'SeoIcon') 
      }))
    : [
        // FALLBACK DATA
        {
            icon: SeoIcon,
            title: 'SEARCH ENGINE OPTIMIZATION',
            description: 'We make it possible for your business to compete online by placing your website higher in local search results of Google.',
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
            description: 'We provide well targeted PPC advertising. Our industry leading AI technology gives us access to vast amounts of data.',
        },
        {
            icon: DesignIcon,
            title: 'WEBSITE DESIGN',
            description: 'Having trouble with design? Our team is ready to take your dreams and make them a reality!',
        },
    ];