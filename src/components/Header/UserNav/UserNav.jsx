import { NavLink } from 'react-router-dom';
import { NavContainer } from './UserNav.styled';

const UserNav = () => {
  const isLogged = true;

  return (
    <NavContainer>
      <li>
        <NavLink aria-label="To Home Page" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink aria-label="To Psychologists List" to="/psychologists">
          Psychologists
        </NavLink>
      </li>
      {isLogged && (
        <li>
          <NavLink aria-label="To Favorite List" to="/favorites">
            Favorites
          </NavLink>
        </li>
      )}
    </NavContainer>
  );
};

export default UserNav;
