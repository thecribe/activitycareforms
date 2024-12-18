import React, { Fragment } from "react";
import Button from "../Button";

const ChangePassword = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-blue-900 font-bold">User Profile</h3>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="username">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full md:w-1/3 outline-blue-900  border border-gray-300 py-3 px-2 rounded-sm"
          />
        </div>
        <div>
          <Button>Update Password</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
