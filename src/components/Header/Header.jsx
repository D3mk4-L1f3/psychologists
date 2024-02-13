/* eslint-disable react/prop-types */
import Wrapper from '../Shared/Wrapper/Wrapper';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserAuth from './UserAuth/UserAuth';
import UserNav from './UserNav/UserNav';

const Header = ({ openModal, closeModal }) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderWrapper>
          <Logotype />
          <UserNav />
          <UserAuth openModal={openModal} closeModal={closeModal} />
        </HeaderWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
