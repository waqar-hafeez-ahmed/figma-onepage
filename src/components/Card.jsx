import React from "react";
const Card = (props) => {
  return (
    <div className="flex flex-col w-[270px] items-center text-center bg-white rounded-[4px] shadow-md hover:scale-105 cursor-pointer transition duration-500 ease-in-out">
      <img src={props.img} alt="" />
      <div className="py-4">
        <p className="font-['Roboto'] font-bold tracking-wide text-[#212121] text-sm uppercase mt-2">
          {props.title}
        </p>
        <p className=" font-['Roboto'] font-normal text-[#757575] my-2">
          {props.designation}
        </p>
      </div>
    </div>
  );
};

export default Card;
