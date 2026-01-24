import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		schema: z.object({
			title: z.string(),
			github: z.string(),
			live: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	timeline: defineCollection({
		type: 'data',
		schema: z.array(z.object({
			date: z.string(),
			title: z.string(),
			description: z.string(),
			type: z.enum(['personal', 'education', 'work', 'certification']),
			highlight: z.boolean().optional(),
			details: z.string().optional(),
		})),
	}),
};
