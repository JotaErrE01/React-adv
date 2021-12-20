import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any; // any other props that are not explicitly defined above
}

export const MyTextInput = ( { label, ...props }: Props ) => {
  
  // const [ field, meta ] = useField(props);
  const [ { onBlur, ...rest } ] = useField(props);
  // const { onBlur,  } = field;
  // console.log(field);
  // console.log(rest);
  // console.log(meta);
  // console.log({props, rest});

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input id={ props.id || props.name } { ...rest } { ...props } />
      <ErrorMessage name={ props.name } component="span" />
      {/* {
        meta.touched && meta.error && 
          <span className="error">{ meta.error }</span>
      } */}
    </>
  )
}
