import React, { Fragment } from "react";

const FormNavigation = ({ handler, formNav }) => {
  //   console.log(formNav);
  return (
    <Fragment>
      <div className="relative  w-full mt-5">
        <div className="border absolute left-[10%] rounded-lg w-4/5 bg-white">
          <div className="w-4/4 bg-green-600 py-1 rounded-lg"></div>
        </div>
        <div className="flex justify-between absolute w-4/5 left-[10%] mt-[-20px]">
          <div
            onClick={() => handler({ id: 1, title: "About You" })}
            className=" cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`${
                formNav.id === 1 ? "bg-green-600 text-white" : "bg-white"
              }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
            >
              <p className="  ">A</p>
            </div>
            <p className="text-xs">About You</p>
          </div>
          <div
            onClick={() => handler({ id: 2, title: "Participant Details" })}
            className=" cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`${
                formNav.id === 2 ? "bg-green-600 text-white" : "bg-white"
              }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
            >
              <p className="  ">A</p>
            </div>
            <p className="text-xs">Participant Details</p>
          </div>
          <div
            onClick={() => handler({ id: 3, title: "NDIS Details" })}
            className=" cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`${
                formNav.id === 3 ? "bg-green-600 text-white" : "bg-white"
              }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
            >
              <p className="  ">A</p>
            </div>
            <p className="text-xs">NDIS Details</p>
          </div>
          <div
            onClick={() => handler({ id: 4, title: "Billing" })}
            className=" cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`${
                formNav.id === 4 ? "bg-green-600 text-white" : "bg-white"
              }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
            >
              <p className="  ">A</p>
            </div>
            <p className="text-xs">Billing</p>
          </div>
          <div
            onClick={() => handler({ id: 5, title: "Summary" })}
            className=" cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <div
              className={`${
                formNav.id === 5 ? "bg-green-600 text-white" : "bg-white"
              }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
            >
              <p className="  ">A</p>
            </div>
            <p className="text-xs">Summary</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormNavigation;
