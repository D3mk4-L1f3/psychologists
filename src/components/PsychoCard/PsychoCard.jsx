import {
  AvatarContainer,
  DescriptionText,
  DescriptionWrap,
  HeadDescriptionWrap,
  OnlineStatusContainer,
  PsyText,
  PsychoCardContainer,
  PsychologistName,
  RatingPriceBlock,
  RatingPriceText,
  RatingPriceTextSpan,
  ReadMoreButton,
  SkillsBlock,
  SkillsBlockText,
  SvgHeart,
  SvgStar,
} from './PsychoCard.styled';
import sprite from '../../styles/sprite.svg';
import usual from '../../styles/image/hero/hero@1x.webp';

const PsychoCard = () => {
  return (
    <PsychoCardContainer>
      <AvatarContainer>
        <img srcSet={usual} alt="psycho avatar" />
        <OnlineStatusContainer></OnlineStatusContainer>
      </AvatarContainer>
      <DescriptionWrap>
        <HeadDescriptionWrap>
          <PsyText>Psychologist</PsyText>
          <RatingPriceBlock>
            <SvgStar>
              <use href={`${sprite}#star`}></use>
            </SvgStar>
            <RatingPriceText>Rating: 4.7</RatingPriceText>
            <RatingPriceText>
              Price / 1 hour: <RatingPriceTextSpan>180$</RatingPriceTextSpan>{' '}
            </RatingPriceText>
          </RatingPriceBlock>
          <SvgHeart>
            <use href={`${sprite}#heart`}></use>
          </SvgHeart>
        </HeadDescriptionWrap>
        <PsychologistName>Dr. Mark Thompson</PsychologistName>
        <SkillsBlock>
          <li>
            <SkillsBlockText>
              Experience: <span>20 years</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              License: <span>Licensed Psychologist (License #54321)</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              Specialization: <span>Relationship Counseling</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              Initial_consultation:
              <span>Free 60-minute initial consultation</span>
            </SkillsBlockText>
          </li>
        </SkillsBlock>
        <DescriptionText>
          Dr. Mark Thompson is a highly experienced and licensed psychologist
          specializing in Relationship Counseling. With 20 years of practice, he
          has helped individuals navigate and improve their relationships,
          leading to better well-being and personal growth. Dr. Thompson is
          known for his expertise and ability to provide invaluable insights to
          his clients. His approach to therapy is tailored to each individual`s
          unique needs, ensuring a supportive and effective counseling
          experience.
        </DescriptionText>
        <ReadMoreButton>Read more</ReadMoreButton>
      </DescriptionWrap>
    </PsychoCardContainer>
  );
};

export default PsychoCard;
