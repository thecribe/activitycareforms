export const formValidation = {
  email: (input) => {
    if (input.includes("@") && input.includes(".")) {
      return true;
    } else {
      return false;
    }
  },
};

export const membershipFormValidation = {
  emptyInput: (input) => {
    if (!(input.length > 0)) {
      return false;
    } else {
      return true;
    }
  },

  email: (input) => {
    if (input.includes("@") && input.includes(".")) {
      return true;
    } else {
      return false;
    }
  },
  phoneNumber: (input) => {
    let intInput;

    try {
      intInput = Number(input);
    } catch (error) {
      intInput = false;
    }
    if (intInput) {
      return true;
    } else {
      return false;
    }
  },
};

export const removeSpaceAndChar = (string) => {
  return string
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-");
};
