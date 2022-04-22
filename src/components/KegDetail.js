import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
const { keg, onDeletingKeg } = props;

  return (
    <React.Fragment>
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>Alcohol % (abv): {keg.alcPercent}</p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <button onClick={()=> onDeletingKeg(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onDeletingKeg: PropTypes.func
};

export default KegDetail;