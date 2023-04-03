import React, { useState } from "react";
import transimg1 from "./img/transimg1.png";
import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";
import DataTable from "react-data-table-component";
import DoubleItem1 from "./dropdown/DoubleItem1";
import TransModal from "./modal/TransModal";

export default function Transactions() {
  // const [transChoice, setTransChoice] = useState(false);
  const [transModalOn, setTransModalOn] = useState(false);

  const clicked = () => {
    setTransModalOn(true);
  };

  // const handleCancelClick = () => {
  //   setTransChoice(true);
  //   setTransModalOn(false);
  // };

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
          <DoubleItem1 onClick1={clicked} />
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
    {
      id: 5,
      name: "Christiana Adepelu",
      type: "Wallet Funded",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 6,
      name: "Obatola Josephine",
      type: "Loan Disbursed",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 7,
      name: "Christiana Adepelu",
      type: "Wallet Funded",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
    {
      id: 8,
      name: "Obatola Josephine",
      type: "Loan Disbursed",
      amount: "432,000",
      date: "9/27/22",
      receiptID: "#263373738",
      status: "Completed",
    },
  ];
  return (
    <div className="p-5 mt-6">
      <div className="font-bold text-[34px] leading-9 mb-9">Transactions</div>
      <div className="flex gap-4">
        <div className="flex border border-[#dee2e6] rounded-lg items-center justify-between pl-5 pr-8">
          <div className="flex gap-2">
            <img src={searchNormal} alt="search icon" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search for Name"
              className="outline-none text-xs font-bold w-24"
            />
          </div>
        </div>
        <div className="flex border border-[#dee2e6] rounded-md items-center justify-between pl-6 pr-10 py-3.5">
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

      <div className="border border-[#E5EAEF] rounded-lg h-[777px] mt-7 mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <p className="p">Transactions</p>
          <div className="flex gap-2.5 border p-2 border-black rounded">
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
        />
      </div>
      {transModalOn && <TransModal setTransModalOn={setTransModalOn} />}
    </div>
  );
}
