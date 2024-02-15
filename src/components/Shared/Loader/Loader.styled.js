import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 110%;
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: var(--white);
  }
`;

export const TextLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.access-modal {
    top: 8%;
    color: var(--green);
  }

  &.header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    transform: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--black);
  }
`;

export const TextContent = styled.p`
  white-space: nowrap;
  font-size: 18px;
  border-right: var(--black);

  animation: ${typing} 6s steps(40, end), ${blinkCaret} 0.5s step-end infinite;
  overflow: hidden;
  animation-iteration-count: infinite;
`;
