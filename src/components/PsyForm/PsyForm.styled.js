import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 472px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--black);
  }
`;

export const SelectedPsychologist = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const PsyAvatar = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PsyName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--black);
`;

export const InputContainer = styled.div`
  height: 320px;
`;

export const SendBtn = styled.button`
  all: unset;
  border-radius: 30px;
  width: 472px;
  height: 52px;
  background: var(--green);
  text-align: center;

  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--white);
`;
