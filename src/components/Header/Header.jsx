import Wrapper from '../Shared/Wrapper/Wrapper';
import { HeaderContainer, HeaderWrapper } from './Header.styled';
import Logotype from './Logotype/Logotype';
import UserAuth from './UserAuth/UserAuth';
import UserNav from './UserNav/UserNav';

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <HeaderWrapper>
          <Logotype />
          <UserNav />
          <UserAuth />
        </HeaderWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
