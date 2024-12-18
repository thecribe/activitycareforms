"use client";

import { formValidation } from "@/app/utils/InputValidation";
// import { doUserLogin } from "@/app/utils/apiCalls/auth";
// import { userLoginToken } from "@/app/utils/apiCalls/tokens";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { FaEye } from "react-icons/fa";

const LoginForm = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [formInput, setFormInput] = useState({
    email: {
      input: "",
      errorMessage: "",
    },
    password: {
      input: "",
      errorMessage: "",
    },
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    let output = formValidation.email(formInput.email.input);

    if (output && formInput.password.input.length < 1) {
      setFormInput({
        ...formInput,
        password: {
          ...formInput.password,
          errorMessage: "Enter a valid password",
        },
      });
      setLoading(false);
      return null;
    } else if (!output) {
      setFormInput({
        ...formInput,
        email: {
          ...formInput.email,
          errorMessage: "Invalid e-mail",
        },
      });
      setLoading(false);
      return null;
    }

    try {
      //   const userToken = await userLoginToken(
      //     formInput.email.input,
      //     formInput.password.input
      //   );
      //   userToken && (await doUserLogin(userToken));
      //   router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      setError("Please check your credentials");
    }
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm px-3">E-mail:</p>
          <input
            type="text"
            name="user-email"
            id="user_email"
            placeholder="Enter your email address"
            value={formInput.email.input}
            onChange={(e) =>
              setFormInput({
                ...formInput,
                email: {
                  ...formInput.email,
                  input: e.target.value,
                  errorMessage: "",
                },
              })
            }
            className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
          />
          <p className="text-xs text-red-500">{formInput.email.errorMessage}</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between px-3">
            <p className="text-sm ">Password:</p>
            <p
              className="text-xs cursor-pointer"
              onMouseEnter={() => setPasswordView(true)}
              onMouseLeave={() => setPasswordView(false)}
            >
              <FaEye />
            </p>
          </div>
          <input
            type={`${passwordView ? "text" : "password"}`}
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formInput.password.input}
            onChange={(e) =>
              setFormInput({
                ...formInput,
                password: {
                  ...formInput.email,
                  input: e.target.value,
                  errorMessage: "",
                },
              })
            }
            className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
          />
        </div>
        <Link href="#" className="text-xs text-purple-800">
          Forgot password?
        </Link>
        {!loading ? (
          <button
            disabled={
              !(
                formInput.email.input.length > 0 &&
                formInput.password.input.length > 0
              )
            }
            className="text-sm bg-blue-950 rounded-md p-3 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        ) : (
          <div className="text-sm bg-blue-950 rounded-md p-3 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm cursor-wait ">
            <p>Loading</p>
          </div>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </Fragment>
  );
};

export default LoginForm;
