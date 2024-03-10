/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Wrapper from '../Shared/Wrapper/Wrapper';
import Access from './Access/Access';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserNav from './UserNav/UserNav';
// import { useDispatch } from 'react-redux';

const Header = ({ openModal, closeModal }) => {
  const [userValue, setUserValue] = useState({});
  const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);
  // const dispatch = useDispatch();

  const isLoading = false;

  const login = () => {
    const { email, password } = userValue;
    console.log(email, password);
  };

  const register = () => {
    const { email, password, name } = userValue;
    console.log(email, password, name);
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
