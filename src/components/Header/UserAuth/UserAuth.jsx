/* eslint-disable react/prop-types */
import Loginization from '../Loginization/Loginization';
import Registration from '../Registration/Registration';
import { AuthButton, AuthContainerList } from './UserAuth.styled';

const UserAuth = ({ openModal, closeModal }) => {
  const handleLogin = () => {
    openModal(
      <Loginization
        closeModal={closeModal}
        // OpenModal={OpenModal}
        // setUserData={setUserData}
        // loginSub={loginSub}
        // submit={submit}
      />
    );
  };

  const handleRegister = () => {
    openModal(
      <Registration
        closeModal={closeModal}
        // setUserData={setUserData}
        // submit={submit}
      />
    );
  };

  return (
    <AuthContainerList>
      <li>
        <AuthButton type="button" onClick={handleLogin}>
          Log In
        </AuthButton>
      </li>
      <li>
        <AuthButton
          style={{ background: 'var(--green)', color: 'var(--white)' }}
          type="button"
          onClick={handleRegister}
        >
          Registration
        </AuthButton>
      </li>
    </AuthContainerList>
  );
};

export default UserAuth;
