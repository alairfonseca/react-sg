import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Email inválido')
    .required('Informe o email'),
  senha: Yup.string()
    .required('Informe a senha'),
});
