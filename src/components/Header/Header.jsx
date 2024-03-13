/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Wrapper from '../Shared/Wrapper/Wrapper';
import Access from './Access/Access';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserNav from './UserNav/UserNav';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../../redux/auth/operations';
import {
  selectIsLoading,
  selectIsRegistered,
} from '../../redux/auth/selectors';

const Header = ({ openModal, closeModal }) => {
  const [userValue, setUserValue] = useState({});
  const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);

  const dispatch = useDispatch();
  const isRegistered = useSelector(selectIsRegistered);
  const isLoading = useSelector(selectIsLoading);

  const login = () => {
    const { email, password } = userValue;
    dispatch(signIn({ email, password }));
  };

  const register = () => {
    const { email, password, name } = userValue;
    dispatch(signUp({ email, password, name }));
  };

  useEffect(() => {
    if (isRegisterSubmit) {
      register();
      setIsRegisterSubmit(false);
    }
    if (isRegistered === true) {
      login();
      closeModal(true);
      setUserValue({});
    }
    if (isLoginSubmit) {
      login();
      setIsLoginSubmit(false);
      setUserValue({});
    }
  }, [isRegisterSubmit, isLoginSubmit, isRegistered]);

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
