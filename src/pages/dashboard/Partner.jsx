import React from "react";

import bevy from "./../login/img/bevy.png";
import PartnerWallet from "./PartnerWallet";
import LoanRequested from "./LoanRequested";
import CompanyProfile from "./CompanyProfile";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Partners() {
  return (
    <div className="mt-[44px]">
      <div className="flex flex-end">
        <div className="flex items-center justify-center pl-[2px]">
          <img src={bevy} alt="B" className="w-[62px] h-[65px]" />
          <p className="font-bold text-[2.125rem] leading-9">
            CredBevy Finance Limited
          </p>
        </div>
      </div>
      <p className="mt-2.5 leading-6 tex-lg text-[#8A8B9F] px-5">
        Credbevyfinancelimited@gmail.com
      </p>
      <p className="mt-[5px] leading-6 tex-lg text-[#8A8B9F] px-5">
        +2349055380387
      </p>
      <div className="mt-[58px] px-5">
        <Tabs className={"major-tabs"}>
          <TabList className={"major-tab-list"}>
            <Tab className={"major-tab"}>Wallet</Tab>
            <Tab className={"major-tab"}>Loan Requested</Tab>
            <Tab className={"major-tab"}>Company Profile</Tab>
            <Tab className={"major-tab"}>Users</Tab>
            <Tab className={"major-tab"}>Loan History</Tab>
            <Tab className={"major-tab"}>Integrations</Tab>
            <Tab className={"major-tab"}>Loan Products</Tab>
          </TabList>

          <TabPanel>
            <PartnerWallet />
          </TabPanel>
          <TabPanel>
            <LoanRequested />
          </TabPanel>
          <TabPanel>
            <CompanyProfile />
          </TabPanel>
          <TabPanel>
            <h2>Users</h2>
          </TabPanel>
          <TabPanel>
            <h2>Loan History</h2>
          </TabPanel>
          <TabPanel>
            <h2>Integrations</h2>
          </TabPanel>
          <TabPanel>
            <h2>Loan Products</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Partners;
