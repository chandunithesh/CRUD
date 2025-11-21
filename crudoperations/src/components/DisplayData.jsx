import React from "react";
import "./DisplayDetails.css";

const DisplayData = ({ details }) => {
  return (
    <>
      {details.map((value, index) => (
        <article key={index}>
          <div style={{ textAlign: "center" }}>
            <p>Product Name: {value.productName}</p>
            <p>Product Price: {value.productPrice}</p>
            <p>Product Description: {value.productDescription}</p>

            <aside>
              <button>Edit</button>
              <button>Delete</button>
            </aside>
          </div>
        </article>
      ))}
    </>
  );
};

export default DisplayData;
