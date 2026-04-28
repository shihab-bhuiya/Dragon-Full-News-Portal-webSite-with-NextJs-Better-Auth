'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {

    const pathName = usePathname();
    console.log("path",pathName);
    const isActive = (pathName === href);

    return  <Link href={href} className={`${isActive ? "border-b-red-700  border " : " "}`}>{children}</Link>;
};

export default NavLink;