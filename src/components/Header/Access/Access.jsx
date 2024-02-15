/* eslint-disable react/prop-types */
import Logout from '../Logout/Logout';
import UserAuth from '../UserAuth/UserAuth';

const Access = ({ openModal, closeModal }) => {
  const isLogged = true;

  return (
    <>
      {isLogged ? (
        <Logout openModal={openModal} closeModal={closeModal} />
      ) : (
        <UserAuth />
      )}
    </>
  );
};

export default Access;
