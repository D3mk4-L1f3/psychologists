/* eslint-disable react/prop-types */
import Logout from '../Logout/Logout';
import UserAuth from '../UserAuth/UserAuth';

const Access = ({
  openModal,
  closeModal,
  setUserData,
  registerSub,
  loginSub,
}) => {
  const isLogged = false;

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
