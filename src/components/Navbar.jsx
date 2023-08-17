import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-full flex justify-between items-center max-w-[1330px] mx-auto">
      <div className="flex justify-between w-[500px]">
        <h1 className="text-[26px] text-[#2196F3] font-['Raleway'] font-extrabold tracking-normal cursor-pointer">
          Web<span className="text-black ">Studio</span>
        </h1>

        <nav className="flex items-center">
          <ul className="flex justify-between items-center text-sm font-medium w-full gap-10">
            <li className="cursor-pointer hover:text-[#2196F3] ">Студия</li>
            <li className="cursor-pointer hover:text-[#2196F3] ">Портфолио</li>
            <li className="cursor-pointer hover:text-[#2196F3] ">Контакты</li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end font-medium text-sm gap-10">
        <p className="cursor-pointer hover:text-[#2196F3] ">
          info@devstudio.com
        </p>
        <p className="cursor-pointer hover:text-[#2196F3] ">
          +38 096 111 11 11
        </p>
      </div>
    </div>
  );
};

export default Navbar;
