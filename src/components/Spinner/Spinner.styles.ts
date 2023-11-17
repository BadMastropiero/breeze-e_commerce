import styled from 'styled-components';

import { bblFadInOutAnimation } from '../../styles/animations';

export const StyledSpinner = styled.div`
  margin: auto;
  padding: ${(p) => p.theme.layout.vGap} ${(p) => p.theme.layout.hGap};

  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${bblFadInOutAnimation} 1.8s infinite ease-in-out;
  }

  color: ${(p) => p.theme.colors.primary.base};
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }
`;
