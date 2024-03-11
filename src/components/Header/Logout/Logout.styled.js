import styled from 'styled-components';

export const LogoutContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 28px;
  align-items: center;

  & > li:first-child {
    display: flex;
    gap: 14px;
    flex-direction: row;
    align-items: center;
  }
`;

export const AvatarContainer = styled.img`
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

export const UserNameWrapper = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--black);
`;

export const LogoutButton = styled.button`
  all: unset;
  border: var(--border-transp-02);
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: var(--black);
`;
