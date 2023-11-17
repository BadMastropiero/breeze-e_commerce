import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../../styles/theme';
import { Product } from '../../domain/types';
import ProductCard from './ProductCard';

const mockProduct: Product = {
  product_id: 0,
  title: '',
  image: 'https://picsum.photos/200/300',
};

describe('ProductCard', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <ProductCard item={mockProduct} />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('triggers on click event', () => {
    let clicked = false;

    render(
      <ThemeProvider theme={theme}>
        <ProductCard
          item={mockProduct}
          onClick={() => {
            clicked = true;
          }}
        />
      </ThemeProvider>,
    );
    const card = screen.getByTestId('styled-card');
    fireEvent.click(card);
    expect(clicked).toBe(true);
  });
});
