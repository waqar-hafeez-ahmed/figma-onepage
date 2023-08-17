import React from "react";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <div className="h-[600px] bg-[#2F303A] flex flex-col justify-center text-center items-center gap-9">
      <h1 className=" font-['Roboto'] font-black text-5xl text-white tracking-wider leading-[60px] uppercase  w-[700px] ">
        Эффективные решения для вашего бизнеса
      </h1>
      <Button />
    </div>
  );
};

export default HeroSection;
