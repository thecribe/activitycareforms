import React, { Fragment } from "react";

const Summary = ({ title, entries }) => {
  const { about, participant, ndis, billing } = entries;

  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <h3 className="text-center border-b-2 pb-5 uppercase">
          {title + " OF YOUR ENTRIES"}
        </h3>
        <div className="w-full flex justify-center items-center">
          <div className="text-sm w-2/3 flex flex-col divide-y-2  gap-5 p-5 shadow-sm rounded-md bg-white">
            <div>
              <h3 className="text-blue-900 font-semibold">
                <span className="mr-5">1.</span>About Yourself
              </h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
