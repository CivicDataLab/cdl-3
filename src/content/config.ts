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
			description: z.string(),
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

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
})

export const collections = { home, blog }
