import Header from '@/component/shared/Header';
import NavBar from '@/component/shared/NavBar';
import React from 'react';

const authLayout = ({children}) => {
    return (

        <div>
     
        <NavBar/>
        {children}
        </div>
    );
};

export default authLayout;