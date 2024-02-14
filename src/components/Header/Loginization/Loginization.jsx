/* eslint-disable react/prop-types */
import { ErrorMessage, Formik } from 'formik';
import sprite from '../../../styles/sprite.svg';

import AccessModal from '../../Shared/AccessModal/AccessModal';
import {
  ErrorMsg,
  FormStyled,
  InputWrapper,
  LoginButton,
  LoginHeader,
  LoginTitleContainer,
  StyledField,
  SvgStyled,
} from './Loginization.styled';
import { useState } from 'react';
import { validateLoginSchema } from '../../../helpers/validation';

const Loginization = ({ closeModal }) => {
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

  const handleSubmit = () => {
    closeModal();
  };
  // const handleSubmit = async values => {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, values.email, values.password)
  //     .then(console.log('login'))
  //     .catch(console.error);
  //   onClose();
  // };

  return (
    <AccessModal closeModal={closeModal}>
      <LoginTitleContainer>
        <LoginHeader>Log In</LoginHeader>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </LoginTitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validateLoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <FormStyled>
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
            <LoginButton>Sign Up</LoginButton>
          </FormStyled>
        )}
      </Formik>
    </AccessModal>
  );
};

export default Loginization;
