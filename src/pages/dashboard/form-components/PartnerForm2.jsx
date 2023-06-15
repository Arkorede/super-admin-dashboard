import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { createPartner2 } from "../../../_redux/thunks";
import tickCircle from "../img/tickCircle.png";
import document from "../img/document.png";

const PartnerForm2 = (props) => {
  const dispatch = useDispatch();

  const { partner2 } = useSelector((state) => state.partner2Reducer);

  const [doc1Name, setDoc1Name] = useState("");
  const [doc2Name, setDoc2Name] = useState("");

  const [partner_RC_Number, setPartner_RC_Number] = useState("");
  const [cac_uploads, setCac_Uploads] = useState([{}]);
  const [license_uploads, setLicense_Uploads] = useState([{}]);

  useEffect(() => {
    if (partner2) {
      <div className="bg-white p-10 rounded-md">documents uploaded!</div>;
    }
  }, [partner2]);

  const handleNumberChange = (e) => {
    setPartner_RC_Number(e.target.value);
  };

  const handleFile1Change = (e) => {
    // const inputDocs = e.target.files;
    // console.log(inputDocs);
    // // setDoc1Name(inputDoc.name);

    // // let fillArr = new Array(1).fill(inputDoc.name);
    // setCac_Uploads(Array.from(inputDocs));
    const filesArray = [];

    for (let i = 0; i < e.target.files.length; i++) {
      filesArray.push(URL.createObjectURL(e.target.files[i]));
    }

    setCac_Uploads(filesArray);
    console.log(filesArray);
  };

  // const handleFile1Change = (e) => {
  //   const filesArray = Array.from(e.target.files);
  //   setFile(filesArray);
  // };

  const handleFile2Change = (e) => {
    // const inputDoc = e.target.files[0];
    // console.log(inputDoc);
    // setDoc2Name(inputDoc.name);
    // setLicense_Uploads([e.target.files[0]]);

    // const inputDocs = e.target.files;
    // console.log(inputDocs);

    // setLicense_Uploads(Array.from(inputDocs));
    const filesArray = [];

    for (let i = 0; i < e.target.files.length; i++) {
      filesArray.push(URL.createObjectURL(e.target.files[i]));
    }

    setLicense_Uploads(filesArray);
    console.log(filesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPartner2(partner_RC_Number, cac_uploads, license_uploads));
    // console.log(license_uploads);
    console.log(cac_uploads);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   file.forEach(fil) => {
  //     data.append('cac_uploads[]', cac_upload)
  //   }
  // }
  return (
    <div className="p">
      <div className="grid grid-cols-3 pl-8 pr-[60px] mt-[36px]">
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
              }}
            />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-xs text-darkPurple">
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

        <div className="col-span-1 ml-[25px]">
          <h1 className="text-center text-lg leading-[22px] font-bold">
            Business Information
          </h1>
          <h1 className="text-center text-xs font-normal mt-1 leading-[22px]">
            Basic information about your company
          </h1>
          <form
            className="mt-10"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="">
              <div className="">
                <div className="">
                  <div className="col-span-6">
                    <label
                      htmlFor="registrationNumber"
                      className="text-xs font-bold leading-4"
                    >
                      Business Registration Number
                    </label>
                    <input
                      type="number"
                      name="registrationNumber"
                      id="registrationNumber"
                      autoComplete=""
                      value={partner_RC_Number}
                      onChange={handleNumberChange}
                      className="[&::-webkit-inner-spin-button]:appearance-none block w-[375px] font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold leading-4">C.A.C Upload</p>
                  <div className="flex flex-col justify-center items-center gap-2 w-[375px] h-[110px] border border-dashed border-[#DCDCE4] mt-px">
                    <p className="font-bold text-sm text-[#8A8B9F]">
                      Drag & Drop
                    </p>
                    <div className="flex items-center justify-center">
                      <p className="text-xs font-semibold">
                        Your files here or
                      </p>
                      <label
                        htmlFor="cac_uploads"
                        className="cursor-pointer pl-1 text-xs font-semibold text-darkPurple focus-within:outline-none leading-[20px]"
                      >
                        <span>browse</span>
                        <input
                          id="cac_uploads"
                          name="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFile1Change}
                          accept=".pdf"
                          multiple
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold leading-4">
                    Company License Upload
                  </p>
                  <div className="flex flex-col justify-center items-center gap-2 w-[375px] h-[127px] border border-dashed border-[#DCDCE4] mt-px">
                    <p className="font-bold text-sm text-[#8A8B9F]">
                      Drag & Drop
                    </p>
                    <div className="flex items-center justify-center">
                      <p className="text-xs font-semibold">
                        Your files here or
                      </p>
                      <label
                        htmlFor="license_uploads"
                        className="cursor-pointer pl-1 text-xs font-semibold text-darkPurple focus-within:outline-none leading-[20px]"
                      >
                        <span>browse</span>
                        <input
                          id="license_uploads"
                          name="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFile2Change}
                          accept=".pdf"
                          multiple
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-[577px] right-[28px] p-[5px] rounded text-xs font-bold bg-darkPurple text-white"
              type="submit"
              onClick={props.handleNext}
            >
              Proceed
            </button>
          </form>
        </div>

        <div className="col-span-1 flex flex-col gap-[143px] mt-[151px]">
          <div className="flex justify-center items-center gap-4 ml-[78px]">
            <img src={document} alt="document" className="w-[19px] h-6" />
            <div className="flex flex-col gap-[11px]">
              <p className="font-semibold text-xs leading-[14px]">{doc1Name}</p>
              <progress id="partnerProgress" value="60" max="100"></progress>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 ml-[78px]">
            <img src={document} alt="document" className="w-[19px] h-6" />
            <div className="flex flex-col gap-[11px]">
              <p className="font-semibold text-xs leading-[14px]">{doc2Name}</p>
              <progress id="partnerProgress" value="60" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[40px] bg-[#F6F6F6] p-5 justify-between mt-[33px] justify-center items-center">
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

export default PartnerForm2;
