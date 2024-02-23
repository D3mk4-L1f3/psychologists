import styled from 'styled-components';

export const AccessModalContainer = styled.div`
  padding: 64px;
  background: var(--white);
`;

export const CloseButton = styled.button`
  all: unset;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;

  & > svg {
    width: 32px;
    height: 32px;
    fill: var(--black);
  }
`;
