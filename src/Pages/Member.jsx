import React from "react";
import Card from "../components/Card";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";

const Member = () => {
  return (
    <div className="bg-[#F5F4FA]  w-full flex flex-col text-center items-center pb-11">
      {" "}
      <h1 className="text-4xl font-['Roboto'] font-bold tracking-wide mt-20">
        Наша команда
      </h1>
      <div className="flex mx-auto gap-8 my-10">
        <Card
          img={img1}
          title="Игорь Демьяненко"
          designation="Product Designer"
        />
        <Card
          img={img2}
          title="Ольга Репина"
          designation="Frontend Developer"
        />
        <Card img={img3} title="Николай Тарасов" designation="Marketing" />
        <Card img={img4} title="Михаил Ермаков" designation="UI Designer" />
      </div>
    </div>
  );
};

export default Member;
