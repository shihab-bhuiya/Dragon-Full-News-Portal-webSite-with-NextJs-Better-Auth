'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {

    const pathName = usePathname();
    console.log("path",pathName);
    const isActive = (pathName === href);

    return  <Link href={href} className={`${isActive ? " border-2 border-red-700 rounded-xl p-1 " : " "}`}>{children}</Link>;
};

export default NavLink;