"use client";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineViewKanban } from "react-icons/md";
import { getAllEntry } from "@/app/utils/apiCalls";
import Modal from "../modal/Modal";
import Summary from "../Summary";
import Button from "../Button";

const Content = () => {
  const [entries, setEntries] = useState([]);
  const [error, setMessage] = useState({ status: false, message: "" });
  const [modalToggle, setModalToggle] = useState(false);
  const [selectedEntry, setEntry] = useState({});

  useEffect(() => {
    const getEntries = async () => {
      const response = await getAllEntry();
      setEntries(response);
    };

    getEntries();
  }, []);

  return (
    <Fragment>
      {modalToggle && (
        <Modal modalClose={() => setModalToggle()}>
          <Summary
            entries={selectedEntry}
            width={"full"}
            editButton={false}
            title={"Entry"}
          />
        </Modal>
      )}
      <div className="bg-white w-full h-full p-5 flex flex-col gap-5 ">
        <div className="flex justify-between">
          <h3 className="text-blue-900 font-bold">All Form Entries</h3>
          {/* <p className="underline text-blue-900">Download all entries</p> */}
        </div>
        <div className="overflow-y-auto">
          {entries.length > 0 && !error.status ? (
            <table className="w-full shadow-sm text-left py-5">
              <thead className="bg-gray-100 sticky top-0 text-sm ">
                <tr className=" ">
                  <th className="py-3 px-5">S/N</th>
                  <th className="py-3 px-5">Entry Id</th>
                  <th className="py-3 px-5">Participant Name</th>
                  <th className="py-3 px-5">Date of Submission</th>
                  <th className="py-3 px-5">Action</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {entries.map((entry, index) => {
                  return (
                    <tr className="" key={index}>
                      <td className="py-3 px-5">{index + 1}</td>
                      <td className="py-3 px-5">{entry.entryId}</td>
                      <td className="py-3 px-5">
                        {entry.participant.participant_1.firstName +
                          " " +
                          entry.participant.participant_1.lastName}
                      </td>
                      <td className="py-3 px-5">{entry.date}</td>

                      <td className="py-3 px-5">
                        <div className="flex gap-5 items-center text-lg font-semibold text-blue-800">
                          <div
                            className="hover:text-blue-900 smooth_transition cursor-pointer"
                            onClick={() => {
                              setEntry(entry);
                              setModalToggle(true);
                            }}
                          >
                            <MdOutlineViewKanban />
                          </div>
                          <Link
                            href="#"
                            className="text-red-700 hover:text-red-900 smooth_transition"
                          >
                            <IoClose />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : !error.status ? (
            <div>
              <p>Loading</p>
            </div>
          ) : (
            <div>
              <p>{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
