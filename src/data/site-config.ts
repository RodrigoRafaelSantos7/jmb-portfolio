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
	formUrl?: string;
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
	website: "https://jmb-portfolio.vercel.app/",
	title: "João Maria Botelho",
	subtitle:
		"Global Impact | Forbes 30 Under 30 in Sustainability and Social Impact | Young Sustainability Leader",
	description:
		"An award-winning mind and Forbes 30 Under 30 honouree, recognised as one of Portugal's youngest voices shaping ESG, sustainable finance, and sustainability.",
	image: {
		src: "/jmb-preview.jpg",
		alt: "João Maria Botelho",
	},
	headerNavLinks: [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Achievements",
			href: "/achievements",
		},
		{
			text: "Generation Resonance",
			href: "/generation-resonance",
		},
		{
			text: "Sustainable Literacy",
			href: "/literacy",
		},
		{
			text: "Contact",
			href: "/contact",
		},
	],
	footerNavLinks: [
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Contact",
			href: "/contact",
		},
		{
			text: "Terms",
			href: "/terms",
		},
	],
	socialLinks: [
		{
			text: "Email",
			href: "mailto:joaomariastbotelho@gmail.com",
		},
		{
			text: "Instagram",
			href: "https://www.instagram.com/joaomariastbotelho/",
		},
		{
			text: "LinkedIn",
			href: "https://www.linkedin.com/in/jo%C3%A3omariabotelho/",
		},
	],
	hero: {
		title:
			"An award-winning mind and Forbes 30 Under 30 honouree, recognised as one of Portugal's youngest voices shaping ESG, sustainable finance, and sustainability.",
		text: "João Maria Botelho is a jurist, entrepreneur and sustainability expert operating at the strategic intersection of ESG frameworks, economic governance, sustainable business policy, and critical-sectors policy.<br/><br/>As the founder of **Generation Resonance** - an international platform launched at COP28 - João leads a global movement dedicated to structured policy debate and democratic participation. The initiative serves as a bridge between young leadership and high-level international organizations, fostering a dialogue that translates the 2030 Agenda into actionable outcomes.<br/><br/>Recognized by **Forbes 30 Under 30** in Sustainability and Social Innovation, João is a leading voice in the evolution of corporate responsibility. He is the coordinator of the **First ESG Handbook in Portugal** (Almedina, 2024), a seminal work that reflects his commitment to integrating technical legal expertise with regenerative economic models. His analysis is frequently sought by Portuguese and global media, including Forbes USA, where he provides expert commentary on EU sustainability reporting and regulatory shifts.<br/><br/>Named by **Randstad** as one of Portugal's top emerging ESG thought leaders, his influence extends across borders.<br/><br/>As **European Climate Pact Ambassador** (European Commission) João leads the national dialogue on the European Green Deal in Portugal. He is a **TEDx Speaker** and **Global Shaper** of the World Economic Forum, regularly participating in international forums dedicated to sustainable transition, green finance and climate law. Alongside his professional work, he conducts academic and editorial research on corporate responsibility, governance, and the evolution of the economic model, with a special focus on the relationship between regulation, capital allocation, and real-world outcomes. His professional activities also include cross-border transactions, especially where sustainability, regulatory frameworks, and financial structuring meet.<br/><br/>**\"My work is dedicated to ensuring that regulation, capital allocation, and legal frameworks don't just exist on paper, but drive real-world outcomes for a regenerative economy.\"** – *João M Botelho (FORBES Annual Summit)*",
		image: {
			src: "/hero.jpg",
			alt: "João Maria Botelho Hero Image",
		},
		actions: [
			{
				text: "Get in Touch",
				href: "/contact",
			},
		],
	},
	subscribe: {
		title: "Great conversations often start with a single message.",
		text: "João Maria Botelho is open to dialogue.",
	},
	postsPerPage: 8,
	projectsPerPage: 8,
};

export default siteConfig;
