import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as yup from 'yup';

const initialValues: { [key: string]: any } = {}
const requierdFields: { [key: string]: any } = {}

for (const field of formJson) {
  initialValues[field.name] = field.value;

  if(!field.validations?.length) continue;

  let schema = yup.string();
  
  for (const rule of field.validations) {
    if(rule.type === 'required') {
      schema = schema.required(rule.message);
    }

    if(rule.type === 'minLength') {
      schema = schema.min((rule.value as number), rule.message);
    }

    if(rule.type === 'email') {
      schema = schema.email( rule.message );
    }
    // ... otras reglas
  }

  requierdFields[field.name] = schema;
}

const validationSchema = yup.object({ ...requierdFields });


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>      

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ values => {
          console.log(values);
        } }
      >
        <Form>
          {
            formJson.map( ({ type, name, options, label, placeholder }) => (
              type === 'email' || type === 'password' || type === 'text' ? 
                <MyTextInput 
                  key={name} 
                  name={name} 
                  type={(type as any)}
                  label={label}
                  placeholder={placeholder}
                />
              :
              type === 'select' ?
                <MySelect
                  key={name}
                  label={label}
                  name={name}
                >
                  <option disabled value="">--Select--</option>
                  {
                    options?.map(({ id, name }) => (
                      <option key={id} value={id}>{name}</option>
                    ))
                  }
                </MySelect>
              : 
                null
            ))
          }

          <button
            type="submit"
          >Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
