/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from '@/assets/user.png'

const NavBar = () => {
  return (
    <div  className="flex items-center justify-between m-9">
      <nav className="flex items-center justify-center gap-5">
      </nav>

        <ul className="flex items-center gap-4">
          <li>
        
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href='/' > About</Link>
             </li>
             <li>
                <Link href='/'>Carrer</Link>
             </li>
        </ul>
         
         <div>
            <Image src={userAvater} alt="user avatar" />
         </div>

    </div>
  );
};

export default NavBar;
