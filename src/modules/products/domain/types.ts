import { z } from 'zod';

import {
  contentsApiResSchema,
  contentSchema,
  productsApiResSchema,
  productSchema,
} from './schemas';

export type Product = z.infer<typeof productSchema>;
export type Content = z.infer<typeof contentSchema>;

export type ProductsApiRes = z.infer<typeof productsApiResSchema>;
export type ContentsApiRes = z.infer<typeof contentsApiResSchema>;
