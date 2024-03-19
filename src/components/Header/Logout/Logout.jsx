import {
  AvatarContainer,
  LogoutButton,
  LogoutContainer,
  UserNameWrapper,
} from './Logout.styled';
import usual from '../../../styles/image/defaultImg/default@1x.webp';
import retina from '../../../styles/image/defaultImg/default@2x.webp';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { logOut } from '../../../redux/auth/operations';
import { useState } from 'react';

const Logout = () => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { name, avatarURL } = user;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleImageError = () => setImageLoadError(true);

  return (
    <LogoutContainer>
      <li>
        {imageLoadError ? (
          <img srcSet={`${usual} 1x, ${retina} 2x`} alt={name} />
        ) : (
          <AvatarContainer
            src={avatarURL}
            alt={name}
            onError={handleImageError}
          />
        )}
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
