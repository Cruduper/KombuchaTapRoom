import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  // name: PropTypes.string.isRequired,
  // brand: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // alcPercent: PropTypes.number.isRequired,
  // pintsLeft: PropTypes.number.isRequired

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: parseInt(event.target.price.value), 
      alcPercent: parseInt(event.target.alcPercent.value), 
      pintsLeft: 124, 
      id: v4()
    });
    // console.log(event.target.names.value);
    // console.log(event.target.brand.value);
    // console.log(event.target.price.value);
    // console.log(event.target.alcPercent.value);
    // console.log(event.target.pintsLeft.value);
    // console.log(event.target.id.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Kombu Brand' />
          <input
          type='text'
          name='price'
          placeholder='Retail Price' />
          <input
          type='text'
          name='alcPercent'
          placeholder='% alcohol' />
        <button type='submit'>Add New Kombucha!</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = { onAddingNewKeg: PropTypes.func };

export default NewKegForm;