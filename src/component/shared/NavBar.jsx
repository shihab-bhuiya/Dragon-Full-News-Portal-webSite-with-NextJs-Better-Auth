'use client'
import Image from "next/image";
import Link from "next/link";
import userAvater from '@/assets/user.png'
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const NavBar =  () => {
  // const {data: session} = authClient.useSession()
  // const user = session.user;


  const { data: session, isPending } = authClient.useSession();

const user = session ? session.user : null;
  console.log(user);
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
         
      { isPending ? <span className="loading loading-infinity loading-lg"></span> : user ?  ( <div className="flex items-center gap-3">
          <h2>Hello, {user?.name}</h2> 
            <Image src={ userAvater} height={80} width={45}  alt="user avatar"  className="rounded-full" />
          <button className="btn bg-purple-500 text-white" onClick={async()=> await authClient.signOut()}>
            <NavLink href={'/login'} >Log Out</NavLink>
          </button>
         </div>) :
         <div>
            <button className="btn bg-purple-500 text-white">
               <NavLink href={'/login'}>Login</NavLink>
            </button>
         </div>
}
    </div>
  );
};

export default NavBar;
