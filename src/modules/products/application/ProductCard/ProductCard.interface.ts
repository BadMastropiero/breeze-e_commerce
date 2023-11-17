import { Product } from '../../domain/types';

export interface ProductCardProps {
  item: Product;
  onClick?: () => void;
}
