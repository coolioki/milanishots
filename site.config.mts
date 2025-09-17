import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'KM',
	favicon: 'favicon.ico',
	owner: 'Kian Milani',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/rockem/astro-photography-portfolio',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
	],
};
