import {
  CheckBox,
  CountContainer,
  CountDescription,
  DescriptionTitle,
  DescriptionTotal,
  HeroContainer,
  HeroImage,
  HeroImgContainer,
  HeroTitle,
  HeroTitleContainer,
} from './Hero.styled';

import image from '../../styles/image/main_img.jpg';
import Wrapper from '../Shared/Wrapper/Wrapper';
import sprite from '../../styles/sprite.svg';

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
        </HeroTitleContainer>
        <HeroImgContainer>
          <HeroImage srcSet={`${image}`} alt="psychologist" />
          <CountContainer>
            <CheckBox>
              <svg>
                <use href={sprite + '#check'} />
              </svg>
            </CheckBox>
            <CountDescription>
              <DescriptionTitle>Experienced psychologists</DescriptionTitle>
              <DescriptionTotal>15,000</DescriptionTotal>
            </CountDescription>
          </CountContainer>
        </HeroImgContainer>
      </HeroContainer>
    </Wrapper>
  );
};

export default Hero;
