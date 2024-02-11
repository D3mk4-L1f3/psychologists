import { WrapperStyle } from './Wrapper.styled';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  return <WrapperStyle>{children}</WrapperStyle>;
};

export default Wrapper;
