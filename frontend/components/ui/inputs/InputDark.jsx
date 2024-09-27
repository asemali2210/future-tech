import '@/styles/components/UI/input-Dark.scss';

export default function InputDark({field, form,type,label,...props}) {

  return (
    <div className='input__dark__container'>
       {label && <label className="custom-input-label" htmlFor={props.id || props.name}>{label}</label>}
       <input 
        className='input__dark'
        {...field} 
        {...form}
        {...props}
       />
       {form.touched[field.name] && form.errors[field.name] ? (
        <div className="error__message">{form.errors[field.name]}</div>
      ) : null}
    </div>
  )
};