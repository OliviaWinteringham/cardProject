import React from "react";
import css from "./cards.module.css";
// import RadioButtons from '../RadioButtons'


class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
  }

  addingInfoHandler = eventOfTyping => {
    const { value } = eventOfTyping.target;
    console.log(value);
    this.setState((state, props) => ({
      value: value
    }));
  };




  render() {
    return (
    
        <div className={css.mainDiv}>
        <h2>Found a card? add the information here</h2>
          <div className={css.inputContainer}>
          
          <p>What is the suit?</p>
          <input
            id="suitInput"
            placeholder="type the suit"
            type="text"
            onChange={this.addingInfoHandler}
            value={this.state.value}
          />
           <p>What is the card number?</p>
          <input 
            id="numberInput"
            placeholder="type the card number"
            type="text">
          </input>

          <p>What were you doing when you found it?</p>
          <input 
            id="descriptionInput"
            placeholder="give a description"
            type="text">
          </input>

          <p>Where were you in the world?</p>
          <input 
            id="locationInput"
            placeholder="give us the location/ postcode"
            type="text">
          </input>


          <p>What was the date?</p>
          <input 
            id="dateInput"
            placeholder="type the date you found it"
            type="text">
          </input>

          <p>How dirty is it?</p>
          <input 
            id="dirtyInput"
            placeholder="how dirty?"
            type="text">
          </input>

          <p>Where were you in the world?</p>
          <input 
            id="imageInput"
            placeholder="upload an image"
            type="url">
            
          </input>
        

          
          <button onClick={this.addingInfoHandler}>Submit</button>
        </div>
         

          {/* insert x 4 radio buttons to select: heart, club, spade, diamond and label */}
          {/* insert x 14  radio buttons to select: Ace====>  2 and label */}
          {/* insert  data selector widget or thing to bring up a load of dates from which you can click the one you want*/}
          {/* flith slider slide from 0 - 100 level of flith */}
          {/* UPLOAD AN IMAGE */}
      </div>
    
    );
  }
}

export default Cards;
