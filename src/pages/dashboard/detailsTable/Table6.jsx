import React from "react";
import document from "../img/document.png";
import arrowDown from "../img/arrowDown.png";
import DataTable from "react-data-table-component";

const Table6 = () => {
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
  return (
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
  );
};

export default Table6;
