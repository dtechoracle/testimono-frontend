import React from "react";

const StrategyCard = ({ icon, title, description }: any) => {
  return (
    <div className="bg-white p-4  border hover:shadow-lg hover:shadow-blue-300  cursor-pointer hover:border-[#B6BCCD] rounded-lg  ">
      <div className="flex gap-2 items-center ">
        {/* Placeholder for icon */}
        {icon}
        <h3 className="text-base text-[#1C1F25] font-bold ">{title}</h3>
      </div>
      <p className="text-[#4B5162] text-sm mt-2">{description}</p>
    </div>
  );
};

export default StrategyCard;
