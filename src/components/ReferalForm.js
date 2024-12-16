"use client";
import React, { Fragment, useState } from "react";
import FormNavigation from "./FormNavigation";
import About from "./About";
import Link from "next/link";
import Button from "./Button";
import Participant from "./Participant";
import NDIS from "./NDIS";
import Billing from "./Billing";

const ReferalForm = () => {
  const [formNav, setFormNavigation] = useState({
    id: 1,
    title: "About Yourself",
  });

  const [forminput, setFormInput] = useState({
    about: {
      about_1: [],
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
      participant_5: { address: "", suburb: "", postCode: "" },
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

  const forminputHandler = (e) => {
    switch (e.target.name) {
      case "about_1":
        const index = forminput.about.about_1.indexOf(e.target.id.toString());

        if (index !== -1) {
          let newAboutArr1 = [...forminput.about.about_1];
          newAboutArr1.splice(index, 1);
          setFormInput({
            ...forminput,
            about: {
              ...forminput.about,
              about_1: [...newAboutArr1],
            },
          });
        } else {
          setFormInput({
            ...forminput,
            about: {
              ...forminput.about,
              about_1: [...forminput.about.about_1, e.target.id],
            },
          });
        }
        break;
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
            case "suburb":
              setFormInput({
                ...forminput,
                participant: {
                  ...forminput.participant,
                  participant_5: {
                    ...forminput.participant.participant_5,
                    suburb: e.target.value,
                  },
                },
              });
              break;
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
  console.log(forminput.billing);
  let output;
  switch (formNav.id) {
    case 1:
      output = (
        <About
          title={formNav.title}
          handler={forminputHandler}
          entries={forminput.about}
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
      output = formNav.title;
      break;

    default:
      output = formNav.title;
      break;
  }
  return (
    <Fragment>
      <section className="bg-white-50 w-full py-5">
        <div className=" w-2/3 mx-auto my-0 flex flex-col gap-5">
          <div className="bg-gray-50 h-[15vh] py-5 px-3 shadow-sm rounded-sm flex flex-col gap-3">
            <div className="flex gap-2 items-center text-blue-900 font-semibold">
              <h3>{`Step ${formNav.id} of 5`}</h3>
              <h3>{formNav.title}</h3>
            </div>
            <FormNavigation
              handler={(input) => {
                setFormNavigation(input);
              }}
              formNav={formNav}
            />
          </div>
          <div className="bg-gray-50 py-5 px-3 shadow-sm rounded-sm">
            {output}
          </div>
          <div className="flex justify-between">
            <Link href="#">
              <Button>Prev</Button>
            </Link>
            <Link href="#">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ReferalForm;
