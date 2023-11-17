import { API_ENDPOINT } from '../../../config';
import { ContentsApiRes, ProductsApiRes } from '../domain/types';

async function getProducts(page: 'large-page' | number) {
  const url = `${API_ENDPOINT}/products?page=${page}`;
  const response = await fetch(url);
  return (await response.json()) as ProductsApiRes;
}

async function getContent(page: 'large-page' | number) {
  const url = `${API_ENDPOINT}/content?page=${page}`;
  const response = await fetch(url);
  return (await response.json()) as ContentsApiRes;
}

export const DataService = {
  getProducts,
  getContent,
};

export default DataService;
