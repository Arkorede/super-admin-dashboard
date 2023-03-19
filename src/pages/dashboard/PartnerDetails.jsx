import React from "react";
import detailImg from "./img/detailImg.png";
import DetailsTab from "./TabView/DetailsTab";
import Table1 from "./detailsTable/Table1";
import Table2 from "./detailsTable/Table2";
import Table3 from "./detailsTable/Table3";
import Table4 from "./detailsTable/Table4";
import Table5 from "./detailsTable/Table5";
import Table6 from "./detailsTable/Table6";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PartnerDetails = ({ partnerDetails }) => {
  const reqDetails = <Table1 />;
  const personalInfo = <Table2 />;
  const location = <Table3 />;
  const bankInfo = <Table4 />;
  const nextKin = <Table5 />;
  const proof = <Table6 />;

  console.log("partnerDetails", partnerDetails);
  // {partnerDetails.fullName}
  return (
    <div className="mt-[55px]">
      <div className="flex items-center gap-[57px] h-[217px] border border-[#E5EAEF] rounded">
        <div className="flex flex-col gap-4 pl-6">
          <img src={detailImg} alt="a person" className="w-[82px] h-[82px" />
          <p className="font-bold text-base">{partnerDetails.fullName}</p>
        </div>
        <div className="flex flex-col gap-4 font-semibold text-xs text-[#8A8B9F]">
          <span>31 Years Old (Male)</span>
          <span>{partnerDetails.email}</span>
          <span>+2349055380387</span>
          <span>10, Lawani Street, Abule Oja, Yaba, Lagos</span>
        </div>
      </div>

      <DetailsTab
        tabs={[
          { name: "Request details", content: reqDetails },
          { name: "Personal Info", content: personalInfo },
          { name: "Location", content: location },
          { name: "Bank Info", content: bankInfo },
          { name: "Next of Kin", content: nextKin },
          { name: "Business", content: "Business" },
          { name: "Proof of Identity", content: proof },
          { name: "Credit Score", content: "Credit Score" },
        ]}
      />
    </div>
  );
};

export default PartnerDetails;
