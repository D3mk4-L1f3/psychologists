/* eslint-disable react/prop-types */
import { TextContent, TextLoaderContainer } from './Loader.styled';

const Loader = ({ variant }) => {
  return (
    <TextLoaderContainer className={variant}>
      <TextContent>Please wait, it`s loading...</TextContent>
    </TextLoaderContainer>
  );
};

export default Loader;
