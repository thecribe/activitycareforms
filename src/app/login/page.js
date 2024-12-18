import LoginForm from "@/components/LoginForm";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <section className="w-full h-[80vh] flex items-center justify-center">
        <section className="w-1/5 bg-gray-50 rounded-md shadow-sm px-5 py-10">
          <LoginForm />
        </section>
      </section>
    </Fragment>
  );
};

export default page;
