import React from "react";
import ellipseWalletTop from "./img/ellipseWalletTop.png";
import ellipseWalletRight from "./img/ellipseWalletRight.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";

export default function () {
  return (
    <div className="p">
      <div className="relative wallet bg-[#8003CD] h-[210px] rounded-lg mt-[59px]">
        <p className="text-white pt-[71px] pl-[40px] text-sm font-bold">
          Wallet Balance
        </p>
        <p className="mt-[6px] pl-[40px] text-white text-[34px] font-weight">
          ₦ 430,434,684.54
        </p>
        <div
          className=""
          style={{
            position: "absolute",
            width: "252px",
            height: "54px",
            top: "0px",
            right: "151px",
          }}
        >
          <img src={ellipseWalletTop} alt="ellipse" />
        </div>
        <div className="absolute w-[147px] h-[53px] top-[53px] left-[890px]">
          <img
            src={ellipseWalletRight}
            alt="ellipse"
            className="rounded-br-lg"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        {/* w-[10px] h-[10px] */}
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 pl-5 w-[200px] h-[43px]">
          <img src={searchNormal} alt="search icon" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search for Name"
            className="outline-none text-xs font-bold"
          />
        </div>
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 p-5 w-[242px] h-[43px]">
          <input
            type="text"
            placeholder="Permissions"
            className="outline-none text-xs font-bold"
          />
          <div className="flex gap-2">
            <p className="text-xs font-bold">All</p>
            <button className="p">
              <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
            </button>
          </div>
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
    </div>
  );
}
