import React from "react";
import company from "../../components/shared/img/company.png";

export default function CompanyProfile() {
  return (
    <div className="">
      <form action="" className="mt-[3.375rem]">
        <div className="flex gap-[238px]">
          <label className="text-sm font-bold leading-[19.12px]">
            Company Name{" "}
            <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
              *
            </span>
          </label>
          <div className="">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="CompanyName"
                className="text-xs font-semibold leading-5 w-[448px] h-[35px] rounded py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
              />
              <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                Please contact us to change company name
              </small>
            </div>
            <div className="flex flex-col mt-[21px]">
              <div className="flex items-center justify-center">
                <span className="text-xs py-[8px] px-4 font-semibold leading-5 text-[#8A8B9F] w-[212px] h-[36.98px] bg-[#E5EAEF] rounded-l">
                  Credbevy.com/company/
                </span>
                <input
                  type="text"
                  placeholder="CompanyName"
                  className="text-xs font-semibold leading-5 w-[236px] h-[36.98px] py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                />
              </div>
              <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                Please contact us to change your slug
              </small>
            </div>
          </div>
        </div>

        <div className="flex gap-[222px] mt-[87px]">
          <label htmlFor="" className="text-sm font-bold leading-[19.12px]">
            Company Website{" "}
            <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
              *
            </span>
          </label>
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <span className="text-xs py-[8px] px-4 font-semibold leading-5 text-[#8A8B9F] w-[124px] h-[37px] bg-[#E5EAEF] rounded-l">
                Https://
              </span>
              <input
                type="text"
                placeholder="CompanyName.com"
                className="text-xs font-semibold leading-5 w-[324px] h-[37px] py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
              />
            </div>
            <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
              Please contact us to change your slug
            </small>
          </div>
        </div>

        <div className="flex gap-[244px] mt-[87px] mb-[50px]">
          <label htmlFor="" className="text-sm font-bold leading-[19.12px]">
            Company Logo{" "}
            <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
              *
            </span>
          </label>
          <div className="flex gap-12">
            <img
              src={company}
              alt="company logo"
              className="w-[45px] h-[45px]"
            />
            <div className="mt-2 flex justify-center rounded border border-solid border-[#E5EAEF] px-6 pt-[31px] pb-[31px] w-[355px] h-[142px]">
              <div className="text-center">
                <svg
                  width="24"
                  height="24"
                  className="mx-auto mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99982 24H20.0002C21.0608 24 22.0782 23.5787 22.8285 22.8285C23.5787 22.0782 24 21.0608 24 20.0002V3.99982C24 2.93917 23.5787 1.92183 22.8285 1.17154C22.0782 0.42126 21.0608 0 20.0002 0H3.99982C2.93917 0 1.92183 0.421331 1.17154 1.17154C0.42126 1.92176 0 2.93917 0 3.99982V20.0002C0 21.0608 0.421331 22.0782 1.17154 22.8285C1.92176 23.5787 2.93917 24 3.99982 24ZM20.0002 22.0001H3.99982C3.46968 22.0001 2.96078 21.7895 2.58586 21.4142C2.21058 21.0392 1.99991 20.5304 1.99991 20.0002V17.4151L7.00002 12.415L12.2952 17.7049C12.6852 18.0928 13.3151 18.0928 13.7053 17.7049L17.0002 14.4148L22.0004 19.4149V20.0002C22.0004 20.5303 21.7897 21.0392 21.4144 21.4142C21.0395 21.7894 20.5303 22.0001 20.0002 22.0001ZM3.99982 1.99969H20.0002C20.5303 1.99969 21.0392 2.21035 21.4141 2.58564C21.7894 2.96057 22.0001 3.46944 22.0001 3.9996V16.5847L17.7049 12.2947C17.315 11.9068 16.6851 11.9068 16.2951 12.2947L12.9999 15.5848L7.70468 10.2945C7.31474 9.90698 6.68484 9.90698 6.29492 10.2945L1.99973 14.5848V3.99978C1.99973 3.46963 2.2104 2.96074 2.58568 2.58582C2.96062 2.21053 3.46967 1.99969 3.99982 1.99969Z"
                    fill="#8A8B9F"
                  />
                </svg>

                <div className="flex text-sm text-[#8A8B9F] items-center justify-center">
                  <label
                    htmlFor="file-upload"
                    class="cursor-pointer text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
                  >
                    <span>Click</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="text-xs font-semibold pl-1">
                    or drag and drop to upload
                  </p>
                </div>
                <p className="text-[0.625rem] text-[#8A8B9F] leading-[20px]">
                  PNG, JPG (Max. 1 MB)
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
