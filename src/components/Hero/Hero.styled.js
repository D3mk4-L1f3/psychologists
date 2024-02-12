import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 70px;
  padding-bottom: 100px;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    width: 510px;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--black);
  }

  & > button {
    all: unset;
    width: 135px;
    border-radius: 30px;
    padding: 18px 50px;
    background: var(--green);
  }
`;

export const ButtonItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  justify-content: space-between;

  & > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: var(--white);
  }
  & > svg {
    width: 15px;
    height: 15px;
    fill: var(--white);
  }
`;

export const HeroTitle = styled.h1`
  width: 595px;
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.02em;
  color: var(--black);

  & > span {
    font-style: italic;
    color: var(--green);
  }
`;

export const HeroImgContainer = styled.div`
  position: relative;
`;

export const HeroImage = styled.img`
  border-radius: 10px;
  width: 464px;
  height: 526px;
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 32px;
  border-radius: 20px;
  background: var(--green);
  position: absolute;
  top: 333px;
  left: -101px;
`;

export const CheckBox = styled.div`
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background: var(--white);

  & > svg {
    width: 24px;
    height: 20px;
    fill: var(--green);
  }
`;

export const CountDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 177px;
  gap: 8px;
`;

export const DescriptionTitle = styled.p`
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const DescriptionTotal = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: var(--white);
`;

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 185px;
  left: -35px;
  background: #4535af;
  transform: rotate(-15deg);
  border-radius: 10px;
  width: 40px;
  height: 40px;

  & > svg {
    width: 16px;
    height: 21px;
    transform: rotate(15deg);
    fill: white;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 47px;
  right: -41px;
  border-radius: 10px;
  width: 48px;
  height: 48px;
  background: #fbc75e;
  transform: rotate(15deg);

  & > svg {
    width: 17px;
    height: 17px;
    fill: white;
  }
`;
