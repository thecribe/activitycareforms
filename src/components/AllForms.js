import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import Link from "next/link";

const AllForms = () => {
  return (
    <Fragment>
      <section className=" w-full py-5 ">
        <div className="py-5 mx-auto my-0 w-2/3">
          <div className="w-[250px]">
            <Card width={300}>
              <div className="w-full py-5 px-3 flex flex-col gap-3 justify-center items-center">
                <h2 className="text-blue-900 text-center">
                  Activity Care Services Referral Form
                </h2>
                <div className="flex justify-center items-center">
                  <Link href="/referral-form">
                    <Button>Fill Form</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AllForms;
