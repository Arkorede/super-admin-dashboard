import React from "react";
import arrowDown from "./img/arrowDown.png";
import searchNormal from "../../components/shared/img/searchNormal.png";

export default function LoanRequested() {
  return (
    <div className="flex gap-4 mt-16">
      <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 pl-5 w-[200px] h-[43px]">
        <img src={searchNormal} alt="search icon" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search for Name"
          className="outline-none text-xs font-bold"
        />
      </div>
      <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 p-5 w-[278px] h-[43px]">
        <input
          type="text"
          placeholder="Date"
          className="outline-none text-xs font-bold"
        />
        <div className="flex gap-2">
          <p className="text-xs font-bold">Anytime</p>
          <button className="p">
            <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
