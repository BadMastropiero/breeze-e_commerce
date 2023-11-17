import styled from 'styled-components';

import { fadeIn } from '../../../../styles/animations';

export const StyledContent = styled.div`
  grid-column: 1 / -1;
  padding: calc(${(p) => p.theme.layout.vGap} * 2) ${(p) => p.theme.layout.hGap};
  border: 1px dashed ${(p) => p.theme.colors.border};
  border-left: none;
  border-right: none;
  margin-bottom: 1rem;

  ${fadeIn}
  a {
    color: ${(p) => p.theme.colors.primary.base};
    font-weight: 600;
  }
`;
