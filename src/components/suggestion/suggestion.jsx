import React from "react";

const Suggestion = props => {
  const { value, inn, data } = props.suggestion;

  return (
    <div className="suggestion">
      <b>{value}</b>
      <p>{inn}</p>
      <p>{data.address.value}</p>
    </div>
  );
};

export default Suggestion;
