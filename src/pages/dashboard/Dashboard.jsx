import React, { useState } from "react";

import FundModal from "./FundModal";
import ellipseWalletTop from "./img/ellipseWalletTop.png";
import ellipseWalletRight from "./img/ellipseWalletRight.png";
import add from "./img/add.png";
import user from "./img/user.png";
import activity from "./img/activity.png";
import naira from "./img/naira.png";
import arrowUp from "./img/arrowUp.png";
import "./Dashboard.css";

function Dashboard() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="flex">
      {/* DASHBOARD */}
      <div className="w-full">
        <div className="p-5 mt-6">
          <div className="font-bold text-[34px] mb-4">Dashboard</div>
          {/* WALLET */}
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

          {/* LOAN VALUES */}
          <div className="grid grid-cols-3 gap-5">
            <div className="relative rounded-lg px-[24px] py-[26px] border border-[#E5EAEF] mt-6">
              <div className="mt-0.5 bg-[#F7EBFF] w-[33px] h-[33px] flex items-center justify-center rounded-full">
                <img src={user} alt="user icon" className="w-4 h-4" />
              </div>
              <p className="text-[#A1A6B0] text-[0.625rem] mt-6">
                Total Loan Approved
              </p>
              <p className="text-3xl font-bold">200,000</p>
              <div className="absolute flex items-center justify-center px-2 py-1 rounded-full top-[123px] left-[254px] gap-2.5 bg-[#EDFCF1]">
                <img src={arrowUp} alt="arrow-up icon" className="w-2 h-2" />
                <p className="text-[0.5rem] font-bold text-[#42BE65]">5, 18%</p>
              </div>
            </div>

            <div className="relative rounded-lg px-[24px] py-[26px] border border-[#E5EAEF] mt-6">
              <div className="mt-0.5 bg-[#F7EBFF] w-[33px] h-[33px] flex items-center justify-center rounded-full">
                <img src={activity} alt="user icon" className="w-4 h-4" />
              </div>
              <p className="text-[#A1A6B0] text-[0.625rem] mt-6">
                Total Loan Overdue
              </p>
              <p className="text-3xl font-bold">172</p>

              <div className="absolute flex items-center justify-center px-2 py-1 rounded-full top-[123px] left-[254px] gap-2.5 bg-[#EDFCF1]">
                <img src={arrowUp} alt="arrow-up icon" className="w-2 h-2" />
                <p className="text-[0.5rem] font-bold text-[#42BE65]">5, 18%</p>
              </div>
            </div>

            <div className="relative rounded-lg px-[24px] py-[26px] border border-[#E5EAEF] mt-6">
              <div className="mt-0.5 bg-[#F7EBFF] w-[33px] h-[33px] flex items-center justify-center rounded-full">
                <img src={naira} alt="user icon" className="w-4 h-4" />
              </div>
              <p className="text-[#A1A6B0] text-[0.625rem] mt-6">
                Total Amount Disbursed
              </p>
              <p className="text-3xl font-bold">₦ 20,000,000</p>
              <div className="absolute flex items-center justify-center px-2 py-1 rounded-full top-[123px] left-[254px] gap-2.5 bg-[#EDFCF1]">
                <img src={arrowUp} alt="arrow-up icon" className="w-2 h-2" />
                <p className="text-[0.5rem] font-bold text-[#42BE65]">5, 18%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
