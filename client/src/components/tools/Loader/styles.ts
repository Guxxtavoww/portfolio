import styled, { keyframes } from 'styled-components';

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 187 / 4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

export const LoaderContainer = styled.svg`
  animation: ${rotator} 1.4s linear infinite;

  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} 1.4s ease-in-out infinite;
    stroke: var(--gray-color);
  }
`;
