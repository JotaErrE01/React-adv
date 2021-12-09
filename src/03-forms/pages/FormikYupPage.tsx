import { useFormik } from 'formik';
import { FocusEvent } from 'react';
import * as yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

  interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
  }

  const { handleSubmit, errors, isSubmitting, getFieldProps } = useFormik<IFormValues>({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstName: yup.string().required().max(15, 'Must be 15 characters or less'),
      lastName: yup.string().required().max(15, 'Must be 15 characters or less'),
      email: yup.string().required().email('Invalid email address'),
    })
  });
  
  // prevent the focus event on the input field
  const handleBlur = (e: FocusEvent<HTMLInputElement, Element> ) => e.preventDefault();
  

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit } >
        <label htmlFor="firstName">First Name</label>
        <input type="text" { ...getFieldProps<IFormValues>('firstName') } onBlur={ handleBlur } />

        {
          !isSubmitting && errors.firstName && <span className="error">{ errors.firstName }</span>
        }

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps<IFormValues>('lastName')} onBlur={ handleBlur } />

        {
          !isSubmitting && errors.lastName && <span className="error">{ errors.lastName }</span>
        }

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps<IFormValues>('email')} onBlur={ handleBlur } />

        {
          !isSubmitting && errors.email && <span className="error">{ errors.email }</span>
        }

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
