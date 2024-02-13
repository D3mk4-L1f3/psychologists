import styled from 'styled-components';

export const AccessModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 438px;
  gap: 40px;
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
