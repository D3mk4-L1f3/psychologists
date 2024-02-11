import { AuthButton, AuthContainerList } from "./UserAuth.styled";

const UserAuth = () => {
  return (
    <AuthContainerList>
      <li>
        <AuthButton>Log In</AuthButton>
      </li>
      <li>
        <AuthButton
          style={{ background: "var(--green)", color: "var(--white)" }}
        >
          Registration
        </AuthButton>
      </li>
    </AuthContainerList>
  );
};

export default UserAuth;
