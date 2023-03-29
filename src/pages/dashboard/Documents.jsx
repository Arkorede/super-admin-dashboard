import React, { useState } from "react";

import transimg1 from "./img/transimg1.png";
import folderCloud from "./img/folderCloud.png";
import add from "./img/add.png";
import addSquare from "./img/addSquare.png";
import eye from "./../login/eye.png";
import download from "./img/download.png";
import cloudChange from "./img/cloudChange.png";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataTable from "react-data-table-component";
import document from "./img/document.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";
import TripleItem from "./dropdown/TripleItem";
import MoveModal from "./modal/MoveModal";
import AddModal from "./modal/AddModal";

const Documents = () => {
  const [modalOn, setModalOn] = useState(false);
  const [addModalOn, setAddModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [addChoice, setAddChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  const handleDocClick = () => {
    setAddModalOn(true);
  };

  // const handleMoveClick = () => {
  //   setModalOn(false);
  //   setChoice(true);
  // };

  // const handleCreateClick = () => {
  //   setModalOn(false);
  //   setChoice(false);
  // };

  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleButtonClick = () => {
    setShowFirstDiv(false);
  };

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
      name: "Owner",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={transimg1} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.owner}</div>
        </div>
      ),
      width: "210px",
    },
    {
      name: "Document Name",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.documentName}</div>
      ),
      width: "160px",
    },
    {
      name: "Document Type",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.documentType}</div>
      ),
      width: "140px",
    },
    {
      name: "Date Uploaded",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.dateUploaded}</div>
      ),
      width: "180px",
    },
    {
      name: "EXT.",
      selector: (row) => (
        <div className="flex gap-1 items-center justify-center">
          <img src={document} alt="document icon" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.ext}</div>
        </div>
      ),
      width: "110px",
    },
    {
      name: "Size",
      selector: (row) => (
        <div className="flex gap-[70px]">
          <div className="text-sm font-semibold">{row.size}</div>
          <TripleItem
            img1={eye}
            img2={cloudChange}
            img3={download}
            button1={"View"}
            button2={"Move"}
            button3={"Download"}
            onClick2={clicked}
          />
        </div>
      ),
      width: "180px",
    },
  ];

  const data = [
    {
      id: 1,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "#10 MB",
    },
    {
      id: 2,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "DOC",
      size: "1,995 KB",
    },
    {
      id: 3,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
    {
      id: 3,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
    {
      id: 4,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
    {
      id: 5,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
    {
      id: 6,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
    {
      id: 7,
      owner: "Oripeloye Timilehin",
      documentName: "My Drivers’ Licence",
      documentType: "Drivers’ Licence",
      dateUploaded: "10/08/2022, 3:17 PM",
      ext: "PDF",
      size: "1,995 KB",
    },
  ];
  return (
    <div className="p-5 mt-2">
      <p className="font-bold text-[34px] leading-9 mt-2.5 mb-[43px]">
        Documents
      </p>

      <div className="">
        {showFirstDiv ? (
          <div className="flex gap-4 items-center justify-between">
            <div
              className="border border-[#E5EAEF] cursor-pointer rounded h-[170px] pl-6 pt-[38px] pb-[35px] w-full mb-9"
              onClick={handleButtonClick}
            >
              <img
                src={folderCloud}
                alt="folder cloud"
                className="w-[41px] h-[41px]"
              />
              <p className="mt-[19.42px] text-sm font-bold">KYC Documents</p>
              <p className="mt-2 text-xs text-[#8A8B9F] font-semibold">
                23.84GB. 30 Items
              </p>
            </div>
            <div
              className="border border-[#E5EAEF] cursor-pointer rounded h-[170px] pl-6 pt-[38px] pb-[35px] w-full mb-9"
              onClick={handleButtonClick}
            >
              <img
                src={folderCloud}
                alt="folder cloud"
                className="w-[41px] h-[41px]"
              />
              <p className="mt-[19.42px] text-sm font-bold">
                Partners Documents
              </p>
              <p className="mt-2 text-xs text-[#8A8B9F] font-semibold">
                23.84GB. 30 Items
              </p>
            </div>
            <div
              className="border border-[#E5EAEF] cursor-pointer rounded h-[170px] pl-6 pt-[38px] pb-[35px] w-full mb-9"
              onClick={handleButtonClick}
            >
              <img
                src={folderCloud}
                alt="folder cloud"
                className="w-[41px] h-[41px]"
              />
              <p className="mt-[19.42px] text-sm font-bold">
                Partners Contracts
              </p>
              <p className="mt-2 text-xs text-[#8A8B9F] font-semibold">
                23.84GB. 30 Items
              </p>
            </div>
            <div
              className="border border-[#E5EAEF] cursor-pointer rounded h-[170px] pl-6 pt-[38px] pb-[35px] w-full mb-9"
              onClick={handleButtonClick}
            >
              <img
                src={folderCloud}
                alt="folder cloud"
                className="w-[41px] h-[41px]"
              />
              <p className="mt-[19.42px] text-sm font-bold">KYC Documents</p>
              <p className="mt-2 text-xs text-[#8A8B9F] font-semibold">
                23.84GB. 30 Items
              </p>
            </div>
            <div className="border border-[#E5EAEF] rounded h-[170px] px-[37px] py-[75px] mb-9">
              <button className="">
                <img src={addSquare} alt="add square" className="w-20 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between border border-[#E5EAEF] cursor-pointer rounded h-[170px] px-7 py-10 w-full mb-9">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold text-[#8A8B9F]">Total Size</p>
              <p className="text-base font-bold">23.84GB</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold text-[#8A8B9F]">
                Total Files
              </p>
              <p className="text-base font-bold">13,393</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold text-[#8A8B9F]">
                Date Created
              </p>
              <p className="text-base font-bold">2/2/2023</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold text-[#8A8B9F]">
                Date Edited
              </p>
              <p className="text-base font-bold">2/2/2023</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-between pl-4 pr-7">
          <div className="flex gap-2">
            <img src={searchNormal} alt="search icon" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search for Name"
              className="outline-none text-xs font-bold w-24"
            />
          </div>
        </div>
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-between pl-5 pr-9 py-3">
          <div className="flex gap-[19px]">
            <input
              type="text"
              placeholder="Date"
              className="outline-none text-xs font-bold w-7"
            />
            <div className="flex gap-2">
              <p className="text-xs font-bold">Anytime</p>
              <button className="">
                <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-6 mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <p className="font-bold text-xl">Documents</p>
          <div className="flex gap-3">
            <div className="flex gap-2.5 border p-2 border-black rounded">
              <button className="" onClick={handleDocClick}>
                <img src={add} alt="add icon" className="w-4 h-4" />
              </button>
              <p className="text-xs font-bold">Add Document</p>
            </div>
            <div className="flex gap-2.5 border p-2 border-black rounded">
              <p className="text-xs font-bold">Bulk actions</p>
              <button className="">
                <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
          selectableRows
          responsive
        />
      </div>
      {modalOn && <MoveModal setModalOn={setModalOn} setChoice={setChoice} />}
      {addModalOn && (
        <AddModal setAddModalOn={setAddModalOn} setAddChoice={setAddChoice} />
      )}
    </div>
  );
};

export default Documents;
