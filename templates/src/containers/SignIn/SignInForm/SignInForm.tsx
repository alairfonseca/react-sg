import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schema } from './formStructure';
import { SignInFunction } from '../types';

type Props = {
  signIn: SignInFunction;
}

const SignInForm: FC<Props> = props => {
  const { signIn } = props;

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => signIn(values.email.trim(), values.password)}
      validateOnChange={false}
    >
      <Form>
        <Field type="text" name="email" placeholder="email" />
        <ErrorMessage name="email" />

        <Field type="text" name="senha" placeholder="senha" />
        <ErrorMessage name="senha" />

        <button type="submit">Entrar</button>
      </Form>
    </Formik>
  );
}

export default SignInForm;