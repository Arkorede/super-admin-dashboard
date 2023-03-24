import React from "react";
import arrowDown from "./img/arrowDown.png";
import requestImg from "./img/requestImg.png";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import DoubleItem from "./dropdown/DoubleItem";

export default function Users() {
  const navigate = useNavigate();

  const handleViewUsers = () => {
    navigate("./user");
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
      name: "Full Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.fullName}</div>
        </div>
      ),
      width: "207px",
    },
    {
      name: "Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.email}</div>
      ),
      width: "237px",
    },
    {
      name: "Address",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.address}</div>
      ),
      width: "212px",
    },
    {
      name: "Phone Number",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.phoneNumber}</div>
      ),
      width: "140px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      width: "57px",
    },
    {
      name: "Joined",
      selector: (row) => (
        <div className="flex gap-8">
          <div className="text-sm font-semibold">{row.joined}</div>
          <DoubleItem onClick1={handleViewUsers} />
        </div>
      ),
      width: "130px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 2,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 3,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 4,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 5,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 6,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 7,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
    {
      id: 8,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      phoneNumber: "+2349055380387",
      cs: 750,
      joined: "9/27/22",
    },
  ];

  return (
    <div className="p-5 mt-6">
      <div className="font-bold text-[34px] leading-9 mb-8">Users</div>
      {/* LOAN REQUESTED TABLE */}
      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-[36px] mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <div className="flex items-center justify-center gap-[0.9375rem]">
            <p className="text-sm font-bold">Users</p>
            <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
              48 users
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
