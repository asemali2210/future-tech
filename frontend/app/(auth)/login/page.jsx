'use client';
import AuthPage from "@/components/ui/AuthPage";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { getStrapiUrl } from "@/utils/strapi";
export default function login() {


  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    onSubmit: async (values) => {
     
      const res = await fetch(getStrapiUrl('/api/auth/local'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
     
      const { jwt } = await res.json();
    
      localStorage.setItem('token', jwt); 
    },
  });

  return (
    <>
        <AuthPage 
          leftContent="Enter your credentials to get started"
        >
          <div className="auth__login">
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 w-4/12 ">
              <h1 className="font-bold text-3xl mb-6">Login</h1>
              <input
                onChange={handleChange}
                type="email"
                name="identifier"
                label="Email"
                placeholder="Enter your email"
                autoComplete="as"
              />
              <input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                onChange={handleChange}
                autoComplete="as"
              />
              <button type="submit" className="bg-primary rounded-md text-muted">
                Login
              </button>
            </form>
          </div>
        </AuthPage>
    </>
  )
}
