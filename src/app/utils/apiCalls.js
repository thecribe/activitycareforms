"use server";
import axios from "axios";
import { formValidation } from "./InputValidation";
var bcrypt = require("bcryptjs");

axios.defaults.baseURL = process.env.API_REQUEST_BASE_URL;

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const getAllEntry = async (entryId) => {
  try {
    const databaseRes = await axios.get("/api/entry");

    if (!databaseRes) {
      return { status: false, message: "Error submitting form" };
    }
    //Sending maillogic here

    return {
      data: databaseRes.data.data,
      message: "Form submtted successfully",
    };
  } catch (error) {
    return { error, message: "Error submitting form" };
  }
};

export const formSubmission = async (formInput, email) => {
  let output = false;
  const response = JSON.stringify(formInput);

  if (!response) {
    return { status: false, message: "Error submitting form" };
  }

  output = formValidation.email(email);

  if (!output) {
    return { status: false, message: "Error submitting form" };
  }

  const generateID = makeId(20);

  try {
    const databaseRes = await axios.post("/api/entry", {
      entryId: generateID,
      entry: response,
    });

    if (!databaseRes) {
      return { status: false, message: "Error submitting form" };
    }
    //Sending maillogic here

    return {
      data: databaseRes.data,
      email,
      message: "Form submtted successfully",
    };
  } catch (error) {
    return { error, message: "Error submitting form" };
  }
};

export const userRegistration = async (input, password) => {
  let email, username;
  if (input.includes("@")) {
    email = input;
  } else {
    username = input;
  }

  if (email && !username) {
    if (email.trim() === "" || password.trim() === "") {
      return "One or more credentials is incorrect";
    }
  } else if (!email && username) {
    if (username.trim() === "" || password.trim() === "") {
      return "One or more credentials is incorrect";
    }
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  let newUser;
  try {
    const response = await axios.post("/api/user", {
      email: input.includes("@") ? input : "",
      username: !input.includes("@") ? input : "",
      password: hashedPassword,
    });

    newUser = response.data;

    //Must add email message for first time access later
    return { adminId: newUser.data.id, message: newUser.message };
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (id, input) => {
  try {
    const databaseRes = await axios.put(`/api/user?id=${id}`, {
      email: input.email,
      username: input.username,
    });

    if (!databaseRes) {
      return { status: false, message: "Error Updating Profile" };
    }
    //Sending maillogic here

    return {
      data: databaseRes.data,
      message: "Profile Updated successfully",
    };
  } catch (error) {
    return { error, message: "Error Updating Profile" };
  }
};

export const getUser = async (id) => {
  try {
    const databaseRes = await axios.get(`/api/user/changepassword?id=${id}`);

    if (!databaseRes) {
      return { status: false, message: "Error retrieving Profile" };
    }
    //Sending maillogic h

    return {
      data: {
        email: databaseRes.data.data.email,
        username: databaseRes.data.data.username,
      },
      message: "Profile retrieved successfully",
    };
  } catch (error) {
    return { error, message: "Error retrieving Profil" };
  }
};
export const updatePassword = async (id, input) => {
  if (input === "") {
    return { message: "Please input a paswword" };
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(input, salt);

  try {
    const databaseRes = await axios.put(`/api/user/single-user?id=${id}`, {
      password: hashedPassword,
    });

    if (!databaseRes) {
      return { status: false, message: "Unable to Change Password" };
    }
    //Sending maillogic h

    return {
      status: true,
      message: "Password changed successfully",
    };
  } catch (error) {
    return { error, message: "Unable to ChangePassword" };
  }
};
