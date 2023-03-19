import React from "react";

const Table1 = () => {
  return (
    <div className="flex gap-[22px] mt-6 ml-6">
      <div className="flex flex-col gap-6 text-left font-semibold text-sm text-[#8A8B9F]">
        <p className="">Product type</p>
        <p className="">Amount</p>
        <p className="">Monthly Payment</p>
        <p className="">Interest Rate</p>
        <p className="">Duration</p>
      </div>

      <div className="flex flex-col gap-6 text-left font-semibold text-sm">
        <p className="">Silver</p>
        <p className=""># 130, 000</p>
        <p className=""># 20, 000</p>
        <p className="">12%</p>
        <p className="">4 months</p>
      </div>
    </div>
  );
};

export default Table1;
