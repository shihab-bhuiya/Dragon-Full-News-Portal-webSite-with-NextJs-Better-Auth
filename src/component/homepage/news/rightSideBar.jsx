import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const RightSideBar = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>Login</h1>
            <div className='flex flex-col gap-2'> 
            <button className='btn bg-blue-300 '><FaGoogle />Login With Google</button>
            <button className='btn'><FaGithub/> Login with Github</button>
            
            </div>
        </div>
    );
};

export default RightSideBar;