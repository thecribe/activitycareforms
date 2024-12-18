import React, { Fragment } from "react";
import Card from "../Card";
import { IoClose } from "react-icons/io5";
import Summary from "../Summary";

const Modal = ({ modal_title, modalClose, children }) => {
  return (
    <Fragment>
      <div className="fixed top-0 w-full h-full z-30 left-0 flex  md:justify-center items-center">
        <div className="absolute top-0 w-full h-full opacity-65 bg-black"></div>
        <div className="bg-gray-50 absolute w-full md:w-1/2 h-5/6  rounded-lg flex flex-col gap-5 p-5">
          <div className="w-full flex justify-between ">
            <h3 className="text-blue">{modal_title}</h3>
            <p
              onClick={modalClose}
              className="text-xl cursor-pointer text-blue-900 "
            >
              <IoClose />
            </p>
          </div>
          <div className="h-full w-full overflow-y-auto">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;