import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStrapiUrl } from '@/utils/strapi';
import { authLogin, checkAuth } from '@/store/slices/authSlice';
function UserAuth({children}) {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(checkAuth());
    }, []);

  return (
    <>
        {children}
    </>
  )
}

export default UserAuth