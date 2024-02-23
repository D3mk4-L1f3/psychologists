import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 48px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ReviewAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 44px;
  height: 44px;
  background: var(--green-transp);

  & > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: var(--green);
  }
`;

export const ReviewContainer = styled.div`
  & > p {
    font-weight: 500;
    color: var(--black);
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  & > p {
    font-weight: 500;
    color: var(--black);
  }
`;

export const SvgStar = styled.svg`
  width: 19px;
  height: 19px;
  fill: var(--yellow);
`;

export const AppointBtn = styled.button`
  all: unset;
  border-radius: 30px;
  margin-top: 40px;
  text-align: center;
  width: 227px;
  height: 48px;
  background: var(--green);

  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--white);
`;
