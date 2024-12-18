import ChangePassword from "@/components/dashboard/ChangePassword";
import UserProfile from "@/components/dashboard/UserProfile";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="bg-white w-full h-full p-5 flex flex-col gap-5 ">
        <div className="flex justify-between">
          <h3 className="text-blue-900 font-bold">User Profile</h3>
          {/* <p className="underline text-blue-900">Download all entries</p> */}
        </div>
        <div className="w-full">
          <UserProfile />
        </div>
        <div className="w-full">
          <ChangePassword />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
