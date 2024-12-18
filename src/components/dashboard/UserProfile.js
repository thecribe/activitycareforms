import React, { Fragment } from "react";
import Button from "../Button";

const UserProfile = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full md:w-1/3 outline-blue-900  border border-gray-300 py-3 px-2 rounded-sm"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full md:w-1/3 outline-blue-900  border border-gray-300 py-3 px-2 rounded-sm"
          />
        </div>
        <div>
          <Button>Update Profile</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
