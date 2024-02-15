import {
  AvatarContainer,
  LogoutButton,
  LogoutContainer,
  UserNameWrapper,
} from './Logout.styled';
import sprite from '../../../styles/sprite.svg';

const Logout = () => {
  return (
    <LogoutContainer>
      <li>
        <AvatarContainer>
          <svg>
            <use href={sprite + '#user'} />
          </svg>
        </AvatarContainer>
        <UserNameWrapper>Ilona</UserNameWrapper>
      </li>
      <li>
        <LogoutButton type="button">Log out</LogoutButton>
      </li>
    </LogoutContainer>
  );
};

export default Logout;
