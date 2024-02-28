/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Wrapper from '../Shared/Wrapper/Wrapper';
import Access from './Access/Access';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserNav from './UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const Header = ({ openModal, closeModal }) => {
  const [userValue, setUserValue] = useState({});
  const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();

  const isLoading = false;

  const login = () => {
    const { email, password } = userValue;
    signInWithEmailAndPassword(auth, email, password).catch(console.error);
  };

  const register = () => {
    const { email, password } = userValue;
    createUserWithEmailAndPassword(auth, email, password).catch(console.error);
  };

  useEffect(() => {
    if (isRegisterSubmit) {
      register();
      // setIsSubmit(false);
    }
    // if (enter) {
    //   login();
    //   CloseModal(true);
    //   setUserValue({});
    // }
    if (isLoginSubmit) {
      login();
      // setIsLoginSubmit(false);
      // setUserValue({});
    }
  }, [isRegisterSubmit, isLoginSubmit]);

  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderWrapper>
          <Logotype />
          <UserNav />
          {isLoading ? (
            <Loader variant="header" />
          ) : (
            <Access
              openModal={openModal}
              closeModal={closeModal}
              setUserData={setUserValue}
              registerSub={setIsRegisterSubmit}
              loginSub={setIsLoginSubmit}
            />
          )}
        </HeaderWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
