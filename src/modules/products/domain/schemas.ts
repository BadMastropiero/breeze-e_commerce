import { z } from 'zod';

export const productSchema = z.object({
  product_id: z.number(),
  title: z.string(),
  image: z.string(),
});

export const contentSchema = z.object({
  type: z.string(),
  contents: z.string(),
  position: z.string(),
});

export const contentsApiResSchema = z.object({
  data: z.array(contentSchema),
});

export const productsApiResSchema = z.object({
  products: z.array(productSchema),
});
