// app/components/LayoutApp.js
'use client'; // This component is a client component
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { Provider } from 'react-redux';
import store from '@/store/store';
import UserAuth from './UserAuth';




const LayoutApp = ({ children }) => {
  
  return (
    <Provider store={store} >
      <UserAuth>
        <Navbar/>
            {children}
        <Footer/>
      </UserAuth>
    </Provider>
  );
};

export default LayoutApp;
