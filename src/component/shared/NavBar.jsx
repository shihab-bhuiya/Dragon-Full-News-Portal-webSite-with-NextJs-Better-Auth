/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from '@/assets/user.png'
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <div  className="flex items-center justify-between m-9 container mx-auto">
      <nav className="flex items-center justify-center gap-5">
      </nav>

        <ul className="flex items-center gap-4 text-gray-700">
          <li>
        
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/about'} > About</NavLink>
             </li>
             <li>
                <NavLink href={'/carrer'}>Carrer</NavLink>
             </li>
        </ul>
         
         <div className="flex items-center gap-3">
            <Image src={userAvater} alt="user avatar" />
            <button className="btn bg-purple-300 text-white">
               <NavLink href={'/login'}>Login</NavLink>
            </button>
         </div>

    </div>
  );
};

export default NavBar;
