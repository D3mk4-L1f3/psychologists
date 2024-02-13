/* eslint-disable react/prop-types */
import AccessModal from '../../Shared/AccessModal/AccessModal';
import {
  RegisterButton,
  RegisterHeader,
  RegisterTitleContainer,
} from './Registration.styled';

const Registration = ({ closeModal }) => {
  return (
    <AccessModal closeModal={closeModal}>
      <RegisterTitleContainer>
        <RegisterHeader>Registration</RegisterHeader>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </RegisterTitleContainer>
      <div></div>
      <RegisterButton>Sign Up</RegisterButton>
    </AccessModal>
  );
};

export default Registration;
