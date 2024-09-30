// app/components/LayoutApp.js
'use client'; // This component is a client component
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { Provider } from 'react-redux';
import store from '@/store/store';

const LayoutApp = ({ children }) => {
  return (
    <Provider store={store} >
        <Navbar/>
            {children}
        <Footer/>
    </Provider>
  );
};

export default LayoutApp;
