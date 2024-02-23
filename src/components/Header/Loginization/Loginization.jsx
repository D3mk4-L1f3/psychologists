/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Formik } from 'formik';
import sprite from '../../../styles/sprite.svg';
import { loginSchema } from '../../../helpers/validation';
import AccessModal from '../../Shared/AccessModal/AccessModal';

import {
  ErrorMsg,
  FormStyled,
  InputWrapper,
  LoginButton,
  LoginContainer,
  LoginHeader,
  LoginTitleContainer,
  StyledField,
  SvgStyled,
} from './Loginization.styled';

const Loginization = ({ closeModal, setUserData, loginSub }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const togglePasswordVisibility = inputField => {
    if (inputField === 'password') {
      setShowPassword(!showPassword);
    }
  };

  const handleSubmit = values => {
    loginSub(true);
    setUserData(values);
    // closeModal();
  };

  return (
    <AccessModal closeModal={closeModal}>
      <LoginContainer>
        <LoginTitleContainer>
          <LoginHeader>Log In</LoginHeader>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </p>
        </LoginTitleContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <FormStyled>
              <InputWrapper>
                <StyledField name="email" type="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}
              </InputWrapper>
              <InputWrapper>
                <StyledField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <SvgStyled onClick={() => togglePasswordVisibility('password')}>
                  <use
                    href={sprite + `${showPassword ? '#show' : '#hidden'}`}
                  />
                </SvgStyled>
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}
              </InputWrapper>
              <LoginButton type="submit" disabled={isSubmitting}>
                Submit
              </LoginButton>
            </FormStyled>
          )}
        </Formik>
      </LoginContainer>
    </AccessModal>
  );
};

export default Loginization;
