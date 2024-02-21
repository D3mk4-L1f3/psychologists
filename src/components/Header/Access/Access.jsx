/* eslint-disable react/prop-types */
import Logout from '../Logout/Logout';
import UserAuth from '../UserAuth/UserAuth';

const Access = ({ openModal, closeModal, setUserData, submit, loginSub }) => {
  const isLogged = false;

  return (
    <>
      {isLogged ? (
        <Logout openModal={openModal} closeModal={closeModal} />
      ) : (
        <UserAuth
          setUserData={setUserData}
          submit={submit}
          loginSub={loginSub}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Access;
