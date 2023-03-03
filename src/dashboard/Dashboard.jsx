import React from "react";
import credbevyLogo from "../login/credbevyLogo.png";
import category from "./category.png";
import emptyWallet from "./emptyWallet.png";
import chart from "./chart.png";
import shoppingCart from "./shoppingCart.png";
import profileUser from "./profileUser.png";
import bag from "./bag.png";
import group from "./group.png";
import setting from "./setting.png";
import searchNormal from "./searchNormal.png";
import notification from "./notification.png";
import company from "./company.png";
import ellipseWalletTop from "./ellipseWalletTop.png";
import ellipseWalletRight from "./ellipseWalletRight.png";
import add from "./add.png";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="flex">
      {/* NAVIGATION */}
      <div className="px-11 py-6 border-r">
        <div className="py-7">
          <img
            src={credbevyLogo}
            alt="credbevy Logo"
            className="credbevy-logo"
          />
        </div>

        <span className="bg-[#E5EAEF] h-px w-[183px] block"></span>
        <br />
        <br />
        <br />
        <div className="flex flex-col gap-12">
          <div className="flex gap-[1.1rem]">
            <img src={category} alt="category icon" />
            <p className="text-[#8003CD] font-semibold">Dashboard</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={emptyWallet} alt="wallet icon" />
            <p className="text-[#8A8B9F]">Wallet</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={chart} alt="chart icon" />
            <p className="text-[#8A8B9F]">Partners</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={shoppingCart} alt="shopping-cart icon" />
            <p className="text-[#8A8B9F]">Loan Request</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={profileUser} alt="profile icon" />
            <p className="text-[#8A8B9F]">Users</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={bag} alt="bag icon" />
            <p className="text-[#8A8B9F]">Loan History</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={bag} alt="bag icon" />
            <p className="text-[#8A8B9F]">Documents</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={group} alt="group icon" />
            <p className="text-[#8A8B9F]">Transactions</p>
          </div>
          <div className="flex gap-[1.1rem]">
            <img src={setting} alt="setting icon" />
            <p className="text-[#8A8B9F]">Settings</p>
          </div>
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="">
        <div className="pl-11 py-7 pr-20 border-b w-[1077px] flex justify-between justify-center items-center">
          <div className="relative flex pr-[3.25rem] justify-between w-[852px]">
            <div className="flex gap-3 justify-center items-center font-bold">
              <img src={searchNormal} alt="search icon" className="w-4 h-4" />
              <p className="text-[#A1A6B0] text-xs w-[155px]">
                What are you looking for?
              </p>
            </div>
            <div className="p">
              <img src={notification} alt="notification icon" />
            </div>
            <span className="absolute bg-[#A1A6B0] h-[44px] w-px block right-[20px] bottom-[-10.5px]"></span>
          </div>

          <div className="flex gap-2 ml-2">
            <img src={company} alt="company logo" className="w-7 h-7" />
            <div className="">
              <p className="font-bold text-[10px]">Company Name</p>
              <p className="font-semibold text-[8px] text-[#A1A6B0]">
                Companyname@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 mt-6">
          <div className="font-bold text-[34px] mb-4">Dashboard</div>
          <div className="relative wallet bg-[#8003CD] h-[210px] rounded-lg">
            <p className="text-white pt-[35px] pl-[40px] text-sm font-bold">
              Wallet Balance
            </p>
            <p className="mt-[6px] pl-[40px] text-white text-[34px] font-weight">
              ₦ 430,434,684.54
            </p>
            <button className="bg-white flex gap-2 py-2 px-2.5 items-center justify-center rounded ml-[40px] inline-block mt-[32px]">
              <img src={add} alt="add icon" className="w-4 h-4" />
              <p className="font-bold text-[0.625rem]">FundWallet</p>
            </button>
            <img
              src={ellipseWalletTop}
              alt="ellipse"
              className="absolute w-[252px] h-[83px] top-[0] left-[648px]"
            />
            {/* <img
              src={ellipseWalletRight}
              alt="ellipse"
              className="absolute w-[252px] h-[83px] top-[53px] left-[785px]"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
