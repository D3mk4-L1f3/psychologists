import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Min length 6')
    .max(12, 'Max length 12')
    .required('Required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .min(6, 'Min length 6')
    .max(12, 'Max length 12')
    .required('Required'),
});
