import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';


class KegControl extends React.Component {

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
    const {setState} = this;
    if (currentProductVisible === true){
      if (selectedKeg === null) {
        setState({currentProductVisible: false});
      } else {
        setState({selectedKeg: null});
      }

    } else {
      setState({ 
        currentProductVisible: true,
        selectedKeg: null 
      });
    }
  }

    handleAddingNewKeg = (newKeg) => {
      const {mainKegList} = this.state;
      const {setState} = this;

      const newKegList = mainKegList.concat(newKeg);
      setState({ mainKegList: newKegList});
    }

  render() {
    const {currentProductVisible, selectedKeg, mainKegList} = this.state;
    const {handleClick, handleAddingNewKeg} = this;
    let currentlyVisibleState = null;
    let buttonText = null;

    if (currentProductVisible === true){
        if (selectedKeg === null) {
          currentlyVisibleState = <KegList kegList={mainKegList}/>;
          buttonText = "Add Keg";
        } else {
          currentlyVisibleState = <KegDetail />;
          buttonText = "Return To Keg List";
        }

      } else {
        currentlyVisibleState = <newKegForm onAddingNewKeg={handleAddingNewKeg}/>;
        buttonText = "Return To Keg List";
      }


    return (
      
      <>
        {currentlyVisibleState}
        <button onClick={handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;