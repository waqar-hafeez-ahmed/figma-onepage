import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2F303A] w-full ">
      <div className="flex flex-col max-w-[1240px] py-10  mx-auto px-10">
        <h1 className="text-[26px] text-[#2196F3] font-['Raleway'] font-extrabold tracking-normal cursor-pointer">
          Web<span className="text-white ">Studio</span>
        </h1>
        <div className="flex flex-col">
          <p className="font-['Roboto'] font-medium text-sm text-white tracking-wide pt-4">
            г. Киев, пр-т Леси Украинки, 26
          </p>
          <p className="font-['Roboto'] font-medium text-sm text-white tracking-wide opacity-60 pt-2">
            info@example.com
          </p>
          <p className="font-['Roboto'] font-medium text-sm text-white tracking-wide opacity-60 pt-2">
            +38 099 111 11 11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
