import { z, defineCollection } from "astro:content";

export const collections = {
  locations: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        mainImage: image(),
        available: z.boolean().default(false),
        images: z.array(image()).optional(),
        address: z.object({
          streetName: z.string(),
          postalCode: z.number(),
          city: z.string(),
        }),
        description: z.string().optional(),
      }),
  }),
};
