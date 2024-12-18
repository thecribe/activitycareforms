import Link from "next/link";
import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="bg-white w-full h-full ">
        <div className="w-full pt-7 pl-5 flex gap-5 items-center border-b-2 pb-5">
          <div className="hamburger"></div>
          <h3 className="text-blue-900 font-semibold">Sidebar</h3>
        </div>
        <div className="flex w-full divide-y-2 flex-col">
          <Link href="/dashboard/entries" className="p-5">
            <h3>Form Entries</h3>
          </Link>
          <Link href="/dashboard/user" className="p-5">
            <h3>User Profile</h3>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
