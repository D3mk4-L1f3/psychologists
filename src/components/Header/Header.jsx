/* eslint-disable react/prop-types */
import Loader from '../Shared/Loader/Loader';
import Wrapper from '../Shared/Wrapper/Wrapper';
import Access from './Access/Access';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserNav from './UserNav/UserNav';

const Header = ({ openModal, closeModal }) => {
  const isLoading = false;

  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderWrapper>
          <Logotype />
          <UserNav />
          {isLoading ? (
            <Loader variant="header" />
          ) : (
            <Access openModal={openModal} closeModal={closeModal} />
          )}
        </HeaderWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
