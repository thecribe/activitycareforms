import React, { Fragment } from "react";

const Cover = ({ page_title, page_description }) => {
  return (
    <Fragment>
      <section className="bg-gray-200 w-full">
        <div className="h-[30vh] w-2/3 mx-auto gap-3 my-0 flex flex-col justify-center items-center">
          <h4 className="uppercase text-xs text-red-800">{page_title}</h4>
          <h2 className="uppercase text-lg text-blue-900 font-semibold">
            {page_description}
          </h2>
        </div>
      </section>
    </Fragment>
  );
};

export default Cover;
