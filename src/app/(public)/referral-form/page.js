import Cover from "@/components/Cover";
import ReferalForm from "@/components/ReferalForm";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Cover
        page_title={"forms"}
        page_description={"Activity Care Services Referral Form"}
      />
      <ReferalForm />
    </Fragment>
  );
};

export default page;
