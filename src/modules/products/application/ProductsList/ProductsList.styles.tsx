import styled from 'styled-components';

import { popIn } from '../../../../styles/animations';

export const StyledTitle = styled.h1``;

export const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (width > 420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width > 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-column-gap: 1rem;
`;

export const StyledWrapper = styled.div`
  max-width: ${(p) => p.theme.layout.maxWidthS};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${(p) => p.theme.layout.vGap};
`;

export const StyledModal = styled.dialog`
  top: 0;
  left: 0;
  z-index: 1000;
  margin: auto;
  border: none;
  background: none;
  outline: none;

  ${popIn}
  &::backdrop {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 1000;
  }
`;

export const StyledCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  float: right;
  cursor: pointer;
`;

export const StyledModalImage = styled.img`
  width: 90vw;
  object-fit: cover;
  max-width: min(90vw, 1000px);
  max-height: min(90vh, 1000px);
`;
