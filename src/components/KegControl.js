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
      mainKegList: [],
    };
  }

  handleClick = () => {
    const {currentProductVisible, selectedKeg} = this.state;

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

    const newKegList = mainKegList.concat(newKeg);
    this.setState({ mainKegList: newKegList});
  }

  handleChangingSelectedKeg = (id) => {

    this.setState(prevState => ({selectedKeg: prevState.mainKegList.find(e => e.id === id)}));
  }

  handleDeletingKeg = (id) => {
  const {mainKegList} = this.state;
    const newMainKegList = mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleDecrementingPints = (id) => {
    //const {mainKegList, selectedKeg} = this.state;

    this.setState( (prevState) => ({

      mainKegList: prevState.mainKegList.map(elem => elem.id === id && elem.pintsLeft > 0 ? { ...elem, pintsLeft: elem.pintsLeft - 1 }: elem )
    }))

    this.handleChangingSelectedKeg(id);
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
          currentlyVisibleState = <KegDetail keg={selectedKeg} onDeletingKeg={this.handleDeletingKeg} onDecrementingPints={this.handleDecrementingPints} />;
          buttonText = "Return To Keg List";
        }

      } else {
        currentlyVisibleState = <NewKegForm onAddingNewKeg={handleAddingNewKeg} handleClick={handleClick}/>;
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