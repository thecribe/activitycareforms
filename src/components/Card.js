import React, { Fragment } from "react";

const Card = ({ children }) => {
  return (
    <Fragment>
      <div className={`p-2 shadow-md rounded-sm w-full`}>{children}</div>
    </Fragment>
  );
};

export default Card;
