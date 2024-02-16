import styled from 'styled-components';

export const NavContainer = styled.ul`
  display: flex;
  gap: 40px;

  & > li {
    position: relative;

    & > div {
      position: absolute;
      top: 27px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: var(--green);
    }
  }
`;
