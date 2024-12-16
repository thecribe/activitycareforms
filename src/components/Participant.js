import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";

const Participant = ({ title, handler, entries, radioHandler }) => {
  //   const [parentDetails, setParentDetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  //   const [otherInput, setOtherInput] = useState("");

  const genderList = [
    "Female - she/her",
    "Male - he/him",
    "Non-binary - they/them",
    "Prefer not to say",
    "Other",
  ];

  useEffect(() => {
    if (selectedOption.length > 0 && selectedOption !== "Other") {
      radioHandler(selectedOption, "participant_7");
    }
  }, [selectedOption]);

  useEffect(() => {
    if (entries.participant_7.length > 0) {
      setSelectedOption(entries.participant_7);
    }
  }, []);
  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5">{title}</h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-2/3 flex flex-col divide-y-2 items-center gap-5 p-5 shadow-sm rounded-md bg-white">
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Name
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    name="participant_1"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_1.firstName}
                    onChange={(e) => handler(e)}
                  />
                  <label>First Name</label>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    name="participant_1"
                    className="border border-gray-300 outline-none py-2 rounded-md"
                    value={entries.participant_1.lastName}
                    onChange={(e) => handler(e)}
                  />
                  <label>Last Name</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Age<span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="date"
                    id="age"
                    name="participant_2"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_2}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
              {/* <p>
                National 360 may support children that are up to the age of 9
                and their families with an early childhood practitioner: key
                worker. Our customer service team will provide more information
                when we receive your referral.
              </p> */}
            </div>
            {/* {parentDetails.length > 0 ? (
              <div className="flex flex-col gap-5 w-full py-2">
                {parentDetails.map((detail, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-5 w-full">
                          <div>
                              
                      </div>
                      <div className="flex gap-2 border rounded-lg p-2 text-blue-900 w-fit">
                        <p
                          className="cursor-pointer"
                          onClick={() => {
                            setParentDetails([
                              ...parentDetails,
                              {
                                parent_name: "",
                                parent_phone: " ",
                                parent_email: "",
                              },
                            ]);
                          }}
                        >
                          Add
                        </p>
                        <p
                          className="cursor-pointer"
                          onClick={() => {
                            let newArr = [...parentDetails];
                            newArr.splice(index, 1);
                            setParentDetails(newArr);
                          }}
                        >
                          delete
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                onClick={() =>
                  setParentDetails([
                    { parent_name: "", parent_phone: " ", parent_email: "" },
                  ])
                }
              >
                <Button>Add Parent Details</Button>
              </div>
            )} */}
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Email
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="email"
                    id="email"
                    name="participant_3"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_3}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Phone Number
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="number"
                    id="number"
                    name="participant_4"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_4}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Address
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex flex-col gap-5  ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="text"
                    id="address"
                    name="participant_5"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_5.address}
                    onChange={(e) => handler(e)}
                  />
                  <label>Street Address</label>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <input
                  type="text"
                  id="suburb"
                  name="participant_5"
                  className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                  value={entries.participant_5.suburb}
                  onChange={(e) => handler(e)}
                />
                <label>Suburb</label>
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <input
                  type="text"
                  id="postCode"
                  name="participant_5"
                  className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                  value={entries.participant_5.postCode}
                  onChange={(e) => handler(e)}
                />
                <label>Post Code</label>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Address - State
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="text"
                    id="state"
                    name="participant_6"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.participant_6}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Participant Gender
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-wrap gap-5 w-full">
                  {genderList.map((option, index) => {
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          id="gender"
                          name="participant_7"
                          className="border border-gray-300 outline-none py-2 px-1 rounded-md mr-2"
                          value={option}
                          checked={selectedOption === option}
                          onChange={() => setSelectedOption(option)}
                        />
                        {option}
                      </label>
                    );
                  })}
                  {selectedOption === "Other" ? (
                    <input
                      type="text"
                      id="state"
                      name="participant_7"
                      className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                      value={entries.participant_7}
                      onChange={(e) =>
                        radioHandler(e.target.value, "participant_7")
                      }
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Participant;
