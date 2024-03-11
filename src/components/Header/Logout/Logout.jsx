import {
  AvatarContainer,
  LogoutButton,
  LogoutContainer,
  UserNameWrapper,
} from './Logout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { logOut } from '../../../redux/auth/operations';

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { name, avatarURL } = user;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogoutContainer>
      <li>
        <AvatarContainer src={avatarURL} alt={name} />
        <UserNameWrapper>{name}</UserNameWrapper>
      </li>
      <li>
        <LogoutButton type="button" onClick={handleLogOut}>
          Log out
        </LogoutButton>
      </li>
    </LogoutContainer>
  );
};

export default Logout;
