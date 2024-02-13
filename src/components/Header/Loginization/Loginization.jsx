/* eslint-disable react/prop-types */
import AccessModal from '../../Shared/AccessModal/AccessModal';
import {
  LoginButton,
  LoginHeader,
  LoginTitleContainer,
} from './Loginization.styled';

const Loginization = ({ closeModal }) => {
  return (
    <AccessModal closeModal={closeModal}>
      <LoginTitleContainer>
        <LoginHeader>Log In</LoginHeader>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </LoginTitleContainer>
      <div></div>
      <LoginButton>Sign Up</LoginButton>
    </AccessModal>
  );
};

export default Loginization;
