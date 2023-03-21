import React from "react";
import detailImg from "./img/detailImg.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import document from "./img/document.png";
import arrowDown from "./img/arrowDown.png";

const PartnerDetails = ({ partnerDetails }) => {
  const customStyles = {
    table: {
      style: {
        minHeight: "500px",
      },
    },
    rows: {
      style: {
        minHeight: "73px",
      },
    },
    headCells: {
      style: {
        fontWeight: 700,
        fontSize: "0.875rem",
        color: "#8A8B9F",
      },
    },
  };

  const columns = [
    {
      name: "Document Name",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.documentName}</div>
      ),
      width: "190px",
    },
    {
      name: "Document Type",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.documentType}</div>
      ),
      width: "160px",
    },
    {
      name: "Date Uploaded",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.dateUploaded}</div>
      ),
      width: "200px",
    },
    {
      name: "EXT.",
      selector: (row) => (
        <div className="flex gap-1 items-center justify-center">
          <img src={document} alt="document icon" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.ext}</div>
        </div>
      ),
      width: "120px",
    },
    {
      name: "Size",
      selector: (row) => (
        <div className="flex gap-[55px] items-center justify-center">
          <div className="text-sm font-semibold">{row.size}</div>
          <p className="font-bold text-sm text-[#8003CD]">View</p>
          <p className="font-bold text-sm text-[#8003CD]">Download</p>
        </div>
      ),
      width: "300px",
    },
  ];

  const data = [
    {
      id: 1,
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "#10 MB",
    },
    {
      id: 1,
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "DOC",
      size: "1,995 KB",
    },
    {
      id: 1,
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
  ];

  console.log("partnerDetails", partnerDetails);

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

      <div className="mt-8 min-h-[408px] border border-solid border-[#E5EAEF] rounded mb-44">
        <Tabs>
          <TabList className={"details-tab-list"}>
            <Tab className={"details-tab"}>Request details</Tab>
            <Tab className={"details-tab"}>Personal Info</Tab>
            <Tab className={"details-tab"}>Location</Tab>
            <Tab className={"details-tab"}>Bank Info</Tab>
            <Tab className={"details-tab"}>Next of Kin</Tab>
            <Tab className={"details-tab"}>Business</Tab>
            <Tab className={"details-tab"}>Proof of Identity</Tab>
            <Tab className={"details-tab"}>Credit Score</Tab>
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
                <p className="">First Name</p>
                <p className="">Last Name</p>
                <p className="">Phone Number</p>
                <p className="">Email</p>
                <p className="">Date of Birth</p>
                <p className="">Education</p>
                <p className="">Marital Status</p>
              </div>

              <div className="flex flex-col gap-6 text-left font-semibold text-sm">
                <p className="">Oripeloye</p>
                <p className="">Timilehin</p>
                <p className="">+2349055380387</p>
                <p className="">Timilehinoripeloye@gmail.com</p>
                <p className="">16th December 1990 (31 yrs old)</p>
                <p className="">Barchelor of Science (B.Sc)</p>
                <p className="">Single</p>
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
          <TabPanel>
            <div className="">
              <div className="flex items-center justify-end h-[65px] pr-6">
                <div className="flex items-center justify-center gap-2.5 border p-2 border-black rounded w-[130px] mt-2.5">
                  <p className="text-xs font-bold">Bulk actions</p>
                  <button className="">
                    <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                striped
                selectableRows
              />
            </div>
          </TabPanel>
          <TabPanel>Credit Score</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PartnerDetails;
