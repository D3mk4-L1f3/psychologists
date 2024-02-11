import { LinkItem, NavContainer } from "./UserNav.styled";

const UserNav = () => {
  return (
    <NavContainer>
      <li>
        <LinkItem>Home</LinkItem>
      </li>
      <li>
        <LinkItem>Psychologists</LinkItem>
      </li>
      {/* <li>
        <LinkItem>Favorites</LinkItem>
      </li> */}
    </NavContainer>
  );
};

export default UserNav;
