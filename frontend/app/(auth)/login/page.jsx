'use client';
import AuthPage from "@/components/ui/AuthPage";
import * as Yup from 'yup';
import {  Field, Form, Formik } from 'formik';
import { getStrapiUrl } from "@/utils/strapi";
import InputDark from "@/components/ui/inputs/InputDark";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, userLogin } from "@/store/slices/authSlice";
import ForwordLink from "@/components/buttons/ForwordLink";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth); 
  const validationSchema = Yup.object({
      identifier: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
      .required('Please Enter your password') 
  });

  const onSubmit = async (values) => {
    const resultAction = await dispatch(userLogin(values));

    if (userLogin.fulfilled.match(resultAction)) {
      // If login is successful, redirect to homepage
      router.push('/');
  } else {
      // Handle error (resultAction.payload might contain error message)
      console.log('Login failed:', resultAction.payload);
  }
    
  }
 // Optionally, redirect if already authenticated
 useEffect(() => {
  if (isAuthenticated) {
      router.push('/');
  }
}, [isAuthenticated, router]);
    
        return (
          <div className='auth__page py-5 bg-dark-1 br-b br-t'>
            <div className='container'>
              <div className='row justify-content-lg-between row-gap-4 row-gap-lg-0'>
                <div className='col-lg-4'>
                  <div className='auth__page__left'>
                      <p className='c-wh fw-bold mb-3 hd-xlg text-capitalize'>welcome</p>
                      <p className="h4 fw-normal" >Get in Touch with AI, Access your account by logging in</p>
                  </div>
                </div>
                <div className='col-lg-6'>
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
                </div>
              </div>
            </div>
          </div>
        )

    
    /* if(isAuth == 'fulfilled'){
      return (
        <>
          <div className='auth__page py-5 bg-dark-1 br-b br-t'>
            <div className='container'>
              <div className='row row-gap-4' >
                  <div className="col-12 py-5">
                    <p className="h5 c-wh text-center">You are logged in, Enjoy and Explore Content</p>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/home' content="Home"/>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/resources' content="Resources"/>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/resources' content="Resources"/>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/news' content="News"/>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/podcasts' content="Podcasts"/>
                  </div>
                  <div className="col-3 col-md-2">
                    <ForwordLink href='/resources' content="Ebooks"/>
                  </div>
              </div>
            </div>
          </div>
        </>
      )
    } */
}

