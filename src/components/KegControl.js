import React from 'react';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProductVisible: true,
      selectedKeg: null,
      mainKegList: []
    };
  }

  handleClick = () => {
    const {currentProductVisible, selectedKeg} = this.state;

    if (currentProductVisible === true){
      if (selectedKeg === null) {
        <KegList />
      } else {
        <KegDetail />
      }

    } else {
      <newKegForm />
    }
  }

  render() {


    return (
      <></>
    );
  }
}