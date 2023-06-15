import React from "react";
import tickCircle from "../img/tickCircle.png";

const PartnerForm4 = (props) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 pl-8 mt-[50px] h-full">
        <div className="flex flex-col gap-10">
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
                opacity: 0.5,
              }}
            />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-darkPurple text-opacity-50">
                Invite a team member
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F] text-opacity-50">
                Provide basic information about company
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="place-self-start mt-20">
          <div className="flex flex-col items-center">
            <svg
              width="118"
              height="118"
              viewBox="0 0 118 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.0002 108.167C86.0418 108.167 108.167 86.0418 108.167 59.0002C108.167 31.9585 86.0418 9.8335 59.0002 9.8335C31.9585 9.8335 9.8335 31.9585 9.8335 59.0002C9.8335 86.0418 31.9585 108.167 59.0002 108.167Z"
                stroke="#7E1F86"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38.104 59.0001L52.0182 72.9143L79.8957 45.0859"
                stroke="#7E1F86"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-2xl mt-[50px]">Successful!</p>
              <p className="mt-6 font-bold text-sm text-[#8A8B9F]">
                Partner Successfully added
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full flex h-[40px] bg-[#F6F6F6] p-5 justify-between bottom-0 justify-center items-center">
        <button
          className="p-[5px] rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
          onClick={props.handleCancelClick}
        >
          Cancel
        </button>
        <button
          className="p-[5px] rounded text-xs font-bold bg-darkPurple text-white"
          type="submit"
          onClick={props.handleCancelClick}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PartnerForm4;
