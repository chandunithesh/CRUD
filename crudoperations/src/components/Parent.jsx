import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const Parent = () => {
  // Form input state
  const [details, setDetails] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
  });

  // State for submitted details
  const [allDetails, setAllDetails] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllDetails([...allDetails, details]);
    setDetails({
      productName: "",
      productPrice: "",
      productDescription: "",
    });
  };

  return (
    <section>
      <article>
        <Form
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </article>
      <article>
        <DisplayData details={allDetails} />
      </article>
    </section>
  );
};

export default Parent;
