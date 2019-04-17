import React from "react";
import css from "../Cards/cards.module.css";
import RadioButtons from '../RadioButtons'


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
        <h1>Found a card? add the information here</h1>
          <div className={css.inputContainer}>
          <input
            id="description of card"
            placeholder="give a brief description of how you found the card..."
            onChange={this.addingInfoHandler}
            type="text"
            value={this.state.value}
          />
        

          
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
