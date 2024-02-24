/* eslint-disable react/prop-types */
import { useState } from 'react';
import AccessModal from '../Shared/AccessModal/AccessModal';
import {
  FormContainer,
  HeaderContainer,
  InputContainer,
  NameContainer,
  PsyAvatar,
  PsyName,
  SelectedPsychologist,
  SendBtn,
} from './PsyForm.styled';
import usual from '../../styles/image/defaultImg/default@1x.webp';
import retina from '../../styles/image/defaultImg/default@2x.webp';

const PsyForm = ({ closeModal, name, avatar_url }) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const handleImageError = () => setImageLoadError(true);

  return (
    <AccessModal closeModal={closeModal}>
      <FormContainer>
        <HeaderContainer>
          <h2>Make an appointment with a psychologists</h2>
          <p>
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </p>
        </HeaderContainer>
        <SelectedPsychologist>
          {imageLoadError ? (
            <PsyAvatar srcSet={`${usual} 1x, ${retina} 2x`} alt={name} />
          ) : (
            <PsyAvatar
              srcSet={avatar_url}
              alt={name}
              onError={handleImageError}
            />
          )}
          <NameContainer>
            <p>Your psychologists</p>
            <PsyName>{name}</PsyName>
          </NameContainer>
        </SelectedPsychologist>
        <InputContainer></InputContainer>
        <SendBtn type="submit">Send</SendBtn>
      </FormContainer>
    </AccessModal>
  );
};

export default PsyForm;
