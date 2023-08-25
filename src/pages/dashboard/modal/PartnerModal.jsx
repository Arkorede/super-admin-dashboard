import React, { useState, useEffect } from "react";

import closeModal from "../img/closeModal.png";
import tickCircle from "../img/tickCircle.png";
import { useDispatch, useSelector } from "react-redux";
import { createPartner1 } from "../../../_redux/thunks";
import PartnerForm1 from "../form-components/PartnerForm1";
import PartnerForm2 from "../form-components/PartnerForm2";
import PartnerForm3 from "../form-components/PartnerForm3";
import PartnerForm4 from "../form-components/PartnerForm4";

export default function PartnerModal({ setPartnerModalOn }) {
  const [businessModalOn, setBusinessModalOn] = useState(false);

  const formList = ["First form", "Second form", "Third form", "Fourth form"];
  const [page, setPage] = useState(0);
  const formLength = formList.length;
  // const clicked = () => {
  //   setBusinessModalOn(true);
  // };

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };

  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  console.log(page);

  // const setForm1 = () => {
  //   setPage(0);
  // };

  // const setForm2 = () => {
  //   setPage(1);
  // };

  // const setForm3 = () => {
  //   setPage(2);
  // };

  const handleForm = () => {
    switch (page) {
      case 0: {
        return (
          <PartnerForm1
            handleNext={handleNext}
            handleCancelClick={handleCancelClick}
          />
        );
      }
      case 1: {
        return (
          <PartnerForm2
            handleNext={handleNext}
            handleCancelClick={handleCancelClick}
          />
        );
      }
      case 2: {
        return (
          <PartnerForm3
            handleNext={handleNext}
            handleCancelClick={handleCancelClick}
          />
        );
      }
      case 3: {
        return (
          <PartnerForm4
            handleNext={handleNext}
            handleCancelClick={handleCancelClick}
          />
        );
      }
      default:
        setPage(0);
    }
  };

  const handleCancelClick = () => {
    setPartnerModalOn(false);
  };

  return (
    <div className="relative">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-[#17191C66] bg-opacity-40 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
              <div className="relative bg-white w-[1200px] h-[610px]">
                <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between items-center">
                  <p className="font-bold text-sm">Add Partners</p>
                  <button className="" onClick={handleCancelClick}>
                    <img
                      src={closeModal}
                      alt=" close icon"
                      className="w-6 h-6"
                    />
                  </button>
                </div>

                <div>{handleForm()}</div>

                {/* {page === 2 ? (
                  <button className="ml-[505px] mt-[20px] text-white text-xs font-bold leading-4 p-2.5 bg-darkPurple rounded">
                    Add Team Member
                  </button>
                ) : null} */}

                {/* {page === 2 ? (
                  <div className="flex items-center justify-center gap-2 mt-[19px]">
                    <img
                      src={tickCircle}
                      alt="tick-circle"
                      className="w-6 h-6"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(18%) sepia(41%) saturate(3965%) hue-rotate(277deg) brightness(93%) contrast(99%)",
                      }}
                    />
                    <p className="font-medium text-sm">
                      Invitation has been sent to John Doe to manage the
                      dashboard as an <span className="font-bold">ADMIN</span>
                    </p>
                  </div>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
