import React, { useState } from "react";
import ellipseWalletTop from "./img/ellipseWalletTop.png";
import ellipseWalletRight from "./img/ellipseWalletRight.png";
import transimg1 from "./img/transimg1.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";
import DataTable from "react-data-table-component";
import DoubleItem1 from "./dropdown/DoubleItem1";

export default function PartnerWallet() {
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
      name: "Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center">
          <img src={transimg1} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.name}</div>
        </div>
      ),
      width: "250px",
    },
    {
      name: "Type",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.type}</div>
      ),
      width: "180px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#F5222D]">{row.amount}</div>
      ),
      width: "140px",
    },
    {
      name: "Date",
      selector: (row) => <div className="text-sm font-bold">{row.date}</div>,
      width: "140px",
    },
    {
      name: "Receipt ID",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.receiptID}</div>
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
          <DoubleItem1 />
        </div>
      ),
      width: "200px",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Oripeloye Timilehin",
      type: "Loan Disbursed",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 2,
      name: "Johnson Faithful",
      type: "Loan Repaid",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 3,
      name: "Christiana Adepelu",
      type: "Wallet Funded",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 4,
      name: "Obatola Josephine",
      type: "Loan Disbursed",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
  ];
  return (
    <div className="p">
      <div className="relative wallet bg-[#8003CD] h-[210px] rounded-lg mt-[59px]">
        <p className="text-white pt-[71px] pl-[40px] text-sm font-bold">
          Wallet Balance
        </p>
        <p className="mt-[6px] pl-[40px] text-white text-[34px] font-weight">
          ₦ 430,434,684.54
        </p>
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

      <div className="flex gap-4 mt-6">
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 pl-5 w-[200px] h-[43px]">
          <img src={searchNormal} alt="search icon" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search for Name"
            className="outline-none text-xs font-bold"
          />
        </div>
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-center gap-2 p-5 w-[242px] h-[43px]">
          <input
            type="text"
            placeholder="Permissions"
            className="outline-none text-xs font-bold"
          />
          <div className="flex gap-2">
            <p className="text-xs font-bold">All</p>
            <button className="p">
              <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
            </button>
          </div>
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

      <div className="border border-[#E5EAEF] rounded-lg h-[598px] mt-[36px] mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <p className="p">Transactions</p>
          <div className="flex gap-2.5 border p-2 border-black rounded">
            <p className="text-xs font-bold">Bulk actions</p>
            <button className="p">
              <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
        />
      </div>
    </div>
  );
}
