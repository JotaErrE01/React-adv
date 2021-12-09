import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css'


interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ( { firstName, lastName, email }: IFormValues ) => {
    const errors: FormikErrors<IFormValues> = {};

    if( !firstName.trim() ) {
      errors.firstName = 'Required';
    }else if( firstName.trim().length > 15 ) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if( !lastName.trim() ) {
      errors.lastName = 'Required';
    }else if( lastName.trim().length > 15 ) {
      errors.lastName = 'Must be 15 characters or less';
    }

    if( !email.trim() ) {
      errors.email = 'Required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const { handleChange, values, handleSubmit, errors, isSubmitting } = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit } >
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={ handleChange } value={ values.firstName } />

        {
          !isSubmitting && errors.firstName && <span className="error">{ errors.firstName }</span>
        }

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onChange={ handleChange } value={ values.lastName } />

        {
          !isSubmitting && errors.lastName && <span className="error">{ errors.lastName }</span>
        }

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" onChange={ handleChange } value={ values.email } />

        {
          !isSubmitting && errors.email && <span className="error">{ errors.email }</span>
        }

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
