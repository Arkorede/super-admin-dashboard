import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import gtco from "../img/gtco.png";

const TransModal = ({ setTransModalOn }) => {
  const handleCancelClick = () => {
    setTransModalOn(false);
    setTransChoice(false);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#17191C66] bg-opacity-40 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:mt-[34px]">
            <div className="bg-white w-[452px] min-h-[593px]">
              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                <p className="font-bold text-base">Transactions Details</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-8 h-8" />
                </button>
              </div>

              <img
                src={gtco}
                alt="GtBank logo"
                className="mt-[52px] mx-auto w-[71px] h-[72px]"
              />
              <p className="mt-4 font-normal text-sm text-center">
                Guarantee Trust Holding Company
              </p>
              <p className="mt-4 font-bold text-2xl text-center">
                ₦ 150,000.00
              </p>
              <div className="flex flex-col gap-6 px-9 mt-[39px]">
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">Receipt</p>
                  <p className="font-semibold text-sm">Oripeloye Timilehin</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">
                    Description
                  </p>
                  <p className="font-semibold text-sm break-all">
                    Airtime and Data fee
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">Status</p>
                  <p className="font-semibold text-sm text-[#42BE65]">Done</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">
                    Session ID
                  </p>
                  <p className="font-semibold text-sm">
                    268248437494793493497493
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">
                    Fees/Charges
                  </p>
                  <p className="font-semibold text-sm">N3.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#8A8B9F]">
                    Date and Time
                  </p>
                  <p className="font-semibold text-sm">April 6th, 2:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransModal;
