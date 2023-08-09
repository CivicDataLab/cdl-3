import { defineCollection, z } from 'astro:content'

const home = defineCollection({
	schema: z.object({
		headline: z.object({
			title: z.string(),
			description: z.string(),
			links: z.array(
				z.object({
					title: z.string(),
					url: z.string(),
				})
			),
		}),
		data: z.object({
			title: z.string(),
			number: z.string(),
			description: z.string(),
		}),
		about: z.object({
			title: z.string(),
			description: z.array(z.string()),
			link: z.object({
				title: z.string(),
				url: z.string(),
			}),
		}),
		partners: z.object({
			title: z.string(),
			carousel: z.array(
				z.object({
					image: z.string(),
					url: z.string(),
				})
			),
		}),
	}),
})

const work = defineCollection({
	schema: z.object({
		heading: z.object({
			title: z.string(),
			description: z.string(),
		}),
		initiatives: z.array(
			z.object({
				title: z.string(),
				description: z.string(),
				image: z.string(),
				url: z.string(),
			})
		),
	}),
})

const about = defineCollection({
	schema: z.object({
		heading: z.object({
			title: z.string(),
			description: z.array(z.string()),
		}),
		mission: z.object({
			title: z.string(),
			description: z.array(z.string()),
		}),
		team: z.object({
			title: z.string(),
			bandhus: z.array(
				z.object({
					name: z.string(),
					role: z.string(),
					image: z.string(),
				})
			),
		}),
	}),
})

export const collections = { home, work, about }
