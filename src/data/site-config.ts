export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://jmb-portfolio.vercel.app/',
    title: 'João Maria Botelho',
    subtitle: 'Global Impact | Forbes 30 Under 30 in Sustainability and Social Impact | Young Sustainability Leader',
    description:
        'An award-winning mind and Forbes 30 Under 30 honouree, recognised as one of Portugal’s youngest voices shaping ESG, sustainable finance, and sustainability.',
    image: {
        src: '/jmb-preview.jpg',
        alt: 'João Maria Botelho'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Email',
            href: '#'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/joaomariastbotelho/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jo%C3%A3omariabotelho/'
        }
    ],
    hero: {
        title: 'An award-winning mind and Forbes 30 Under 30 honouree, recognised as one of Portugal’s youngest voices shaping ESG, sustainable finance, and sustainability.',
        text: 'João Maria Botelho *(LL.B, NOVA School of Law)* is a jurist recognised as one of **Forbes 30 Under 30 (2024)** in Sustainability and Social Innovation. He serves on the **Board of Alumni of NOVA School of Law** and works in the legal arena, where he focuses on ESG, Climate Change Regulation, and regulated sectors. His young career is marked by the integration of law with sustainability, combining technical expertise with international engagement. <br/><br/> He is the **founder of Generation Resonance**, an international platform of young leaders protocolled with the **United Nations Association of Portugal**, dedicated to advancing and implementing the **2030 Agenda for Sustainable Development**. He is also a **Global Shaper** under the World Economic Forum and the winner of Portugal’s **Award for Financial Literacy and Entrepreneurship** (Santander Foundation).<br/><br/> João Maria has completed advanced studies in ESG, **Sustainable Finance (Wharton School), Regenerative Economics** under John Fullerton, **Shipping and Blue Economy, Marine Biodiversity & Sustainability** (University of Lisbon and Catholic University of Portugal), and **Climate Change Regulation**. Internationally, he has served in **Policy & Strategy at the Global Alliance for a Sustainable Planet (New York) and Alliance for Affordable Energy**, and was recently named by Randstad as one of Portugal’s leading **ESG thought leaders**.<br/><br/> Currently, he also serves as **Ambassador of the EU Green Deal in Portugal**, and participates regularly as a speaker at national and international forums on sustainability, sustainable finance, and climate law.',
        image: {
            src: '/hero.jpg',
            alt: 'João Maria Botelho Hero Image'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Great conversations often start with a single message.',
        text: 'João Maria Botelho is open to dialogue.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
