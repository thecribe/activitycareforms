import React, { Fragment } from "react";

const About = ({ title, handler, entries }) => {
  const formOptions = {
    about_1: [
      "Participant",
      "Parent",
      "Family Member / Next of Kin",
      "Support Coordinator",
      "Local Area Coordinator",
      "Plan Manager",
      "Early Intervention Partner",
    ],
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5">{title}</h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-2/3 flex flex-col divide-y-2 items-center gap-5 p-5 shadow-sm rounded-md bg-white">
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Please select what describes you best?
              </label>
              <div className="flex gap-5  items-center flex-wrap">
                {formOptions.about_1.map((option, index) => {
                  return (
                    <div key={index} className="flex gap-2">
                      <input
                        type="checkbox"
                        id={index}
                        name="about_1"
                        checked={entries.about_1.includes(index.toString())}
                        value={option}
                        onChange={(e) => handler(e)}
                      />
                      <label>{option}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Name<span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    name="about_2"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.about_2.firstName}
                    onChange={(e) => handler(e)}
                  />
                  <label>First Name</label>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    name="about_2"
                    className="border border-gray-300 outline-none py-2 rounded-md"
                    value={entries.about_2.lastName}
                    onChange={(e) => handler(e)}
                  />
                  <label>Last Name</label>
                </div>
              </div>
            </div>
            {["3", "4", "5", "6"].some((item) =>
              entries.about_1.includes(item)
            ) ? (
              <div className="flex flex-col gap-5 w-full py-2">
                <label className="font-semibold">
                  Company Name<span className="text-red-700 font-bold">*</span>
                </label>
                <div className="flex gap-5 items-center ">
                  <div className="flex flex-col gap-2 w-2/3">
                    <input
                      type="text"
                      id="companyName"
                      name="about_3"
                      className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                      value={entries.about_3}
                      onChange={(e) => handler(e)}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                E-mail<span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="email"
                    id="email"
                    name="about_4"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.about_4}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Phone Number<span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="phone"
                    id="phoneNumber"
                    name="about_5"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.about_5}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
