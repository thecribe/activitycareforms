import React, { Fragment, useEffect, useState } from "react";

const Billing = ({ title, radioHandler, entries, handler }) => {
  const [selectedOption, setSelectedOption] = useState({ type: "" });
  const billingList = [
    "NDIA or Agency Managed",
    "Self Managed",
    "Plan Managed",
  ];

  useEffect(() => {
    if (selectedOption.type.length > 0) {
      radioHandler(selectedOption.type, "billing_1");
    }
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption({ ...selectedOption, type: entries.type });
  }, []);
  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5">{title}</h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-2/3 flex flex-col divide-y-2 items-center gap-5 p-5 shadow-sm rounded-md bg-white">
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                How is the plan funding managed?
              </label>
              <div className="flex flex-wrap gap-5 w-full">
                {billingList.map((option, index) => {
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        id={`billing${index}`}
                        name="billing_1"
                        className="border border-gray-300 outline-none py-2 px-1 rounded-md mr-2"
                        value={option}
                        checked={selectedOption.type === option}
                        onChange={() =>
                          setSelectedOption({ ...selectedOption, type: option })
                        }
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>
            {selectedOption.type === "Self Managed" ||
            selectedOption.type === "Plan Managed" ? (
              <div className="w-full">
                <div className="flex flex-col gap-5 w-full py-2">
                  <label className="font-semibold">
                    Billing Contact Name
                    <span className="text-red-700 font-bold">*</span>
                  </label>
                  <div className="flex gap-5 items-center ">
                    <div className="flex flex-col gap-2 w-2/3">
                      <input
                        type="text"
                        id="billing-contact"
                        name="contact_name"
                        className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                        value={entries.contact_name}
                        onChange={(e) => handler(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full py-2">
                  <label className="font-semibold">
                    Billing Company Name
                    <span className="text-red-700 font-bold">*</span>
                  </label>
                  <div className="flex gap-5 items-center ">
                    <div className="flex flex-col gap-2 w-2/3">
                      <input
                        type="text"
                        id="billing-company"
                        name="company_name"
                        className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                        value={entries.company_name}
                        onChange={(e) => handler(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full py-2">
                  <label className="font-semibold">
                    Billing Contact Email
                    <span className="text-red-700 font-bold">*</span>
                  </label>
                  <div className="flex gap-5 items-center ">
                    <div className="flex flex-col gap-2 w-2/3">
                      <input
                        type="text"
                        id="billing-email"
                        name="contact_email"
                        className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                        value={entries.contact_email}
                        onChange={(e) => handler(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-full py-2">
                  <label className="font-semibold">
                    Billing contact Phone Number
                    <span className="text-red-700 font-bold">*</span>
                  </label>
                  <div className="flex gap-5 items-center ">
                    <div className="flex flex-col gap-2 w-2/3">
                      <input
                        type="phone"
                        id="company_phone"
                        name="phone_number"
                        className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                        value={entries.phone_number}
                        onChange={(e) => handler(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Billing;
