import React from "react";

const Table2 = () => {
  return (
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
  );
};

export default Table2;
