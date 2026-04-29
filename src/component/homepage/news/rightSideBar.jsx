'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {


    const handleSignInGoogle = async () => {
        const data = await authClient.signIn.social({
    provider: "google",
    });
    }
    
const handlesignInGitHub = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>Login</h1>
            <div className='flex flex-col gap-2'> 
            <button className="btn bg-blue-300" onClick={handleSignInGoogle}><FaGoogle />Login With Google</button>
            <button className='btn' onClick={handlesignInGitHub}><FaGithub/> Login with Github</button>
            
            </div>
        </div>
    );
};

export default RightSideBar;