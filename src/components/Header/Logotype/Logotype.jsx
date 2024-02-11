import { Logo, LogoContainer, SecondSpan } from "./Logotype.styled";

const Logotype = () => {
  return (
    <LogoContainer>
      <Logo>
        psychologists<span>.</span>
        <SecondSpan>services</SecondSpan>
      </Logo>
    </LogoContainer>
  );
};

export default Logotype;
