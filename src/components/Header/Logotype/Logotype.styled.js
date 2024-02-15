import styled from 'styled-components';

export const LogoContainer = styled.div`
  & > a {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--green);

    & > span {
      font-weight: 500;
    }
  }
`;

export const SecondSpan = styled.span`
  font-weight: 600;
  color: var(--black);
`;
