import * as Yup from 'yup';

export const validateLoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});

export const validateRegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .required(),
});
