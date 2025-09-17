import type { AstroInstance } from 'astro';
import { Github, Instagram, Mail } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'MS',
	favicon: 'favicon.ico',
	owner: 'Kian Milani',
	profileImage: 'logo.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/rockem/astro-photography-portfolio',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/milanishots/',
			icon: Instagram,
		} as SocialLink,	
		{
			name: 'Gmail',
			url: 'mailto:milanishots@gmail.com',
			icon: Mail,
		} as SocialLink,
	],
};
