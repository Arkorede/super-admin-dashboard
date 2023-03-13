// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "./datatablesource";
// import { useState } from "react";

// const Datatable = () => {
//   const [data, setData] = useState(userRows);

//   return (
//     <div>
//       <DataGrid className="datagrid" rows={data} columns={userColumns} />
//     </div>
//   );
// };

// export default Datatable;

// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   {
//     field: "Receiver",
//     headerName: "Receiver",
//     width: 70,
//     sortable: false,
//   },
//   {
//     field: "C.S",
//     headerName: "C.S",
//     width: 70,
//     sortable: false,
//   },
//   {
//     field: "Amount",
//     headerName: "Amount",
//     width: 70,
//     sortable: false,
//   },
//   {
//     field: "Date",
//     headerName: "Date",
//     type: "number",
//     sortable: false,
//     width: 160,
//   },
// ];

// const rows = [
//   { id: 1, Receiver: "Oripeloye Timilehin", "C.S": 750, Date: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div
//       style={{
//         height: "487px",
//         width: "100%",
//         outline: "none",
//         border: "none",
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         hideFooter
//         hideFooterRowCount
//         hideFooterSelectedRowCount
//         hideFooterPagination
//         disableColumnMenu
//         disableRowSelectionOnClick
//       />
//     </div>
//   );
// }
