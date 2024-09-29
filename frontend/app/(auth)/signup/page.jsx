'use client';
import AuthPage from "@/components/ui/AuthPage";
import * as Yup from 'yup';
import {  Field, Form, Formik } from 'formik';
import { getStrapiUrl } from "@/utils/strapi";
import InputDark from "@/components/ui/inputs/InputDark";
export default function login() {

  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: ''
  }

  const validationSchema = Yup.object({
      firstName: Yup.string().min(3, 'firstName must be at least 3 characters long.').max(20, 'firstName must be at least 20 characters long.'),
      lastName: Yup.string().min(3, 'lastName must be at least 3 characters long.').max(20, 'lastName must be at least 20 characters long.'),
      username: Yup.string().min(3, 'username must be at least 3 characters long.').max(20, 'username must be at least 20 characters long.'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
      .required('Password is required.') 
      .min(8, 'Password must be at least 8 characters long.')
      .matches(/[A-Z]/, 'Password must include at least one uppercase letter.') 
      .matches(/[a-z]/, 'Password must include at least one lowercase letter.') 
      .matches(/[0-9]/, 'Password must include at least one number.') 
      .matches(/[!@#$%^&*]/, 'Password must include at least one special character.') 
      .notOneOf(['12345678', 'password', 'qwerty', 'letmein'], 'That password is too common. Try something more secure.'), 
  });

  const onSubmit = async (values) => {
    console.log(values)
    try {
      const res = await fetch(getStrapiUrl('/api/auth/local/register'), {
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
          leftContent="Get in Touch with AI, Access your account by logging in"
        >
          <div className="auth__login">
              <Formik validationSchema={validationSchema}  initialValues={initialValues}
                onSubmit={onSubmit}
              >
                <Form >
                  <div className="row  flex-md-row flex-column row-gap-2">
                    <div className="col-md-6">
                      <Field  
                        label="First Name"
                        name="firstName" 
                        type="text" 
                        id='firstName'
                        placeholder="Enter your First Name"
                        component={InputDark}
                      />
                    </div>
                    <div className="col-md-6">
                      <Field  
                        label="Last Name"
                        name="lastName" 
                        type="text" 
                        id='lastName'
                        placeholder="Enter your Last Name"
                        component={InputDark}
                      />
                    </div>
                    <div className="col-md-6">
                      <Field  
                        label="Username"
                        name="username" 
                        type="text" 
                        id='username'
                        placeholder="Enter your Username"
                        component={InputDark}
                      />
                    </div>
                    <div className="col-md-6">
                      <Field  
                        label="Email"
                        name="email" 
                        type="email" 
                        id='email'
                        placeholder="Enter your Email"
                        component={InputDark}
                      />
                    </div>
                    <div className="col-md-7">
                    <Field 
                      id="password"
                      type="password" 
                      name="password" 
                      label="Password"
                      placeholder="password"
                      component={InputDark}
                    />
                    </div>
                  </div>
                  <button type="submit" className="submit__btn mt-2 py-2 px-5">Submit</button>
                </Form>
              </Formik>
          </div>
        </AuthPage>
    </>
  )
}
