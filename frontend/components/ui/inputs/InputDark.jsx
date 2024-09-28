import '@/styles/components/UI/input-Dark.scss';

export default function InputDark({field, form,type,label,...props}) {

  return (
    <div className='input__dark__container d-flex flex-column row-gap-2'>
       {label && <label className="input__dark_label mb-1" htmlFor={props.id || props.name}>{label}</label>}
       <input 
        {...field} 
        {...form}
        {...props}
        className='input__dark'
       />
       {form.touched[field.name] && form.errors[field.name] ? (
        <div className="error__message">{form.errors[field.name]}</div>
      ) : null}
    </div>
  )
};