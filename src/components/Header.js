import Link from "next/link";
import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <section className="bg-blue-900 w-full py-1 ">
        <div className="px-10 text-white text-xs my-0 mx-auto w-2/3 flex justify-between items-center">
          <h2 className=" uppercase">
            At Activity care services “Engaging is our calling”
          </h2>
          <div className="bg-red-500 py-3 px-3 flex gap-5 justify-center items-center">
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
          </div>
        </div>
      </section>
      <section className=" w-full py-4 border-b-2">
        <div className="w-2/3 mx-auto my-0 flex  justify-between items-center">
          <div className="w-[150px] ">
            <img src="/assets/Activity-Care-new-logo.png" />
          </div>
          <div className="text-blue-900 flex gap-5 justify-between items-center w-2/3 text-sm uppercase">
            <div className="flex justify-center items-center gap-5 ">
              <p className="hover:text-blue-700 cursor-pointer uppercase">
                Home
              </p>
              <Link href="/">
                <p className="hover:text-blue-700 cursor-pointer uppercase">
                  Forms
                </p>
              </Link>
              <p className="hover:text-blue-700 cursor-pointer uppercase">
                FAQ
              </p>
              <p className="hover:text-blue-700 cursor-pointer uppercase">
                Privacy Policy
              </p>
            </div>
            <p>Login</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
