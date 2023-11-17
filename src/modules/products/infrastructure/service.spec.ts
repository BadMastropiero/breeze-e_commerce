import { describe, expect, it } from 'vitest';

import { contentsApiResSchema, productsApiResSchema } from '../domain/schemas';
import DataService from './service';

describe('Products API', () => {
  it(`products data should match current structure/type`, async () => {
    const response = await DataService.getProducts('large-page').catch(() => null);

    if (response) {
      expect(() => productsApiResSchema.parse(response)).not.toThrow();
    }
  });
});

describe('Contents API', () => {
  it(`contents data should match current structure/type`, async () => {
    const response = await DataService.getContent('large-page').catch(() => null);

    if (response) {
      expect(() => contentsApiResSchema.parse(response)).not.toThrow();
    }
  });
});
