import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
      <div>
        <h3>Name: {props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol % (abv): {props.alcPercent}</p>
        <hr/>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcPercent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;