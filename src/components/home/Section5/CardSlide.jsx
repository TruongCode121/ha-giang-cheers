import React from "react";

const CardSlide = ({ item }) => {
  return (
    <div className="w-[99%] relative cursor-pointer group overflow-hidden select-none">
      <img
        src={item.img}
        alt=""
        className="w-full h-[24.9rem] rounded-2xl object-cover"
      />
      <div className="absolute bottom-[1.5rem] w-full px-[1.5rem] group-hover:opacity-0 opacity-100">
        <div className="bg-[#B34B1E]/90 h-[5rem] poppins_font rounded-2xl p-3 text-center  text-white">
          <h4 className="font-semibold mt-1">{item.name}</h4>
          <p className="text-[0.875rem] mt-1 flex justify-center items-center gap-x-2">
            {item.tittle}
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full poppins_font opacity-0 group-hover:opacity-100 group-hover:h-full h-0 bg-black/50 transition-all duration-500 rounded-2xl px-[1.5rem] pt-[0.5rem]">
        <div className="h-[5rem]  p-3 text-center text-white relative border-b-[1px]">
          <h4 className="mt-1 text-[#f4682c] font-bold">{item.name}</h4>
          <p className="text-[0.875rem] mt-1 flex justify-center items-center gap-x-2">
            {item.tittle}
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </p>
        </div>
        <div className="text-[#fff] text-[0.875rem] mt-[1rem]">
          {item.txtContent}
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
