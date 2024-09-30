'use client';
import AuthPage from "@/components/ui/AuthPage";
import * as Yup from 'yup';
import {  Field, Form, Formik } from 'formik';
import { getStrapiUrl } from "@/utils/strapi";
import InputDark from "@/components/ui/inputs/InputDark";
import { useRouter } from 'next/navigation';
import {useDispatch } from 'react-redux';
import { authLogout } from "@/store/slices/authSlice";

export default function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
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
  });

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
      dispatch(authLogout(jwt))
      localStorage.setItem('token', jwt);

      router.push('/');

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
              <Formik validationSchema={validationSchema}  initialValues={{ identifier: '', password: '' }}
                onSubmit={onSubmit}
              >
                <Form >
                  <div className="row flex-column row-gap-2">
                    <div className="col-md-8">
                      <Field  
                        label="Email"
                        name="identifier" 
                        type="email" 
                        id='email'
                        placeholder="Enter your Email"
                        component={InputDark}
                      />
                    </div>
                    <div className="col-md-8">
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
