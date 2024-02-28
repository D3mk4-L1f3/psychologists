/* eslint-disable react/prop-types */
import { useState } from 'react';
import AccessModal from '../../Shared/AccessModal/AccessModal';
import sprite from '../../../styles/sprite.svg';
import { Formik } from 'formik';
import { registerSchema } from '../../../helpers/validation';

import {
  ErrorMsg,
  FormStyled,
  InputWrapper,
  RegisterButton,
  RegisterContainer,
  RegisterHeader,
  RegisterTitleContainer,
  StyledField,
  SvgStyled,
} from './Registration.styled';

const Registration = ({ closeModal, setUserData, registerSub }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const togglePasswordVisibility = inputField => {
    if (inputField === 'password') {
      setShowPassword(!showPassword);
    }
  };

  const handleSubmit = values => {
    registerSub(true);
    setUserData(values);
    // closeModal();
  };
  return (
    <AccessModal closeModal={closeModal}>
      <RegisterContainer>
        <RegisterTitleContainer>
          <RegisterHeader>Registration</RegisterHeader>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </p>
        </RegisterTitleContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <FormStyled>
              <InputWrapper>
                <StyledField type="text" name="name" placeholder="Name" />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}
              </InputWrapper>
              <InputWrapper>
                <StyledField type="email" name="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}
              </InputWrapper>
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
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

              <RegisterButton type="submit" disabled={isSubmitting}>
                Sign Up
              </RegisterButton>
            </FormStyled>
          )}
        </Formik>
      </RegisterContainer>
    </AccessModal>
  );
};

export default Registration;
