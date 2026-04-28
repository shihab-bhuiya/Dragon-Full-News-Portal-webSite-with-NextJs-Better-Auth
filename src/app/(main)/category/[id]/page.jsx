// import { redirect } from "next/navigation";
import LeftSideBar from '@/component/homepage/news/leftSideBar';
import RightSideBar from '@/component/homepage/news/rightSideBar';
import React from 'react';
import { getCategories, getNewsCategories } from "@/lib/data";
import NewsCard from '@/component/homepage/news/NewsCard';



const NewsCategoryPage =async ({params}) => {
    const {id} =await params;

    const categories = await getCategories();

const news = await getNewsCategories (id);

    console.log("id",id);
    return (
        <div  className="max-w-300 container mx-auto grid grid-cols-12 gap-3">
            <div className="font-bold  text-3xl col-span-3">
          <LeftSideBar categories={categories} activeId={id}/>
      </div>
      <div className=" border
   border-red-300 p-1 text-3xl col-span-6">
        <h2 className="font-bold text-lg">All News </h2>
        <div className="space-y-3"> 
        {
         news.length > 0 ? news.map((n) => {
            return <NewsCard key={n._id} news={n}>
              
            </NewsCard>
          })
       :<h2 className="text-2xl font-bold text-center">
  <span className="text-gray-500">Oops!</span>{" "}
  <span className="text-blue-500">Data not found</span>
</h2> } 
        </div>
      </div>
      <div className="font-bold  text-3xl col-span-3">
        <h2 className="font-bold text-lg"> </h2>
       <RightSideBar/>
      </div>
        </div>
    );
};



// const NewsCategoryPage = async () => {
//     redirect(`/category/01`);
// }

export default NewsCategoryPage;