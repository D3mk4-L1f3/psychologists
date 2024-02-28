/* eslint-disable react/prop-types */
import Loginization from '../Loginization/Loginization';
import Registration from '../Registration/Registration';
import { AuthButton, AuthContainerList } from './UserAuth.styled';

const UserAuth = ({
  openModal,
  closeModal,
  setUserData,
  registerSub,
  loginSub,
}) => {
  const handleLogin = () => {
    openModal(
      <Loginization
        closeModal={closeModal}
        openModal={openModal}
        setUserData={setUserData}
        loginSub={loginSub}
      />
    );
  };

  const handleRegister = () => {
    openModal(
      <Registration
        closeModal={closeModal}
        setUserData={setUserData}
        registerSub={registerSub}
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
