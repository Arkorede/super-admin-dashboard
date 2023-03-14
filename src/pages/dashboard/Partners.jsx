import React from "react";
import credbevyB from "./img/credbevyB.png";
import PartnerWallet from "./PartnerWallet";
import LoanRequested from "./LoanRequested";
import TabView from "./TabView/PartnerTab";
import CompanyProfile from "./CompanyProfile";

function Partners() {
  const walletTab = <PartnerWallet />;
  const LoanReq = <LoanRequested />;
  const companyPro = <CompanyProfile />;

  return (
    <div className="mt-[44px]">
      <div className="flex flex-end">
        <div className="flex items-center justify-center pl-[2px]">
          <img src={credbevyB} alt="B" className="w-[62px] h-[65px]" />
          <p className="font-bold text-[2.125rem] leading-9">
            CredBevy Finance Limited
          </p>
        </div>
      </div>
      <p className="mt-2.5 leading-6 tex-lg text-[#8A8B9F] px-5">
        Credbevyfinancelimited@gmail.com
      </p>
      <p className="mt-[5px] leading-6 tex-lg text-[#8A8B9F] px-5">
        +2349055380387
      </p>
      <div className="mt-[58px] px-5">
        <TabView
          tabs={[
            { name: "Wallet", content: walletTab },
            { name: "Loan Requested", content: LoanReq },
            { name: "Company Profile", content: companyPro },
            { name: "Users", content: "Users" },
            { name: "Loan History", content: "Loan History" },
            { name: "Integrations", content: "Integrations" },
            { name: "Loan Products", content: "Loan Products" },
          ]}
        />
      </div>
    </div>
  );
}

export default Partners;
