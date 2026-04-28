import NavLink from '@/component/shared/NavLink';
import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories,activeId}) => {
  console.log(categories,"categories");
  const newsCategory = categories?.data?.news_category || categories?.news_category;
    return (
        <div>
             <h2 className="font-bold text-lg"> All Category </h2>
             <ul  className="mt-5 flex flex-col gap-4 p-2">
        { 
          newsCategory.map((category)=> {
            return <li key={category.category_id} className={`${String(activeId) === String(category.category_id) ? "bg-red-400" :" "  }p-2 text-center rounded-md text-lg`}> 
               <NavLink href={`/category/${category.category_id}`}> {category.category_name}
               </NavLink>
               </li>
          
          }) 
        }
        </ul>
        </div>
    );
};

export default LeftSideBar;