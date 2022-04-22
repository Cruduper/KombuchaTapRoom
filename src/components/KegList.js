import React from "react";
import Keg from './Keg';


  // name: PropTypes.string.isRequired,
  // brand: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // alcPercent: PropTypes.number.isRequired,
  // pintsLeft: PropTypes.number.isRequired

function KegList(props){
  return (
    <>
      {props.kegList.map((keg) =>
         <Keg //onKegSelection = { props.onKegSelection }
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcPercent={keg.alcPercent}
          pintsLeft={keg.pintsLeft}
          id={keg.id}
          key={keg.id}/>
      )}
    </>
  );
}

export default KegList;