import React, { Fragment } from "react";

const NDIS = ({ entries, handler, title }) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5">{title}</h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-2/3 flex flex-col divide-y-2 items-center gap-5 p-5 shadow-sm rounded-md bg-white">
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                NDIS Plan Number
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="number"
                    id="ndis_number"
                    name="ndis_1"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.ndis_1}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Plan Start Date
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="date"
                    id="ndis_start_date"
                    name="ndis_2"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.ndis_2}
                    onChange={(e) => handler(e)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full py-2">
              <label className="font-semibold">
                Plan End Date
                <span className="text-red-700 font-bold">*</span>
              </label>
              <div className="flex gap-5 items-center ">
                <div className="flex flex-col gap-2 w-2/3">
                  <input
                    type="date"
                    id="ndis_end_date"
                    name="ndis_3"
                    className="border border-gray-300 outline-none py-2 px-1 rounded-md"
                    value={entries.ndis_3}
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

export default NDIS;
