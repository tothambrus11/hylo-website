import {defineCollection, z} from 'astro:content';
import {docsLoader} from '@astrojs/starlight/loaders';
import {docsSchema} from '@astrojs/starlight/schema';
import {glob, file} from "astro/loaders";

export const collections = {
    docs: defineCollection({loader: docsLoader(), schema: docsSchema()}),
    blog: defineCollection({
        loader: glob({pattern: "**/*.{md,mdx}", base: "src/content/blog/"}),
        schema: z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.date(),
            author: z.string().optional(),
        })
    }),
    papers: defineCollection({
        // loader: file("src/content/papers.json"),
        loader: file("src/content/papers.yml"),
        // loader: glob({pattern: "**/*.{md,mdx}", base: "src/content/papers/"}),
        schema: z.object({
            title: z.string(),
            authors: z.array(z.string()),
            venue: z.string(),
            year: z.number(),
            month: z.number().optional(),
            url: z.string().url().optional(),
        })
    }),
    talks: defineCollection({
        loader: file("src/content/talks.yml"),
        schema: z.object({
            title: z.string(),
            authors: z.array(z.string()),
            venue: z.string(),
            year: z.number(),
            month: z.number().optional(),
            url: z.string().url().optional(),
        })
    })
};
