/* eslint-disable react/prop-types */
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

const PsyForm = ({ closeModal, name, avatar_url }) => {
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
          <PsyAvatar srcSet={avatar_url} alt={name} />
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
