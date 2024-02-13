import styled from 'styled-components';

export const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const LoginHeader = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const LoginButton = styled.button`
  all: unset;
  border-radius: 30px;
  padding: 16px 189px;
  background: var(--green);
  color: var(--white);
  font-weight: 500;
  letter-spacing: -0.01em;
`;
