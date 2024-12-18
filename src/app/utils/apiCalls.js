"use server";
const result = {
  about: {
    about_1: "Nominee (Decision Maker)",
    about_2: { firstName: "Oluwatobi Lawal", lastName: "Oluwatobi Lawal" },
    about_3: "Apiskye",
    about_4: "lawaloluwatobi128@gmail.com",
    about_5: "08103862584",
  },
  participant: {
    participant_1: { firstName: "james", lastName: "james" },
    participant_2: "2024-12-13",
    participant_3: "lawaloluwatobi128@gmail.com",
    participant_4: "08103862584",
    participant_5: {
      address: "Obafemi Awolowo University",
      postCode: "Obafemi Awolowo University",
    },
    participant_6: "Osun",
    participant_7: "Female - she/her",
  },
  ndis: { ndis_1: "346456346454", ndis_2: "2024-12-12", ndis_3: "2024-12-14" },
  billing: {
    type: "Self Managed",
    contact_name: "Oluwatobi Lawal",
    company_name: "Apiskye",
    contact_email: "lawaloluwatobi128@gmail.com",
    phone_number: "08103862584",
  },
};
export const getAllEntry = async () => {
  return [{ ...result, entryId: 1, date: Date.now() }];
};

export const formSubmission = async (formInput) => {
  const response = JSON.stringify(formInput);

  if (!response) {
    return { status: false, message: "Error submitting form" };
  }

  return { data: response, message: "Form submtted successfully" };
};
