import { ErrorMessage, useField } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
        style={{backgroundColor:'#D9D9D9',borderRadius:'0',width:'45%',height:'54px',marginBottom:'5px'}}
      />
      <div style={{backgroundColor:'#FFDBDB',color:'red',borderLeft:'4px solid red',width:'45%',textAlign:'center'}}><div style={{paddingLeft:'10px'}}><ErrorMessage component="div" name={field.name} className="error" /></div></div>
    </div>
  );
};
export default TextField;
