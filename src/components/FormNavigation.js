import React, { Fragment } from "react";

const FormNavigation = ({ handler, formNav, navList }) => {
  //   console.log(formNav);
  return (
    <Fragment>
      <div className="relative  w-full mt-5">
        <div className="border absolute left-[10%] rounded-lg w-4/5 bg-white">
          <div className="w-4/4 bg-green-600 py-1 rounded-lg"></div>
        </div>
        <div className="flex justify-between absolute w-4/5 left-[10%] mt-[-20px]">
          {navList &&
            navList.map((list) => {
              return (
                <div
                  key={list.id}
                  onClick={() => handler(list)}
                  className=" cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div
                    className={`${
                      formNav.id === list.id
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }  hover:bg-gray-50 flex justify-center items-center border w-[50px] h-[50px] text-center rounded-full p-2`}
                  >
                    <p className="  ">{list.icon}</p>
                  </div>
                  <p className="text-xs">{list.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default FormNavigation;
