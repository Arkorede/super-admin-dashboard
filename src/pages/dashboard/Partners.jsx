import React, { useEffect, useState } from "react";
import arrowDown from "./img/arrowDown.png";
import add from "./img/add.png";
import credbevyF from "./img/credbevyF.png";
import document from "./img/document.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import closeModal from "./img/closeModal.png";
import tickCircle from "./img/tickCircle.png";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import DoubleItem1 from "./dropdown/DoubleItem1";
import PartnerModal from "./modal/PartnerModal";

export default function Partners() {
  const [partnerModalOn, setPartnerModalOn] = useState(false);

  const clicked = () => {
    setPartnerModalOn(true);
  };

  // const handleProceedClick = () => {
  //   setChoice(true);
  //   setModalOn(false);
  // };

  const handleCancelClick = () => {
    setPartnerModalOn(false);
  };

  const navigate = useNavigate();

  const handleViewPartners = () => {
    navigate("./partner");
  };

  const customStyles = {
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
      name: "Partner Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={credbevyF} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.partnerName}</div>
        </div>
      ),
      width: "265px",
    },
    {
      name: "Official Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.officialEmail}</div>
      ),
      width: "270px",
    },
    {
      name: "Users",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.users}</div>
      ),
      width: "130px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.date}</div>
      ),
      width: "120px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex gap-[55px] flex items-center justify-center gap-[55px]">
          <div className="flex items-center justify-center gap-2 px-4 py-1 bg-[#C2FED3] rounded-[1.875rem]">
            <div className="w-1.5 h-1.5 bg-[#42BE65] rounded-full"></div>
            <div className="text-[0.625rem] font-semibold">{row.status}</div>
          </div>
          <DoubleItem1 onClick1={handleViewPartners} />
        </div>
      ),
      width: "200px",
    },
  ];

  const data = [
    {
      id: 1,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 2,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 3,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 4,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 5,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 6,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
    {
      id: 7,
      partnerName: "CredBevy FInance Limited ",
      officialEmail: "Timilehinoripeloye@gmail.com",
      users: "432,000",
      date: "9/27/22",
      status: "active",
    },
  ];

  return (
    <div className="p-5 mt-7">
      <div className="font-bold text-[34px] leading-9 mb-10">Partners</div>
      <div className="flex gap-4">
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 pl-5 w-[200px] h-[43px]">
          <img src={searchNormal} alt="search icon" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search for Name"
            className="outline-none text-xs font-bold"
          />
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
      {/* LOAN REQUESTED TABLE */}
      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-[36px] mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <div className="flex items-center justify-center gap-[0.9375rem]">
            <p className="text-sm font-bold text-[#8A8B9F]">New Request</p>
            <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
              48 request
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="flex gap-2.5 border p-2 border-black rounded"
              onClick={clicked}
            >
              <img src={add} alt="arrow down" className="w-4 h-4" />
              <p className="text-xs font-bold">Add Partner</p>
            </button>
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
      {partnerModalOn && <PartnerModal setPartnerModalOn={setPartnerModalOn} />}
    </div>
  );
}
