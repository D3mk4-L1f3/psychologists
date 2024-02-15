import { NavLink } from 'react-router-dom';
import { LogoContainer, SecondSpan } from './Logotype.styled';

const Logotype = () => {
  return (
    <LogoContainer>
      <NavLink aria-label="To Home Page" to="/">
        psychologists<span>.</span>
        <SecondSpan>services</SecondSpan>
      </NavLink>
    </LogoContainer>
  );
};

export default Logotype;
