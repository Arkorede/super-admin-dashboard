import React, { useState } from "react";
import arrowDown from "./img/arrowDown.png";
import add from "./img/add.png";
import requestImg from "./img/requestImg.png";
import eye from "../login/img/eye.png";
import download from "./img/download.png";
import infoCircle from "./img/infoCircle.png";
import DataTable from "react-data-table-component";
import TripleItem from "./dropdown/TripleItem";

export default function LoanRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAmount, setIsOpenAmount] = useState(false);

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
      name: "Full Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.fullName}</div>
        </div>
      ),
      width: "210px",
    },
    {
      name: "Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.email}</div>
      ),
      width: "240px",
    },
    {
      name: "Loan Partner",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.loanPartner}</div>
      ),
      width: "220px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      width: "57px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amount}</div>
      ),
      width: "120px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="flex gap-10">
          <div className="text-sm font-semibold">{row.date}</div>
          <TripleItem
            img1={eye}
            img2={download}
            img3={infoCircle}
            button1={"View"}
            button2={"Download"}
            button3={"Send to Recova"}
            onClick1={() => handleViewDetails(row)}
          />
        </div>
      ),
      width: "140px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Crystal Finance Limited",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 2,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Kaftan Microfinance",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 3,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Renmoney",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 4,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Paylater",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 5,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Carbon Finance Limited",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 6,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "First Money",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 7,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Fair Money",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 8,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanPartner: "Crystal Finance Limited",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
  ];

  // w-[200px] h-[43px]
  return (
    <div className="p-5 mt-6">
      <div className="font-bold text-[34px] leading-9 mb-[53px]">
        Loan Request
      </div>
      <div className="flex gap-4">
        <div className="relative flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
          <p className="text-sm text-[#8A8B9F] font-bold">Filter by all</p>
          <button className="" onClick={() => setIsOpen((prev) => !prev)}>
            <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
          </button>
          {isOpen && (
            <div
              className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[110px] top-[43px] right-[2px] bg-white px-4 py-6 rounded"
              style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
            >
              <button className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 bg-[#42BE65] rounded-full"></div>
                <p className="text-xs font-semibold text-[#8A8B9F]">
                  Completed
                </p>
              </button>
              <button className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 bg-[#8003CD] rounded-full"></div>
                <p className="text-xs font-semibold text-[#8A8B9F]">Active</p>
              </button>
              <button className="flex items-center justify-center gap-1">
                <div className="w-2 h-2 bg-[#FF3A29] rounded-full"></div>
                <p className="text-xs font-semibold text-[#8A8B9F]">Overdue</p>
              </button>
            </div>
          )}
        </div>

        <div className="relative flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
          <p className="text-sm text-[#8A8B9F] font-bold">Filter by amount</p>
          <button
            className="p"
            onClick={() => setIsOpenAmount((prev) => !prev)}
          >
            <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
          </button>
          {isOpenAmount && (
            <div
              className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[243px] top-[43px] left-[0] bg-white px-4 py-6 rounded"
              style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
            >
              <button className="flex items-center justify-center gap-1">
                <p className="text-xs font-semibold text-[#8A8B9F]">
                  ₦ 10,000.00 - ₦ 50,000.00
                </p>
              </button>
              <button className="flex items-center justify-center gap-1">
                <p className="text-xs font-semibold text-[#8A8B9F]">
                  ₦ 50,000.00 - ₦ 100,000.00
                </p>
              </button>
              <button className="flex items-center justify-center gap-1">
                <p className="text-xs font-semibold text-[#8A8B9F]">
                  ₦ 100,000.00 - ₦250,000.00
                </p>
              </button>
            </div>
          )}
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
            <div className="flex gap-2.5 border p-2 border-black rounded">
              <button className="">
                <img src={add} alt="arrow down" className="w-4 h-4" />
              </button>
              <p className="text-xs font-bold">Add Partner</p>
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
      ;
    </div>
  );
}
