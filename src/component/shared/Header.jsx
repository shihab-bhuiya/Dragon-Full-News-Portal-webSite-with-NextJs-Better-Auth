import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import {format } from "date-fns";
const Header = () => {
    return (
        <div className='text-center space-y-8'>
          <Image src={logo} height={300} width={350} alt='logo' className='mx-auto'/>
            <p className=''>Journalism Without Fear or Favour</p>
            <h2>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h2>
        </div>
    );
};

export default Header;