import React from "react";
import requestImg from "./img/requestImg.png";
import document from "./img/document.png";
import arrowDown from "./img/arrowDown.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const User = () => {
  return (
    <div className="p-5 mt-6">
      <p className="font-bold text-[34px] leading-9 mt-6 mb-8">Users</p>
      <div className="flex gap-6">
        <div className="">
          <div className="border border-solid border-[#E5EAEF] w-[330px] h-[617px] px-4 mb-[215px]">
            <img src={requestImg} alt="a person" className="mt-12 mx-auto" />
            <p className="mt-4 font-bold text-base text-center">
              Oripeloye Timilehin
            </p>
            <div className="flex flex-col gap-6 mt-[73px]">
              <div className="flex gap-[113px]">
                <p className="font-semibold text-xs text-[#8A8B9F]">
                  Date of birth
                </p>
                <p className="font-semibold text-xs">Dec 16, 199X</p>
              </div>
              <div className="flex gap-[154px]">
                <p className="font-semibold text-xs text-[#8A8B9F]">Email</p>
                <p className="font-semibold text-xs break-all">
                  Timilehinoripeloye@gmail.com
                </p>
              </div>
              <div className="flex gap-[113px]">
                <p className="font-semibold text-xs text-[#8A8B9F]">
                  Credit Score
                </p>
                <p className="font-semibold text-xs text-[#8003CD]">743</p>
              </div>
              <div className="flex gap-[137px]">
                <p className="font-semibold text-xs text-[#8A8B9F]">Address</p>
                <p className="font-semibold text-xs">
                  24, Lawani street, off- Abule Oja, Yaba Lagos
                </p>
              </div>
              <div className="flex gap-[118px]">
                <p className="font-semibold text-xs text-[#8A8B9F]">
                  Occupation
                </p>
                <p className="font-semibold text-xs">
                  Digital Product Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5EAEF] w-[683px] h-[617px] mb-[215px]">
          <Tabs>
            <TabList className={"details-tab-list"}>
              <Tab className={"details-tab"}>Personal Info</Tab>
              <Tab className={"details-tab"}>Location</Tab>
              <Tab className={"details-tab"}>Bank Info</Tab>
              <Tab className={"details-tab"}>Next of Kin</Tab>
              <Tab className={"details-tab"}>Business</Tab>
              <Tab className={"details-tab"}>Proof of Identity</Tab>
            </TabList>

            <TabPanel>
              <div className="flex gap-[22px] mt-6 ml-6">
                <div className="flex flex-col gap-6 text-left font-semibold text-sm text-[#8A8B9F]">
                  <p className="">Product type</p>
                  <p className="">Amount</p>
                  <p className="">Monthly Payment</p>
                  <p className="">Interest Rate</p>
                  <p className="">Duration</p>
                </div>

                <div className="flex flex-col gap-6 text-left font-semibold text-sm">
                  <p className="">Silver</p>
                  <p className=""># 130, 000</p>
                  <p className=""># 20, 000</p>
                  <p className="">12%</p>
                  <p className="">4 months</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-10 mt-6 ml-6">
                <div className="flex flex-col gap-6 text-left font-semibold text-sm text-[#8A8B9F]">
                  <p className="">Address</p>
                  <p className="">LGA</p>
                  <p className="">State</p>
                </div>

                <div className="flex flex-col gap-6 text-left font-semibold text-sm">
                  <p className="">10, Lawani Street, Abule Oja, Yaba, Lagos</p>
                  <p className="">Lagos Mainland</p>
                  <p className="">Lagos</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {" "}
              <div className="flex gap-10 mt-6 ml-6">
                <div className="flex flex-col gap-6 text-left font-semibold text-sm text-[#8A8B9F]">
                  <p className="">Bank Name</p>
                  <p className="">Account Name</p>
                  <p className="">Phone Number</p>
                </div>

                <div className="flex flex-col gap-6 text-left font-semibold text-sm">
                  <p className="">Guarantee Trust Bank (GTB)</p>
                  <p className="">Oripeloye Timilehin John </p>
                  <p className="">+2349055380387</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {" "}
              <div className="flex gap-10 mt-6 ml-6">
                <div className="flex flex-col gap-6 text-left font-semibold text-sm text-[#8A8B9F]">
                  <p className="">First Name</p>
                  <p className="">Last Name</p>
                  <p className="">Phone Number</p>
                  <p className="">Relationship</p>
                </div>

                <div className="flex flex-col gap-6 text-left font-semibold text-sm">
                  <p className="">Oripeloye</p>
                  <p className="">Timilehin</p>
                  <p className="">+2349055380387</p>
                  <p className="">Brother</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>Business</TabPanel>
            <TabPanel>Proof of Identity</TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default User;
