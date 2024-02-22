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
import { useState } from 'react';

const PsychoCard = psychologist => {
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    name,
    avatar_url,
    experience,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = psychologist.psychologist;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <PsychoCardContainer>
      <AvatarContainer>
        <img srcSet={avatar_url} alt={name} />
        <OnlineStatusContainer></OnlineStatusContainer>
      </AvatarContainer>
      <DescriptionWrap>
        <HeadDescriptionWrap>
          <PsyText>Psychologist</PsyText>
          <RatingPriceBlock>
            <SvgStar>
              <use href={`${sprite}#star`}></use>
            </SvgStar>
            <RatingPriceText>Rating: {rating}</RatingPriceText>
            <RatingPriceText>
              Price / 1 hour:
              <RatingPriceTextSpan> {price_per_hour}$</RatingPriceTextSpan>{' '}
            </RatingPriceText>
          </RatingPriceBlock>
          <SvgHeart $isFavorite={isFavorite} onClick={toggleFavorite}>
            <use href={`${sprite}#heart`}></use>
          </SvgHeart>
        </HeadDescriptionWrap>
        <PsychologistName>{name}</PsychologistName>
        <SkillsBlock>
          <li>
            <SkillsBlockText>
              Experience: <span>{experience}</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              License: <span>{license}</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              Specialization: <span>{specialization}</span>
            </SkillsBlockText>
          </li>
          <li>
            <SkillsBlockText>
              Initial_consultation:
              <span>{initial_consultation}</span>
            </SkillsBlockText>
          </li>
        </SkillsBlock>
        <DescriptionText>{about}</DescriptionText>
        <ReadMoreButton>Read more</ReadMoreButton>
      </DescriptionWrap>
    </PsychoCardContainer>
  );
};

export default PsychoCard;
