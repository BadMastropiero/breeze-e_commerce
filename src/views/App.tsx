import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { StyledContent, StyledGlobal } from './App.styles';
import ProductsList from '../modules/products/application/ProductsList/ProductsList';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <QueryClientProvider client={queryClient}>
        <StyledContent>
          <ProductsList />
        </StyledContent>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
