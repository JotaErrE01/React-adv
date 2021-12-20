import { Formik, Form } from 'formik';
import '../styles/styles.css';
import * as yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form submitted');
  // };

  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={yup.object({
          name: yup.string()
                    .required('Name is required')
                    .max(15, 'Name must be less than 15 characters'),
          email: yup.string()
                    .email('Email is invalid')
                     .required('Email is required'),
          password: yup.string()
                        .required('Password is required')
                        .min(6, 'Password must be at least 6 characters'),
          confirmPassword: yup.string()
                              .oneOf([yup.ref('password')], 'Passwords must match')
                              .required('Confirm Password is required')
        })}
        onSubmit={(values) => {
          // alert(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          console.log('Form submitted');
          console.log({ values });
        }}
        onReset={() => {
          console.log('Form reset');
        }}
      >
        <Form>
          <MyTextInput 
            label='Name'
            name='name'
            placeholder='Name'
          />

          <MyTextInput
            label='Email'
            type="email"
            placeholder="Email"
            name="email"
          />

          <MyTextInput
            label='Password'
            type="password"
            placeholder="Password"
            name="password"
          />

          <MyTextInput
            label='Confirm Password'
            type="password"
            placeholder="Repeat Password"
            name="confirmPassword"
          />

          <button type="submit">Create</button>
          <button type="reset" >Reset</button>
        </Form>
      </Formik>
    </div>
  )
}
