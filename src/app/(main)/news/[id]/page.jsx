/** @format */
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const newsDetails = async ({params}) => {
  const {id} = await params;
  console.log(id,"Id");
  const newess = await getNewsDetailsById(id);
  const news = newess;
  console.log("News" ,news);
 
  return (
    // <div className="container mx-auto border p-3">
    //   <h1 className="text-center text-4xl mt-5 font-bold">News Details</h1>
    //   <h1 className="font-bold text-2xl">Dragon News</h1>

    //   {/* Card Body */}
    //     <div className="">
    //         <div>
    //           <Image src={news?.author?.img} alt={news?.author?.name} height={300} width={280} />
    //         </div>
    //     </div>
    // </div>

     <div className="card bg-base-100 max-w-260 shadow-sm container mx-auto space-y-2 p-3">
          <div className="card-body">
            {/* Author Info */}
    
            <div className="flex items-center justify-between bg-slate-200">
              <div className="flex gap-2 items-center">
                <Image
                  src={news?.author?.img}
                  alt={news.author.name}
                  width={90}
                  height={70}
                  className="rounded-full"
                />
                <div>
                <h2>{news?.author?.name}</h2>
                <p>{news?.author?.published_date}</p>
    
                </div>
              </div>
                <div className="flex  items-center gap-1.5">
                 <IoMdShare/>    
                 <FaBookmark/>   
                </div>
    
    
              <div></div>
            </div>
    
            <h2 className="card-title">{news.title}</h2>
            <p>
              A card component has a figure, a body part, and inside body there are
              title and actions parts
            </p>
          </div>
          <figure>
            <Image
          src={news.image_url}
          alt={news.title} height={480} width={350} />
          </figure>
          <p className="text-xl ">{news.details} </p>
          <div className="flex justify-between items-center"> 
            <div className="text-xl flex items-center gap-1">
           <h2>{news.rating.number} </h2> 
           <h2><IoEyeSharp /> </h2>
           <h2>{news.total_view}</h2>
            </div>
    
            <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-purple-500 text-white">Back TO Category Page</button>
            </Link>
    
        </div>
        </div>
  );
};

export default newsDetails;
