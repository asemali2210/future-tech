import '@/styles/components/UI/input-Dark.scss';
import React from 'react';

export default function InputDark({field, form,label,...props}) {

  return (
    <div className='input__dark__container d-flex flex-column row-gap-2 mb-2'>
       {label && <label className="input__dark_label" htmlFor={props.id || props.name}>{label}</label>}
       <input 
        {...field} 
        {...props}
        className="input__dark"
        autoComplete={field.name}
       />
       {form.touched[field.name] && form.errors[field.name] ? (
        <div className="error__message">{form.errors[field.name]}</div>
      ) : null}
    </div>
  )
};