/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Logout from '../Logout/Logout';
import UserAuth from '../UserAuth/UserAuth';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';

const Access = ({
  openModal,
  closeModal,
  setUserData,
  registerSub,
  loginSub,
}) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLogged ? (
        <Logout openModal={openModal} closeModal={closeModal} />
      ) : (
        <UserAuth
          setUserData={setUserData}
          registerSub={registerSub}
          loginSub={loginSub}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Access;
