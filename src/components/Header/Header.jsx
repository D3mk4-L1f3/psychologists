/* eslint-disable react/prop-types */
import { useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Wrapper from '../Shared/Wrapper/Wrapper';
import Access from './Access/Access';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserNav from './UserNav/UserNav';

const Header = ({ openModal, closeModal }) => {
  const [userValue, setUserValue] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);

  const isLoading = false;
  console.log(userValue);
  console.log(isSubmit);
  console.log(isLoginSubmit);

  // const login = () => {
  //   // const { email, password } = userValue;
  //   // dispatch(signIn({ email, password }));
  // };

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
              submit={setIsSubmit}
              loginSub={setIsLoginSubmit}
            />
          )}
        </HeaderWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
