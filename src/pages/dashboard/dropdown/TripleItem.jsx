import React, { useState } from "react";

export default function Dropdown({
  img1,
  img2,
  img3,
  button1,
  button2,
  button3,
  onClick1,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex flex-col gap-1"
      >
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
      </button>
      {isOpen && (
        <div
          className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[144px] top-[46px] right-[18px] bg-white px-4 py-6 rounded"
          style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
        >
          <button
            className="flex items-center justify-center gap-2"
            onClick={onClick1}
          >
            <img src={img1} alt="eye" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">{button1}</p>
          </button>
          <button className="flex items-center justify-center gap-2">
            <img src={img2} alt="download" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">{button2}</p>
          </button>
          <button className="flex items-center justify-center gap-2">
            <img src={img3} alt="download" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">{button3}</p>
          </button>
        </div>
      )}
    </div>
  );
}
