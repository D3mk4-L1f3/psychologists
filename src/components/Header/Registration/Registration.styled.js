import styled from 'styled-components';
import { Field, Form } from 'formik';

export const RegisterTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const RegisterHeader = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledField = styled(Field)`
  display: flex;
  padding: 16px 18px;
  align-items: center;
  position: relative;
  width: calc(100% - 38px);
  border-radius: 12px;
  border: 1px solid var(--grey-transp-01);
  color: var(--black);

  &::placeholder {
    color: var(--black-color);
    font-size: 16px;

    font-weight: 400;
    line-height: 1.25;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const SvgStyled = styled.svg`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 25px;
  right: 10px;
  transform: translateY(-50%);
  fill: black;
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const ErrorMsg = styled.div`
  position: absolute;
  font-size: 12px;
  color: red;
`;

export const RegisterButton = styled.button`
  all: unset;
  border-radius: 30px;
  padding: 16px 189px;
  background: var(--green);
  color: var(--white);
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-top: 40px;
`;
