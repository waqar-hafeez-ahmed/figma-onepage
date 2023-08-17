import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";

const Categories = () => {
  return (
    <div className="max-w-[1240px] flex flex-col items-center justify-center text-center mx-auto my-20">
      <h1 className="text-4xl font-['Roboto'] font-bold tracking-wide">
        Чем мы занимаемся
      </h1>
      <div className="flex items-center mt-10 gap-10">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
      </div>
    </div>
  );
};

export default Categories;
