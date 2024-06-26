/* eslint-disable react/prop-types */
import {
  ButtonItemContainer,
  CheckBox,
  CountContainer,
  CountDescription,
  DescriptionTitle,
  DescriptionTotal,
  GetStartedActin,
  HeroContainer,
  HeroImage,
  HeroImgContainer,
  HeroTitle,
  HeroTitleContainer,
  QuestionBox,
  SocialContainer,
} from './Hero.styled';

import usual from '../../styles/image/hero/hero@1x.webp';
import retina from '../../styles/image/hero/hero@2x.webp';
import Wrapper from '../Shared/Wrapper/Wrapper';
import sprite from '../../styles/sprite.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroTitleContainer>
          <HeroTitle>
            The road to the <span>depths</span> of the human soul
          </HeroTitle>
          <p>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <GetStartedActin as={Link} to="/psychologists" aria-label='Lets select psychologists'>
            <ButtonItemContainer>
              <p>Get started</p>
              <svg>
                <use href={sprite + '#arrow-45deg'} />
              </svg>
            </ButtonItemContainer>
          </GetStartedActin>
        </HeroTitleContainer>
        <HeroImgContainer>
          <HeroImage srcSet={`${usual} 1x, ${retina} 2x`} alt="psychologist" />
          <CountContainer>
            <CheckBox>
              <svg>
                <use href={sprite + '#checked'} />
              </svg>
            </CheckBox>
            <CountDescription>
              <DescriptionTitle>Experienced psychologists</DescriptionTitle>
              <DescriptionTotal>15,000</DescriptionTotal>
            </CountDescription>
          </CountContainer>
          <QuestionBox>
            <svg>
              <use href={sprite + '#question'} />
            </svg>
          </QuestionBox>
          <SocialContainer>
            <svg>
              <use href={sprite + '#social'} />
            </svg>
          </SocialContainer>
        </HeroImgContainer>
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
