import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
const { keg } = props;

  return (
    <React.Fragment>
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>Alcohol % (abv): {keg.alcPercent}</p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;