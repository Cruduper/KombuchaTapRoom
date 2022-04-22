import React from "react";

function Keg(props){
  return (
    <>
      <div>
        <h3>{props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Price{props.price}</p>
        <p>Alcohol % (abv): {props.alcPercent}</p>
        <hr/>
      </div>
    </>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcPercent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;