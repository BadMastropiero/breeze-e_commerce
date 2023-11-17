import { css, keyframes } from 'styled-components';

export const breatheAnimation = keyframes`
  0% {
    transform: translateX(-50px); /* Start position */
    opacity: 0;
  }
  100% {
    transform: translateX(0); /* End position */
    opacity: 1;
  }
`;

export const popinAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.1); /* Start position (small) */
  }
  100% {
    opacity: 1;
    transform: scale(1); /* End position (normal size) */
  }
`;

export const bblFadInOutAnimation = keyframes`
  0%, 80%, 100% {
    box-shadow: 0 2.5em 0 -1.3em
  }
  40% {
    box-shadow: 0 2.5em 0 0
  }
`;

export const fadeIn = css`
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: initial;
  animation-timing-function: ${(p) => p.theme.easings.base};
`;

export const popIn = css`
  animation-name: ${popinAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: initial;
  animation-timing-function: ${(p) => p.theme.easings.base};
`;
