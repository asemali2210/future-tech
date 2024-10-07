import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStrapiUrl } from '@/utils/strapi';
import { authLogin } from '@/store/slices/authSlice';
function UserAuth({children}) {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            const fetchUser = async () => {
            const res = await fetch(getStrapiUrl('/api/users/me'), {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            const userData = await res.json();
            console.log(userData)
            // Dispatch to update Redux store with token and user info
            dispatch(authLogin({ token, user: userData }));
            }; 
            fetchUser();
        }
    }, [isAuthenticated]);

  return (
    <>{children}</>
  )
}

export default UserAuth