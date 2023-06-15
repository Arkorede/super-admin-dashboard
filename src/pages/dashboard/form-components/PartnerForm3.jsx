import React from "react";
import tickCircle from "../img/tickCircle.png";

const PartnerForm3 = (props) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 pl-8 pr-[95px] mt-[50px]">
        <div className="col-span-1 flex flex-col gap-10">
          <div className="flex gap-4">
            <img
              src={tickCircle}
              alt="tick-circle"
              className="w-6 h-6"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(18%) sepia(41%) saturate(3965%) hue-rotate(277deg) brightness(93%) contrast(99%)",
                opacity: 0.5,
              }}
            />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-darkPurple text-opacity-50">
                General Information
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F] text-opacity-50">
                Provide basic information about company
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={tickCircle}
              alt="tick-circle"
              className="w-6 h-6"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(18%) sepia(41%) saturate(3965%) hue-rotate(277deg) brightness(93%) contrast(99%)",
                opacity: 0.5,
              }}
            />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-darkPurple text-opacity-50">
                Business Information
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F] text-opacity-50">
                Provide basic information about company
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={tickCircle}
              alt="tick-circle"
              className="w-6 h-6"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(18%) sepia(41%) saturate(3965%) hue-rotate(277deg) brightness(93%) contrast(99%)",
              }}
            />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-darkPurple">
                Invite a team member
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Provide basic information about company
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h1 className="text-center text-lg leading-[22px] font-bold">
            Invite a team member
          </h1>
          <h1 className="text-center text-xs font-normal mt-1 leading-[22px]">
            Someone from your company that could manage the dashboard
          </h1>
          <form action="#" className="mt-[42px]">
            <div className="mb-4">
              <label htmlFor="Email" className="text-xs font-bold leading-4">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="block w-[375px] rounded border border-[#DCDCE4] outline-none px-2.5 py-1.5"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-xs font-bold leading-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-[375px] rounded border border-[#DCDCE4] outline-none px-2.5 py-1.5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-bold leading-4"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="block w-[375px] rounded border border-[#DCDCE4] outline-none px-2.5 py-1.5"
              />
            </div>
          </form>
          <button
            className="absolute z-10 top-[478px] right-[23px] p-1.5 rounded text-xs font-bold bg-darkPurple text-white"
            type="submit"
            onClick={props.handleNext}
          >
            Proceed
          </button>
        </div>
      </div>
      <div className="absolute w-full flex h-[40px] bg-[#F6F6F6] p-5 justify-between bottom-[-188px] justify-center items-center">
        <button
          className="p-[5px] rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
          onClick={props.handleCancelClick}
        >
          Cancel
        </button>
        {/* <button
          className="p-[5px] rounded text-xs font-bold bg-[#8003CD] text-white"
          type="submit"
          // onClick={handleNext}
        >
          Proceed
        </button> */}
      </div>
    </div>
  );
};

export default PartnerForm3;
