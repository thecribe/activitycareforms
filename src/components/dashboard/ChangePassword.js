"use client";
import React, { Fragment, useState } from "react";
import Button from "../Button";
import { updatePassword } from "@/app/utils/apiCalls";

const ChangePassword = ({ userId }) => {
  const [formInput, setFormInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const passwordUpdateHandler = async () => {
    setLoading(true);
    const response = await updatePassword(userId, formInput);
    if (response.status) {
      setMessage(response.message);
      setLoading(false);
      return null;
    }

    setMessage(response.message);
    setLoading(false);
  };
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
            value={formInput}
            onChange={(e) => setFormInput(e.target.value.trim())}
          />
        </div>

        <div
          onClick={passwordUpdateHandler}
          className={`${loading ? "cursor-wait" : "cursor-pointer"}`}
        >
          <Button disabled={loading}>Update Password</Button>
        </div>
        <div className="w-full  text-green-800">
          <p>{message}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
