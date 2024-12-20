"use client";
import React, { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import { getUser, updateUser, userRegistration } from "@/app/utils/apiCalls";

const UserProfile = ({ user }) => {
  // const regis = async () => {
  //   console.log("regis");
  //   const reg = await userRegistration(
  //     "lawaloluwatobi128@gmail",
  //     "qwertyuiop1234"
  //   );

  //   console.log(reg);
  // };
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser1 = async () => {
      if (user.id) {
        const response = await getUser(user.id);

        if (response.data) {
          setUserDetails(response.data);
          setMessage(response.message);
        }

        setMessage(response.message);
      }
    };

    getUser1();
  }, []);

  const profileUpdateHandler = async () => {
    setLoading(true);
    // const usernew = await regis();
    if (user.id) {
      const response = await updateUser(user.id, userDetails);
      setMessage(response.message);
      return null;
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full text-center text-green-800">
          <p>{message}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full md:w-1/3 outline-blue-900  border border-gray-300 py-3 px-2 rounded-sm"
            value={userDetails.username ? userDetails.username : ""}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                username: e.target.value.trim().toLowerCase(),
              })
            }
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full md:w-1/3 outline-blue-900  border border-gray-300 py-3 px-2 rounded-sm"
            value={userDetails.email ? userDetails.email : ""}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                email: e.target.value.trim().toLowerCase(),
              })
            }
          />
        </div>
        <div
          onClick={profileUpdateHandler}
          className={`${loading ? "cursor-wait" : "cursor-pointer"}`}
        >
          <Button disabled={loading}>Update Profile</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
