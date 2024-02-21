import styled from 'styled-components';

export const PsychoCardContainer = styled.li`
  display: flex;
  gap: 24px;
  border-radius: 24px;
  background: var(--white);
  padding: 24px;
`;

export const AvatarContainer = styled.div`
  width: 96px;
  height: 96px;
  border: 2px solid var(--green-transp);
  border-radius: 30px;
  padding: 12px;
  position: relative;

  & > img {
    border-radius: 15px;
    width: 96px;
    height: 96px;
  }
`;

export const OnlineStatusContainer = styled.div`
  position: absolute;
  top: 7px;
  right: 12px;
  width: 14px;
  height: 14px;
  background: var(--green);
  border-radius: 25px;
  border: 3px solid var(--white);
`;

export const DescriptionWrap = styled.div`
  width: 100%;
`;
export const HeadDescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`;
export const PsyText = styled.p`
  color: var(--grey);
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  margin-right: auto;
`;

export const RatingPriceBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 28px;
`;

export const RatingPriceText = styled.p`
  color: var(--black);
  font-weight: 500;
  line-height: 150%;
  text-align: left;

  &::after {
    content: '';
    width: 0px;
    height: 16px;
    border: var(--border-transp-02);
    margin-left: 16px;
    margin-right: 16px;
  }

  &:last-child::after {
    content: none;
  }
`;
export const RatingPriceTextSpan = styled.span`
  color: var(--bright-green);
`;
export const SvgStar = styled.svg`
  width: 19px;
  height: 19px;
  margin-right: 8px;
  fill: var(--yellow);
`;
export const SvgHeart = styled.svg.attrs(props => ({
  $$isFavorite: props.$isFavorite,
}))`
  width: 26px;
  height: 26px;
  fill: none;
  stroke: ${({ $$isFavorite }) =>
    $$isFavorite ? 'var(--black)' : 'var(--green)'};
  fill: ${({ $$isFavorite }) =>
    $$isFavorite ? 'transparent' : 'var(--green)'};
`;
export const PsychologistName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: var(--black);
  margin-bottom: 24px;
`;
export const SkillsBlock = styled.ul`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const SkillsBlockText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 24px;
  background: rgb(243, 243, 243);
  font-weight: 500;
  line-height: 150%;

  & > span {
    color: var(--black);
    margin-left: 6px;
  }
`;

export const DescriptionText = styled.p`
  margin-bottom: 14px;
`;
export const ReadMoreButton = styled.a`
  font-weight: 500;
  line-height: 150%;
  color: var(--black);
  text-decoration-skip-ink: none;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--black);
`;
