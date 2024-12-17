"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Fragment>
      <section className="bg-blue-900 w-full py-1 ">
        <div className="px-10 text-white text-xs my-0 mx-auto md:w-2/3 md:flex justify-between items-center">
          <h2 className=" uppercase text-center">
            At Activity care services “Engaging is our calling”
          </h2>
          <div className=" hidden bg-red-500 py-3 px-3 md:flex gap-5 justify-center items-center">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </section>
      <section className=" w-full py-4 border-b-2">
        <div className="w-full px-5 md:w-2/3 mx-auto my-0 flex  justify-between items-center">
          <div className="w-[150px] ">
            <img src="/assets/Activity-Care-new-logo.png" />
          </div>
          <div className="hidden text-blue-900 md:flex gap-5 justify-between items-center w-2/3 text-sm uppercase">
            <div className="flex justify-center items-center gap-5 ">
              <p className="hover:text-blue-700 cursor-pointer uppercase">
                FAQ
              </p>
              <p className="hover:text-blue-700 cursor-pointer uppercase">
                Privacy Policy
              </p>
            </div>
            <p>Login</p>
          </div>
          {!mobileMenu && (
            <div
              className="md:hidden cursor-pointer p-3"
              onClick={() => setMobileMenu(true)}
            >
              <div className="hamburger "></div>
            </div>
          )}
        </div>

        {mobileMenu && (
          <div className="fixed top-0 w-full h-full z-10">
            <div
              className=" absolute top-0 w-full h-full bg-black opacity-60 z-20"
              onClick={() => {
                setMobileMenu(false);
              }}
            ></div>
            <div className="absolute right-0 w-1/2 h-full bg-white z-30 p-5">
              <div className="w-full flex justify-end">
                <p
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                  className="text-xl cursor-pointer text-blue-900"
                >
                  <IoClose />
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col justify-center  gap-5 ">
                  <p className="hover:text-blue-700 cursor-pointer uppercase">
                    FAQ
                  </p>
                  <p className="hover:text-blue-700 cursor-pointer uppercase">
                    Privacy Policy
                  </p>
                </div>
                <p className="hover:text-blue-700 cursor-pointer uppercase">
                  Login
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Header;
