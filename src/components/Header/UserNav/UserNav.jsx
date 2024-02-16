import { NavLink, useLocation } from 'react-router-dom';
import { NavContainer } from './UserNav.styled';

const UserNav = () => {
  const isLogged = true;
  const location = useLocation();
  const currentLocation = location.pathname;

  const homePage = currentLocation === '/';
  const psyPage = currentLocation === '/psychologists';
  const favoritePage = currentLocation === '/favorites';

  return (
    <NavContainer>
      <li>
        <NavLink aria-label="To Home Page" to="/">
          Home
        </NavLink>
        {homePage && <div></div>}
      </li>
      <li>
        <NavLink aria-label="To Psychologists List" to="/psychologists">
          Psychologists
        </NavLink>
        {psyPage && <div></div>}
      </li>
      {isLogged && (
        <li>
          <NavLink aria-label="To Favorite List" to="/favorites">
            Favorites
          </NavLink>
          {favoritePage && <div></div>}
        </li>
      )}
    </NavContainer>
  );
};

export default UserNav;
