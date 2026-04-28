/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  console.log(news, "news");
  return (
    <div className="card bg-base-100 w-full shadow-sm container mx-auto space-y-2 p-3">
      <div className="card-body">
        {/* Author Info */}

        <div className="flex items-center justify-between bg-slate-200">
          <div className="flex gap-2 items-center">
            <Image
              src={news?.author?.img}
              alt={news.author.name}
              width={40}
              height={40}
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
      alt={news.title} height={280} width={300} />
      </figure>
      <p className="text-xl truncate">{news.details} </p>
      <div className="flex justify-between items-center"> 
        <div className="text-xl flex items-center gap-1">
       <h2>{news.rating.number} </h2> 
       <h2><IoEyeSharp /> </h2>
       <h2>{news.total_view}</h2>
        </div>

        <Link href={`/news/${news._id}`}>
        <button className="btn">See Deatils</button>
        </Link>

    </div>
      
    </div>
    
  );
};

export default NewsCard;
