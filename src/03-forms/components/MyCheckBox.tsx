import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any; // any other props that are not explicitly defined above
}

export const MyCheckBox = ( { label, ...props }: Props ) => {
  
  // const [ field, meta ] = useField({ ...props, type: "checkbox" });
  const [ { onBlur, ...rest } ] = useField({ ...props, type: "checkbox" });
  // const { onBlur,  } = field;
  // console.log(field);
  // console.log(rest);
  // console.log(meta);
  // console.log({props, rest});

  return (
    <>
      <label>
        { label }
        <input { ...rest } { ...props } type="checkbox" />
      </label>
      <ErrorMessage name={ props.name } component="span" />
      {/* {
        meta.touched && meta.error && 
          <span className="error">{ meta.error }</span>
      } */}
    </>
  )
}
