import LeftSideBar from "@/component/homepage/news/leftSideBar";
import RightSideBar from "@/component/homepage/news/rightSideBar";
import Image from "next/image";


async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data;
}

async function getNewsCategories(category_id){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}


export default async function Home () {
  const categories =await getCategories();

const news = await getNewsCategories("01");
console.log("News",news);

  console.log(categories, "Cater")

  return (
    <div className="max-w-300 container mx-auto grid grid-cols-12 gap-3">

      <div className="font-bold  text-3xl col-span-3">
          <LeftSideBar categories={categories} activeId={"01"}/>
      </div>
      <div className="font-bold border
   border-red-300 p-1 text-3xl col-span-6">
        <h2 className="font-bold text-lg">All News </h2>
        <div className="space-y-3"> 
        {
          news.map(n => {
            return <div key={n._id} className="p-6 border">
              {n.title}
            </div>
          })
        }
        </div>
      </div>
      <div className="font-bold  text-3xl col-span-3">
        <h2 className="font-bold text-lg"> </h2>
       <RightSideBar/>
      </div>
   
    </div>
  );
}
