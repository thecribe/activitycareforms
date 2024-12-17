import React, { Fragment } from "react";
import { MdEdit } from "react-icons/md";

const Summary = ({ title, entries, editHandler }) => {
  const { about, participant, ndis, billing } = entries;

  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5 uppercase">
          {title + " OF YOUR ENTRIES"}
        </h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-full md:w-2/3 flex flex-col divide-y-2  gap-5 p-5 shadow-sm rounded-md bg-white">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center border-b-2 border-blue-900 pb-2">
                <h2 className="text-blue-900 font-semibold">
                  <span className="mr-5">1. </span>About Yourself
                </h2>
                <div
                  className="w-fit flex justify-center items-center gap-2 text-blue-900 font-semibold cursor-pointer"
                  onClick={() => editHandler(1)}
                >
                  <MdEdit />
                  Edit
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="font-semibold">
                    Please select what describes you best?
                  </h3>
                  <p className="ml-5 mt-3">{about.about_1}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p className="ml-5 mt-3">
                    {about.about_2.firstName + " " + about.about_2.lastName}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">E-mail Address</h3>
                  <p className="ml-5 mt-3">{about.about_4}</p>
                </div>
                {about.about_1 === "Nominee (Decision Maker)" ||
                about.about_1 === "Others" ? (
                  <div>
                    <h3 className="font-semibold">Position</h3>
                    <p className="ml-5 mt-3">{about.about_3}</p>
                  </div>
                ) : null}
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="ml-5 mt-3">{about.about_5}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center border-b-2 border-blue-900 pb-2 pt-2">
                <h2 className="text-blue-900 font-semibold">
                  <span className="mr-5">2. </span>Participant Details
                </h2>
                <div
                  className="w-fit flex justify-center items-center gap-2 text-blue-900 font-semibold cursor-pointer"
                  onClick={() => editHandler(2)}
                >
                  <MdEdit />
                  Edit
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="font-semibold">Participant Name</h3>
                  <p className="ml-5 mt-3">
                    {participant.participant_1.firstName +
                      " " +
                      participant.participant_1.lastName}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Participant Age</h3>
                  <p className="ml-5 mt-3">{participant.participant_2}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Participant Email</h3>
                  <p className="ml-5 mt-3">{participant.participant_3}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Participant Phone Number</h3>
                  <p className="ml-5 mt-3">{participant.participant_4}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Participant Address</h3>
                  <p className="ml-5 mt-3">
                    <span className="font-semibold">Address: </span>
                    {participant.participant_5.address}
                  </p>
                  <p className="ml-5 mt-3">
                    <span className="font-semibold">Post Code: </span>
                    {participant.participant_5.postCode}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">State</h3>
                  <p className="ml-5 mt-3">{participant.participant_6}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Participant Gender</h3>
                  <p className="ml-5 mt-3">{participant.participant_7}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center border-b-2 border-blue-900 pb-2 pt-2">
                <h2 className="text-blue-900 font-semibold">
                  <span className="mr-5">3. </span>NDIS Details
                </h2>
                <div
                  className="w-fit flex justify-center items-center gap-2 text-blue-900 font-semibold cursor-pointer"
                  onClick={() => editHandler(3)}
                >
                  <MdEdit />
                  Edit
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="font-semibold">NDIS Plan Number</h3>
                  <p className="ml-5 mt-3">{ndis.ndis_1}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Plan Start Date</h3>
                  <p className="ml-5 mt-3">{ndis.ndis_2}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Plan End Date</h3>
                  <p className="ml-5 mt-3">{ndis.ndis_3}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center border-b-2 border-blue-900 pb-2 pt-2">
                <h2 className="text-blue-900 font-semibold">
                  <span className="mr-5">4. </span>Billing
                </h2>
                <div
                  className="w-fit flex justify-center items-center gap-2 text-blue-900 font-semibold cursor-pointer"
                  onClick={() => editHandler(4)}
                >
                  <MdEdit />
                  Edit
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="font-semibold">
                    How is the plan funding managed?
                  </h3>
                  <p className="ml-5 mt-3">{billing.type}</p>
                </div>
                {billing.type === "Self Managed" && (
                  <div>
                    <h3 className="font-semibold">Billing Contact Name</h3>
                    <p className="ml-5 mt-3">{billing.contact_name}</p>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold">
                    {billing.type === "Self Managed"
                      ? " Billing Contact Email"
                      : "Plan Manager Email"}
                  </h3>
                  <p className="ml-5 mt-3">{billing.contact_email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {billing.type === "Self Managed"
                      ? " Billing Phone Number"
                      : "Plan Manager Phone Number"}
                  </h3>
                  <p className="ml-5 mt-3">{billing.phone_number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
