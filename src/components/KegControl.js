import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';


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
    // const {setState} = this;
    if (currentProductVisible === true){
      if (selectedKeg === null) {
        this.setState({currentProductVisible: false});
      } else {
        this.setState({selectedKeg: null});
      }

    } else {
      this.setState({ 
        currentProductVisible: true,
        selectedKeg: null 
      });
    }
  }

  handleAddingNewKeg = (newKeg) => {
    const {mainKegList} = this.state;
    // const {setState} = this;

    const newKegList = mainKegList.concat(newKeg);
    this.setState({ mainKegList: newKegList});
  }

  handleChangingSelectedKeg = (id) => {
    const {mainKegList} = this.state;

    const chosenKeg = mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: chosenKeg});
  }


  render() {
    const {currentProductVisible, selectedKeg, mainKegList} = this.state;
    const {handleClick, handleAddingNewKeg} = this;
    let currentlyVisibleState = null;
    let buttonText = null;

    if (currentProductVisible === true){
        if (selectedKeg === null) {
          currentlyVisibleState = <KegList onChangingSelectedKeg={this.handleChangingSelectedKeg} kegList={mainKegList}/>;
          buttonText = "Add Keg";
        } else {
          currentlyVisibleState = <KegDetail keg = {selectedKeg}/>;
          buttonText = "Return To Keg List";
        }

      } else {
        currentlyVisibleState = <NewKegForm onAddingNewKeg={ handleAddingNewKeg}/>;
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