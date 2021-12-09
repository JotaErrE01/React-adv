import { Formik, Form } from 'formik';
import * as yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MyCheckBox, MySelect } from '../components/';

export const FormikAbstractation = () => {
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

          <MyTextInput label="First Name" name="firstName" />
          <MyTextInput label="Last Name" name="lastName" />
          <MyTextInput label="Email Address" name="email" />

          <MySelect label="Job Type" name="jobType" >
            <option disabled value="">--Select--</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">IT Senior</option>
            <option value="it-junior">IT Junior</option>
          </MySelect>

          <MyCheckBox label="Terms & Conditions" name="terms" />

          <input type="submit" value="Submit" />
        </Form>
      </Formik>

    </div>
  )
}
