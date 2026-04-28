/** @format */
import React from "react";

const newsDetails = async ({params}) => {
  const {id} =  params;
  console.log(id,"Id");
 
  return (
    <div>
      <h1 className="text-center text-4xl mt-5 font-bold">News Details</h1>
    </div>
  );
};

export default newsDetails;
