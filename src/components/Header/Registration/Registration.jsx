/* eslint-disable react/prop-types */
import { useState } from 'react';
import AccessModal from '../../Shared/AccessModal/AccessModal';
import sprite from '../../../styles/sprite.svg';

import {
  ErrorMsg,
  FormStyled,
  InputWrapper,
  RegisterButton,
  RegisterHeader,
  RegisterTitleContainer,
  StyledField,
  SvgStyled,
} from './Registration.styled';
import { ErrorMessage, Formik } from 'formik';
import { validateRegisterSchema } from '../../../helpers/validation';

const Registration = ({ closeModal }) => {
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

  const handleSubmit = () => {
    console.log('click');
    closeModal();
  };
  return (
    <AccessModal closeModal={closeModal}>
      <RegisterTitleContainer>
        <RegisterHeader>Registration</RegisterHeader>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </RegisterTitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validateRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <FormStyled>
            <label>
              <InputWrapper>
                <StyledField
                  type="text"
                  name="name"
                  placeholder="Name"
                  $hasError={touched.name && errors.name}
                  value={values.name}
                  required
                />
                <ErrorMessage name="name" component={ErrorMsg} />
              </InputWrapper>
            </label>
            <label>
              <StyledField
                type="email"
                name="email"
                placeholder="Email"
                $hasError={touched.email && errors.email}
                value={values.email}
                required
              />
              <ErrorMessage name="email" component={ErrorMsg} />
            </label>
            <label>
              <InputWrapper>
                <StyledField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  $hasError={touched.password && errors.password}
                  value={values.password}
                  required
                />
                <SvgStyled onClick={() => togglePasswordVisibility('password')}>
                  <use
                    href={sprite + `${showPassword ? '#show' : '#hidden'}`}
                  />
                </SvgStyled>

                <ErrorMessage name="password" component={ErrorMsg} />
              </InputWrapper>
            </label>

            {/* <Button type="submit" disabled={isSubmitting}>
                Log In
              </Button> */}
            <RegisterButton type="submit">Sign Up</RegisterButton>
          </FormStyled>
        )}
      </Formik>
    </AccessModal>
  );
};

export default Registration;
