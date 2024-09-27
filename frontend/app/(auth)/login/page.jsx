'use client';
import AuthPage from "@/components/ui/AuthPage";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { getStrapiUrl } from "@/utils/strapi";
import InputDark from "@/components/ui/inputs/InputDark";
export default function login() {

const initialValues = {
  email: '',
  password: '',
  username: '',
}

  const validationSchema = Yup.object({

      identifier: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
      .required('Password is required.') 
      .min(8, 'Password must be at least 8 characters long.')
      .matches(/[A-Z]/, 'Password must include at least one uppercase letter.') 
      .matches(/[a-z]/, 'Password must include at least one lowercase letter.') 
      .matches(/[0-9]/, 'Password must include at least one number.') 
      .matches(/[!@#$%^&*]/, 'Password must include at least one special character.') 
      .notOneOf(['12345678', 'password', 'qwerty', 'letmein'], 'That password is too common. Try something more secure.'), 

  })
  const onSubmit = async (values) => {

    try {
      const res = await fetch(getStrapiUrl('/api/auth/local'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
     
      const { jwt } = await res.json();
    
      localStorage.setItem('token', jwt);

    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <>
        <AuthPage 
          leftContent="Enter your credentials to get started"
        >
          <div className="auth__login">
              <Formik validationSchema={validationSchema} initialValues={initialValues}
                onSubmit={onSubmit}
              >
              {({ errors }) => (
                <Form  className="d-flex flex-column row-gap-2 align-items-start ">
                     <Field  
                       label="Email"
                       name="identifier" 
                       type="email" 
                       id='email'
                       placeholder="Enter your Email"
                       component={InputDark}
                     />
                 
                  <Field 
                    type="password" 
                    name="password" 
                    id="password" 
                    label="password"
                    placeholder="password"
                    component={InputDark}
                  />

                  <button type="submit" className="submit__btn mt-3 py-2 px-5">Submit</button>
                </Form>
              )}
              </Formik>
          </div>
        </AuthPage>
    </>
  )
}
