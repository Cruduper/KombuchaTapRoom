import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
      <div onClick = {() => props.onChangingSelectedKeg(props.id)}>
        <h3>Name: {props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol % (abv): {props.alcPercent}</p>
        <p>Pints Left: {props.pintsLeft}</p>
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
  pintsLeft: PropTypes.number.isRequired, 
  onChangingSelectedKeg: PropTypes.func
};

export default Keg;