import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg, onDeletingKeg, onDecrementingPints } = props;

  return (
    <React.Fragment >
      <h3>Name: {keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>Alcohol % (abv): {keg.alcPercent}</p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <button onClick={()=> onDeletingKeg(keg.id) }>Delete Keg</button>
      <button onClick={()=> onDecrementingPints(keg.id) }>Pour A Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onDeletingKeg: PropTypes.func, 
  onDecrementingPints: PropTypes.func
};

export default KegDetail;