import React, { useState, useEffect } from "react";

import tickCircle from "../img/tickCircle.png";
import { useDispatch, useSelector } from "react-redux";
import { createPartner1 } from "../../../_redux/thunks";

const PartnerForm1 = (props) => {
  const [state, setState] = useState({
    partner_name: "",
    partner_display_name: "",
    partner_address: "",
    partner_contact_phone_number: "",
    partner_website: "",
    partner_support_email: "",
    partner_contact_email: "",
  });

  const {
    partner_name,
    partner_display_name,
    partner_address,
    partner_contact_phone_number,
    partner_website,
    partner_support_email,
    partner_contact_email,
  } = state;

  const { partner1 } = useSelector((state) => state.partner1Reducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (partner1) {
      setChoice(true);
      setModalOn(false);
    }
  }, [partner1]);

  // const handleProceedClick = () => {
  //   setChoice(true);
  //   setModalOn(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !partner_name ||
      !partner_display_name ||
      !partner_address ||
      !partner_contact_phone_number ||
      !partner_website ||
      !partner_support_email ||
      !partner_contact_email
    ) {
      return;
    }
    dispatch(
      createPartner1(
        partner_name,
        partner_display_name,
        partner_address,
        partner_contact_phone_number,
        partner_website,
        partner_support_email,
        partner_contact_email
      )
    );
    setState({
      partner_name,
      partner_display_name,
      partner_address,
      partner_contact_phone_number,
      partner_website,
      partner_support_email,
      partner_contact_email,
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="p">
      <div className="grid grid-cols-3 pl-8 pr-[60px] mt-[50px]">
        <div className="col-span-1 flex flex-col gap-10">
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
                General Information
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Provide basic information about company
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={tickCircle} alt="tick-circle" className="w-6 h-6" />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Business Information
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Provide basic information about company
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={tickCircle} alt="tick-circle" className="w-6 h-6" />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Invite a team member
              </p>
              <p className="font-semibold text-xs text-[#8A8B9F]">
                Provide basic information about company
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 ml-[65px]">
          <p className="text-lg font-bold text-center">General Information</p>
          <p className="text-lg font-normal text-center text-xs">
            Basic information about your company
          </p>

          <form action="#" className="mt-[45px]" onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <div className="grid grid-cols-6 gap-4">
                  <div class="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="text-xs font-bold leading-4"
                    >
                      Company Full Name
                    </label>
                    <input
                      type="text"
                      name="partner_name"
                      id="full-name"
                      value={partner_name}
                      onChange={handleChange}
                      autoComplete="full-name"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="display-name"
                      className="text-xs font-bold leading-4"
                    >
                      Company Display Name
                    </label>
                    <input
                      type="text"
                      name="partner_display_name"
                      id="display-name"
                      value={partner_display_name}
                      onChange={handleChange}
                      autoComplete="display-name"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="full-address"
                      className="text-xs font-bold leading-4"
                    >
                      Full Address
                    </label>
                    <input
                      type="text"
                      name="partner_address"
                      id="full-address"
                      value={partner_address}
                      onChange={handleChange}
                      autoComplete="full-address"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="text-xs font-bold leading-4"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="partner_contact_phone_number"
                      id="phone-number"
                      value={partner_contact_phone_number}
                      onChange={handleChange}
                      autoComplete="phone-number"
                      className="[&::-webkit-inner-spin-button]:appearance-none block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="website"
                      className="text-xs font-bold leading-4"
                    >
                      Company Website
                    </label>
                    <input
                      type="text"
                      name="partner_website"
                      id="website"
                      value={partner_website}
                      onChange={handleChange}
                      autoComplete="given-website"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold leading-4"
                    >
                      Secondary Email
                    </label>
                    <input
                      type="email"
                      name="partner_support_email"
                      id="email"
                      value={partner_support_email}
                      onChange={handleChange}
                      autoComplete="given-email"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold leading-4"
                    >
                      Primary Email
                    </label>
                    <input
                      type="email"
                      name="partner_contact_email"
                      id="email"
                      value={partner_contact_email}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-[574px] right-[28px] p-[5px] rounded text-xs font-bold bg-darkPurple text-white"
              type="submit"
              onClick={props.handleNext}
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
      <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between mt-[79px] justify-center items-center">
        <button
          className="p-[5px] rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
          onClick={props.handleCancelClick}
        >
          Cancel
        </button>
        {/* <button
          className="p-1.5 rounded text-xs font-bold bg-[#8003CD] text-white"
          type="submit"
          // onClick={handleNext}
        >
          Proceed
        </button> */}
      </div>
    </div>
  );
};

export default PartnerForm1;
