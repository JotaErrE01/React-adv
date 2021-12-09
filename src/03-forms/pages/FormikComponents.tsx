import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FocusEvent } from 'react';
import * as yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  // prevent the focus event on the input field
  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => e.preventDefault();


  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);

        }}
        validationSchema={yup.object({
          firstName: yup.string().required().max(15, 'Must be 15 characters or less'),
          lastName: yup.string().required().max(15, 'Must be 15 characters or less'),
          email: yup.string().required().email('Invalid email address'),
          terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
          jobType: yup.string().required('Required'),
        })}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" onBlur={handleBlur}/>
          <ErrorMessage name="firstName" component="span" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" onBlur={handleBlur} />
          <ErrorMessage name="lastName" component="span" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="text" onBlur={handleBlur} />
          <ErrorMessage name="email" component="span" />

          <label htmlFor="jobType">Job Type</label>
          <Field name="jobType" as="select" onBlur={handleBlur} >
            <option disabled value="">--Select--</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">IT Senior</option>
            <option value="it-junior">IT Junior</option>
          </Field>
          <ErrorMessage name="jobType" component="span" />

          <label htmlFor="terms">Terms and conditions</label>
          <Field id="terms" name="terms" type="checkBox" onBlur={handleBlur} />
          <ErrorMessage name="terms" component="span" />

          <input type="submit" value="Submit" />
        </Form>
      </Formik>

    </div>
  )
}
