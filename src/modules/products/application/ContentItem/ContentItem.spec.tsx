import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../../styles/theme';
import { Content } from '../../domain/types';
import ContentItem from './ContentItem';

const mockContent: Content = {
  contents: '<p data-testid="test-id">test</p>',
  position: 'row-10',
  type: 'html',
};

describe('ContentItem', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <ContentItem item={mockContent} />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders content as html', () => {
    render(
      <ThemeProvider theme={theme}>
        <ContentItem item={mockContent} />
      </ThemeProvider>,
    );
    const htmlRendered = screen.getByTestId('test-id');
    expect(htmlRendered).toHaveTextContent('test');
  });
});
