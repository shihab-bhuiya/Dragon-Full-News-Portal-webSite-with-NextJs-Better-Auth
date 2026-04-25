/** @format */
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  { id: 1, title: "Breaking News: Global Markets React to Sudden Oil Price Surge." },
  { id: 2, title: "Breaking News: Major Tech Company Announces New AI Breakthrough." },
  { id: 3, title: "Breaking News: Severe Weather Alert Issued Across Multiple Regions." },
  { id: 4, title: "Breaking News: International Leaders Meet for Emergency Summit." },
  { id: 5, title: "Breaking News: Breakthrough in Renewable Energy Technology Revealed." }
];



const BreakingNews = () => {
  return (
    <div className="flex items-center gap-4 py-5  px-3 container mx-auto bg-gray-100">
        <button className="btn bg-red-400 text-white">Latest</button>
      <Marquee pauseOnHover={true}>
       {
        news.map((n) => {
            return <span key={n.id} className="mr-5">{n.title}</span>
        })
       }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
