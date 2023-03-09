import React, { useState } from "react";

import FundModal from "./FundModal";
import ellipseWalletTop from "./img/ellipseWalletTop.png";
import ellipseWalletRight from "./img/ellipseWalletRight.png";
import add from "./img/add.png";

export default function Wallet() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };
  return (
    <div className="p">
      <div className="w-full">
        <div className="p-5 mt-6">
          <div className="font-bold text-[34px] mb-4">Wallet</div>
          <div className="relative wallet bg-[#8003CD] h-[210px] rounded-lg">
            <p className="text-white pt-[35px] pl-[40px] text-sm font-bold">
              Wallet Balance
            </p>
            <p className="mt-[6px] pl-[40px] text-white text-[34px] font-weight">
              ₦ 430,434,684.54
            </p>
            <button
              className="bg-white flex gap-2 py-2 px-2.5 items-center justify-center rounded ml-[40px] inline-block mt-[32px]"
              onClick={clicked}
            >
              <img src={add} alt="add icon" className="w-4 h-4" />
              <p className="font-bold text-[0.625rem]">FundWallet</p>
            </button>
            {modalOn && (
              <FundModal setModalOn={setModalOn} setChoice={setChoice} />
            )}
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

          {/* WALLET ACTIVITIES */}
          <div className="mt-10">
            <div className="text-lg font-bold">Recent Wallet Activities</div>
            <div className="mt-5 h-[474px] border border-solid border-[#E5EAEF] rounded">
              <div className="flex p-6 border-b border-solid border-[#E5EAEF]">
                <div className="flex gap-[3.875rem]">
                  <p className="font-medium text-sm text-[#8A8B9F] leading-[19px]">
                    All Activities
                  </p>
                  <p className="font-medium text-sm text-[#8A8B9F] leading-[19px]">
                    Wallet Top Up
                  </p>
                  <p className="font-medium text-sm text-[#8A8B9F] leading-[19px]">
                    Loan Disbursed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
