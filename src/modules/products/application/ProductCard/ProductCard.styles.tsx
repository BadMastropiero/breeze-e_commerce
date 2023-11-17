import styled from 'styled-components';

import { fadeIn } from '../../../../styles/animations';

export const StyledCard = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.card};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  //height: 190px;
  width: 190px;
  height: fit-content;
  box-shadow: ${(p) => p.theme.shadows.base};
  transition: box-shadow 0.2s ${(p) => p.theme.easings.base};
  margin: auto auto 1rem;

  ${fadeIn}
  &:hover {
    box-shadow: ${(p) => p.theme.shadows.hover};
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(100%);
  transition: filter 0.8s ${(p) => p.theme.easings.base};

  ${StyledCard}:hover & {
    filter: grayscale(0%);
  }
`;

export const StyledCardTitle = styled.h3`
  padding: ${(p) => p.theme.layout.vGap} ${(p) => p.theme.layout.hGap};
`;
