"use server";

import { signIn, signOut } from "@/auth";
import axios from "axios";
import bcrypt from "bcryptjs/dist/bcrypt";
import { generateAccessRefreshToken } from "./tokens";
import jwt from "jsonwebtoken";

axios.defaults.baseURL = process.env.API_REQUEST_BASE_URL;

export const doUserLogin = async (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_KEY);

  const formdata = {
    email: decodedToken.email,
    password: decodedToken.password,
  };
  if (!formdata.email.length > 0 || !formdata.password.length > 0) {
    throw new Error("Some fields are empty!");
  }
  try {
    const response = await signIn("credentials", {
      email: formdata.email,
      password: formdata.password,
      redirect: false,
      // redirectTo: "/",
    });
  } catch (error) {
    throw new Error("Please check your credentials");
  }
};

export const userValidation = async (email, password) => {
  try {
    const response = await axios.get(`/api/user/single-user?email=${email}`);
    if (!response.data) {
      return { status: false, message: "User not found!" };
    }

    //Check and compare passwords
    const checkPassword = bcrypt.compareSync(
      password,
      response.data.data.password
    );

    if (!checkPassword) {
      return { status: false, message: "Password is incorrect" };
    }
    if (checkPassword) {
      //Make api call to receive access and refresh tokens
      const token = await generateAccessRefreshToken({
        userId: response.data.data.adminId,
      });

      return { ...response.data, ...token };
    }
  } catch (error) {
    return { status: false, message: "User not found!" };
  }
};

export const doUserLogout = async () => {
  await signOut({ redirectTo: "/login" });
};
