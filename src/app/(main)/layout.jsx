import BreakingNews from '@/component/shared/BreakingNews';
import Header from '@/component/shared/Header';
import NavBar from '@/component/shared/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <BreakingNews/>
            <NavBar/>
            {children}
        </>
    );
};

export default MainLayout;