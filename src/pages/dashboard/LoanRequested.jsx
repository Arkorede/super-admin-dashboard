import React from "react";
import arrowDown from "./img/arrowDown.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import requestImg from "./img/requestImg.png";
import DataTable from "react-data-table-component";

export default function LoanRequested() {
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
        <div className="flex gap-4 items-center justify-center">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.fullName}</div>
        </div>
      ),
      minWidth: "210px",
    },
    {
      name: "Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.email}</div>
      ),
      minWidth: "240px",
    },
    {
      name: "Address",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.address}</div>
      ),
      minWidth: "220px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      minWidth: "60px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amount}</div>
      ),
      minWidth: "150px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.date}</div>
      ),
      minWidth: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
  ];

  return (
    <div className="mt-16">
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
          selectableRows
          responsive
        />
      </div>
      ;
    </div>
  );
}
