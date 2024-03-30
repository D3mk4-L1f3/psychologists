/* eslint-disable react/prop-types */
import {
  RatingContainer,
  ReviewAvatar,
  ReviewContainer,
  ReviewItem,
  ReviewsList,
  TopContainer,
  SvgStar,
  AppointBtn,
} from './MoreInfo.styled';
import sprite from '../../../../styles/sprite.svg';

const MoreInfo = ({ reviews, handleClick }) => {
  return (
    <>
      <ReviewsList>
        {reviews.map((review, index) => (
          <ReviewItem key={index}>
            <TopContainer>
              <ReviewAvatar>
                <p>{review.reviewer.charAt(0)}</p>
              </ReviewAvatar>
              <ReviewContainer>
                <p>{review.reviewer}</p>
                <RatingContainer>
                  <SvgStar>
                    <use href={`${sprite}#star`}></use>
                  </SvgStar>
                  <p>{review.rating}</p>
                </RatingContainer>
              </ReviewContainer>
            </TopContainer>
            <p>{review.comment}</p>
          </ReviewItem>
        ))}
      </ReviewsList>
      <AppointBtn type="button" onClick={handleClick} aria-label='Make an appointment'>
        Make an appointment
      </AppointBtn>
    </>
  );
};

export default MoreInfo;
