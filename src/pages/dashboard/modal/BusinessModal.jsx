import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPartner2 } from "../../../_redux/thunks";
import api from "./../../../axios/api";
import InviteModal from "./InviteModal";

const BusinessModal = ({ setBusinessModalOn }) => {
  const [inviteModalOn, setInviteModalOn] = useState(false);

  const handleProceedClick = () => {
    setBusinessModalOn(false);
    setInviteModalOn(true);
  };

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
            <div className="bg-white w-[1200px] h-[590px]">
              <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between items-center">
                <p className="font-bold text-sm">Add Partners</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-3 pl-8 pr-[60px] mt-[50px]">
                <div className="col-span-1 flex flex-col gap-10">
                  <div className="flex gap-4">
                    <img
                      src={tickCircle}
                      alt="tick-circle"
                      className="w-6 h-6"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
                        opacity: 0.5,
                      }}
                    />
                    <div className="flex flex-col gap-px">
                      <p className="font-semibold text-xs text-[#8003CD] text-opacity-50">
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
                          "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
                      }}
                    />
                    <div className="flex flex-col gap-px">
                      <p className="font-semibold text-xs text-[#8003CD]">
                        Business Information
                      </p>
                      <p className="font-semibold text-xs text-[#8A8B9F]">
                        Provide basic information about company
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src={tickCircle}
                      alt="tick-circle"
                      className="w-6 h-6"
                    />
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
                  <form
                    className=""
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="">
                      <div className="">
                        <div className="grid grid-cols-6 gap-4">
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
                              className="block w-[375px] font-normal rounded border border-solid border-[#DCDCE4] px-2.5 py-1.5 text-sm sm:leading-6 outline-none"
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="text-xs font-bold leading-4">
                            C.A.C Upload
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
                                htmlFor="cac_uploads"
                                class="cursor-pointer pl-1 text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
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

                        <div className="mt-6">
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
                                class="cursor-pointer pl-1 text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
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
                    {/* <button type="submit">ggf</button> */}
                  </form>
                </div>

                <div className="col-span-1 flex flex-col gap-[143px] mt-[151px]">
                  <div className="flex justify-center items-center gap-4 ml-[78px]">
                    <img
                      src={document}
                      alt="document"
                      className="w-[19px] h-6"
                    />
                    <div className="flex flex-col gap-[11px]">
                      <p className="font-semibold text-xs leading-[14px]">
                        {doc1Name}
                      </p>
                      <progress
                        id="partnerProgress"
                        value="60"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4 ml-[78px]">
                    <img
                      src={document}
                      alt="document"
                      className="w-[19px] h-6"
                    />
                    <div className="flex flex-col gap-[11px]">
                      <p className="font-semibold text-xs leading-[14px]">
                        {doc2Name}
                      </p>
                      <progress
                        id="partnerProgress"
                        value="60"
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between mt-[46px] justify-center items-center">
                <button
                  className="p-1.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="p-1.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  type="submit"
                  onClick={handleProceedClick}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {inviteModalOn && <InviteModal setInviteModalOn={setInviteModalOn} />}
    </div>
  );
};

export default BusinessModal;
