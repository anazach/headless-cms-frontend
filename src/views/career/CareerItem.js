import React from "react";

const CareerItem = ({ career }) => {
  return (
    <section>
      <h2>{career.acf.title}</h2>
    </section>
  );
};

export default CareerItem;
