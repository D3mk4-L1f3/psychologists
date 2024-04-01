/* eslint-disable react/prop-types */
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
import sprite from '../../../styles/sprite.svg';
import { useState } from 'react';
import MoreInfo from './MoreInfo/MoreInfo';
import LazyLoad from 'react-lazy-load';
import PsyForm from '../../PsyForm/PsyForm';
import usual from '../../../styles/image/defaultImg/default@1x.webp';
import retina from '../../../styles/image/defaultImg/default@2x.webp';
import { useDispatch } from 'react-redux';
import { addFavoritePsychologist } from '../../../redux/psychologists/operations';

const PsychoCard = ({ psychologist, openModal, closeModal }) => {
  const {
    _id,
    name,
    avatar_url,
    experience,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  } = psychologist;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const dispatch = useDispatch();

  const handleImageError = () => setImageLoadError(true);

  const toggleFavorite = () => {
    setIsFavorite(true);
    dispatch(addFavoritePsychologist(_id));
  };

  const handleMoreInfo = () => {
    setIsMoreInfo(true);
  };

  const handleClick = () => {
    openModal(
      <PsyForm closeModal={closeModal} name={name} avatar_url={avatar_url} />
    );
  };

  return (
    <PsychoCardContainer>
      <AvatarContainer>
        {imageLoadError ? (
          <img srcSet={`${usual} 1x, ${retina} 2x`} alt={name} />
        ) : (
          <LazyLoad offset={100}>
            <img srcSet={avatar_url} alt={name} onError={handleImageError} />
          </LazyLoad>
        )}
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
          <SvgHeart
            $isFavorite={isFavorite}
            onClick={toggleFavorite}
            aria-label="add to favorite"
          >
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
        {!isMoreInfo && (
          <ReadMoreButton
            type="button"
            onClick={handleMoreInfo}
            aria-label="read more"
          >
            Read more
          </ReadMoreButton>
        )}
        {isMoreInfo && <MoreInfo reviews={reviews} handleClick={handleClick} />}
      </DescriptionWrap>
    </PsychoCardContainer>
  );
};

export default PsychoCard;
