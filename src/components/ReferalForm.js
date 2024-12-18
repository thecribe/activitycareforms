"use client";
import React, { Fragment, useState } from "react";
import FormNavigation from "./FormNavigation";
import About from "./About";
import Link from "next/link";
import Button from "./Button";
import Participant from "./Participant";
import NDIS from "./NDIS";
import Billing from "./Billing";
import Summary from "./Summary";
import { FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";
import { LuBookCheck } from "react-icons/lu";
import { formSubmission } from "@/app/utils/apiCalls";

const ReferalForm = () => {
  const [formNav, setFormNavigation] = useState({
    id: 1,
    icon: "A",
    title: "About Yourself",
  });
  const titleList = [
    { id: 1, icon: <FaUser />, title: "About Yourself" },
    { id: 2, icon: <FaPeopleGroup />, title: "Participant Details" },
    { id: 3, icon: <RiHealthBookLine />, title: "NDIS Details" },
    { id: 4, icon: <FaMoneyBill />, title: "Billing" },
    { id: 5, icon: <LuBookCheck />, title: "Summary" },
  ];

  const editHandler = (type) => {
    setFormNavigation(titleList[type - 1]);
  };

  const [forminput, setFormInput] = useState({
    about: {
      about_1: "",

      about_2: { firstName: "", lastName: "" },
      about_3: "",
      about_4: "",
      about_5: "",
    },
    participant: {
      participant_1: { firstName: "", lastName: "" },
      participant_2: "",
      participant_3: "",
      participant_4: "",
      participant_5: { address: "", postCode: "" },
      participant_6: "",
      participant_7: "",
    },
    ndis: {
      ndis_1: "",
      ndis_2: "",
      ndis_3: "",
    },
    billing: {
      type: "",
      contact_name: "",
      company_name: "",
      contact_email: "",
      phone_number: "",
    },
  });

  const pageNavHandler = (type) => {
    switch (type) {
      case "Prev":
        if (formNav.id > 1) {
          setFormNavigation(titleList[formNav.id - 2]);
        }
        break;
      case "Next":
        if (formNav.id < 5) {
          setFormNavigation(titleList[formNav.id]);
        }
        break;

      default:
        break;
    }
  };

  const formSubmissionHandler = async () => {
    const response = await formSubmission(forminput);

    console.log(response.data);
  };

  const forminputHandler = (e) => {
    switch (e.target.name) {
      case "about_2":
        if (e.target.value.length > 0) {
          switch (e.target.id) {
            case "firstName":
              setFormInput({
                ...forminput,
                about: {
                  ...forminput.about,
                  about_2: {
                    ...forminput.about.about_2,
                    firstName: e.target.value,
                  },
                },
              });
              break;
            case "lastName":
              setFormInput({
                ...forminput,
                about: {
                  ...forminput.about,
                  about_2: {
                    ...forminput.about.about_2,
                    lastName: e.target.value,
                  },
                },
              });
              break;

            default:
              break;
          }
        }
        break;
      case "about_3":
        setFormInput({
          ...forminput,
          about: {
            ...forminput.about,
            about_3: e.target.value,
          },
        });
        break;
      case "about_4":
        setFormInput({
          ...forminput,
          about: {
            ...forminput.about,
            about_4: e.target.value,
          },
        });
        break;
      case "about_5":
        setFormInput({
          ...forminput,
          about: {
            ...forminput.about,
            about_5: e.target.value,
          },
        });
        break;
      case "participant_1":
        if (e.target.value.length > 0) {
          switch (e.target.id) {
            case "firstName":
              setFormInput({
                ...forminput,
                participant: {
                  ...forminput.participant,
                  participant_1: {
                    ...forminput.participant.participant_1,
                    firstName: e.target.value,
                  },
                },
              });
              break;
            case "lastName":
              setFormInput({
                ...forminput,
                participant: {
                  ...forminput.participant,
                  participant_1: {
                    ...forminput.participant.participant_1,
                    lastName: e.target.value,
                  },
                },
              });
              break;

            default:
              break;
          }
        }
        break;
      case "participant_2":
        setFormInput({
          ...forminput,
          participant: {
            ...forminput.participant,
            participant_2: e.target.value,
          },
        });
        break;
      case "participant_3":
        setFormInput({
          ...forminput,
          participant: {
            ...forminput.participant,
            participant_3: e.target.value,
          },
        });
        break;
      case "participant_4":
        setFormInput({
          ...forminput,
          participant: {
            ...forminput.participant,
            participant_4: e.target.value,
          },
        });
        break;
      case "participant_5":
        if (e.target.value.length > 0) {
          switch (e.target.id) {
            case "address":
              setFormInput({
                ...forminput,
                participant: {
                  ...forminput.participant,
                  participant_5: {
                    ...forminput.participant.participant_5,
                    address: e.target.value,
                  },
                },
              });
              break;
            // case "suburb":
            //   setFormInput({
            //     ...forminput,
            //     participant: {
            //       ...forminput.participant,
            //       participant_5: {
            //         ...forminput.participant.participant_5,
            //         suburb: e.target.value,
            //       },
            //     },
            //   });
            //   break;
            case "postCode":
              setFormInput({
                ...forminput,
                participant: {
                  ...forminput.participant,
                  participant_5: {
                    ...forminput.participant.participant_5,
                    postCode: e.target.value,
                  },
                },
              });
              break;

            default:
              break;
          }
        }
        break;
      case "participant_6":
        setFormInput({
          ...forminput,
          participant: {
            ...forminput.participant,
            participant_6: e.target.value,
          },
        });
        break;
      case "ndis_1":
        setFormInput({
          ...forminput,
          ndis: {
            ...forminput.ndis,
            ndis_1: e.target.value,
          },
        });
        break;
      case "ndis_2":
        setFormInput({
          ...forminput,
          ndis: {
            ...forminput.ndis,
            ndis_2: e.target.value,
          },
        });
        break;
      case "ndis_3":
        setFormInput({
          ...forminput,
          ndis: {
            ...forminput.ndis,
            ndis_3: e.target.value,
          },
        });
        break;
      case "contact_name":
        setFormInput({
          ...forminput,
          billing: {
            ...forminput.billing,
            contact_name: e.target.value,
          },
        });
        break;
      case "phone_number":
        setFormInput({
          ...forminput,
          billing: {
            ...forminput.billing,
            phone_number: e.target.value,
          },
        });
        break;
      case "company_name":
        setFormInput({
          ...forminput,
          billing: {
            ...forminput.billing,
            company_name: e.target.value,
          },
        });
        break;
      case "contact_email":
        setFormInput({
          ...forminput,
          billing: {
            ...forminput.billing,
            contact_email: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };
  // handler radio button
  const radioButtonHandler = (input, form_id) => {
    switch (form_id) {
      case "about_1":
        setFormInput({
          ...forminput,
          about: {
            ...forminput.about,
            about_1: input,
          },
        });
        break;
      case "participant_7":
        setFormInput({
          ...forminput,
          participant: {
            ...forminput.participant,
            participant_7: input,
          },
        });
        break;
      case "billing_1":
        setFormInput({
          ...forminput,
          billing: {
            ...forminput.billing,
            type: input,
          },
        });
        break;

      default:
        break;
    }
  };

  let output;
  switch (formNav.id) {
    case 1:
      output = (
        <About
          title={formNav.title}
          handler={forminputHandler}
          entries={forminput.about}
          radioHandler={radioButtonHandler}
        />
      );
      break;
    case 2:
      output = (
        <Participant
          title={formNav.title}
          handler={forminputHandler}
          radioHandler={radioButtonHandler}
          entries={forminput.participant}
        />
      );
      break;
    case 3:
      output = (
        <NDIS
          title={formNav.title}
          handler={forminputHandler}
          entries={forminput.ndis}
        />
      );
      break;
    case 4:
      output = (
        <Billing
          title={formNav.title}
          entries={forminput.billing}
          radioHandler={radioButtonHandler}
          handler={forminputHandler}
        />
      );
      break;
    case 5:
      output = (
        <Summary
          entries={forminput}
          title={formNav.title}
          editButton={true}
          editHandler={editHandler}
        />
      );
      break;

    default:
      break;
  }

  return (
    <Fragment>
      <section className="bg-white w-full py-5 px-5 ">
        <div className=" md:w-2/3 mx-auto my-0 flex flex-col gap-5">
          <div className="bg-gray-50 h-fit md:h-[15vh] py-5 px-3 shadow-sm rounded-sm flex flex-col gap-3">
            <div className="flex gap-2 items-center text-blue-900 font-semibold">
              <h3>{`Step ${formNav.id} of 5`}</h3>
              <h3>{formNav.title}</h3>
            </div>
            <div className="hidden md:block">
              <FormNavigation
                handler={(input) => {
                  setFormNavigation(input);
                }}
                navList={titleList}
                formNav={formNav}
              />
            </div>
          </div>
          <div className="bg-gray-50 py-5 px-3 shadow-sm rounded-sm">
            {output}
          </div>
          <div className="flex justify-between w-full px-5 md:w-2/3 mx-auto my-0">
            <div onClick={() => pageNavHandler("Prev")}>
              <Button>Prev</Button>
            </div>
            {formNav.id !== 5 ? (
              <div onClick={() => pageNavHandler("Next")}>
                <Button>Next</Button>
              </div>
            ) : (
              <div onClick={() => formSubmissionHandler()}>
                <Button>Submit Form</Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ReferalForm;
