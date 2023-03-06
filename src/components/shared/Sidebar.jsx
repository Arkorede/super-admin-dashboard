import React from "react";
import { NavLink } from "react-router-dom";

import credbevyLogo from "../../pages/login/credbevyLogo.png";
import category from "./img/category.png";
import emptyWallet from "./img/emptyWallet.png";
import chart from "./img/chart.png";
import shoppingCart from "./img/shoppingCart.png";
import profileUser from "./img/profileUser.png";
import bag from "./img/bag.png";
import group from "./img/group.png";
import setting from "./img/setting.png";

function Sidebar() {
  let activeStyle = {
    color: "#8003CD",
  };

  return (
    <div className="px-11 py-6 border-r">
      <div className="py-7">
        <img src={credbevyLogo} alt="credbevy Logo" className="credbevy-logo" />
      </div>

      <span className="bg-[#E5EAEF] h-px w-[183px] block"></span>
      <br />
      <br />
      <br />
      <div className="flex flex-col gap-12">
        <NavLink
          to="dashboard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={category} alt="category icon" />
          <p className="text-[#8003CD] font-semibold">Dashboard</p>
        </NavLink>
        <NavLink
          to="wallet"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={emptyWallet} alt="wallet icon" />
          <p className="text-[#8A8B9F]">Wallet</p>
        </NavLink>
        <NavLink
          to="/partners"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={chart} alt="chart icon" />
          <p className="text-[#8A8B9F]">Partners</p>
        </NavLink>
        <NavLink
          to="/loanrequest"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={shoppingCart} alt="shopping-cart icon" />
          <p className="text-[#8A8B9F]">Loan Request</p>
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={profileUser} alt="profile icon" />
          <p className="text-[#8A8B9F]">Users</p>
        </NavLink>
        <NavLink
          to="/loanhistory"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={bag} alt="bag icon" />
          <p className="text-[#8A8B9F]">Loan History</p>
        </NavLink>
        <NavLink
          to="/documents"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={bag} alt="bag icon" />
          <p className="text-[#8A8B9F]">Documents</p>
        </NavLink>
        <NavLink
          to="/transactions"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={group} alt="group icon" />
          <p className="text-[#8A8B9F]">Transactions</p>
        </NavLink>
        <NavLink
          to="/settings"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={setting} alt="setting icon" />
          <p className="text-[#8A8B9F]">Settings</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
