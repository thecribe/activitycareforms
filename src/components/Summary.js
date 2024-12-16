import React from "react";

const Summary = ({ entries }) => {
  const { about, participant, ndis, billing } = entries;

  console.log(about);
  return <div>Summary</div>;
};

export default Summary;
