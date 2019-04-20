import React from "react";
import css from "./cards.module.css";
// import RadioButtons from '../RadioButtons'

const API = process.env.REACT_APP_API_URL

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suit: "",
      number: "",
      description: "",
      location: "",
      date: "",
      dirty: "",
      image: "",
      

    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch (`${API}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
      },
      body:JSON.stringify({
        suit: this.state.suit,
        number: this.state.number,
        description: this.state.description,
        location: this.state.location,
        date: this.state.date,
        dirty: this.state.dirty,
        image: this.state.image,
      })
    });
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  // addingInfoHandler = (eventOfTyping) => {
  //   const { value } = eventOfTyping.target;
  //   console.log(value);
  //   this.setState(() => ({
  //     suit: value,
  //     number: value,
  //   }));
  // };




  render() {
    const{
      suit,
      number,
      description,
      location,
      date,
      dirty, 
      image, 
    } = this.state;
    return (
      <>
        <div className={css.mainDiv}>
        <h1>52 cards from around the world</h1>
        <h2>Found a card? add the information here</h2>
          <form onSubmit={this.handleSubmit}>
          <div className={css.inputContainer}>
          <p>What is the suit?</p>
          <input
            id="suitInput"
            placeholder="enter the suit"
            type="text"
            name="suit"
            onChange={this.onChange}
            value={suit}
          />
           <p>What is the card number?</p>
          <input 
            id="numberInput"
            placeholder="enter card number"
            type="number"
            name="number"
            onChange={this.onChange}
            value={number}
            />

          <p>What were you doing when you found it?</p>
          <input 
            id="descriptionInput"
            placeholder="enter a description"
            type="text"
            name="description"
            onChange={this.onChange}
            value={description}
            />

          <p>Where were you in the world?</p>
          <input 
            id="locationInput"
            placeholder="give us the location/ postcode"
            type="text"
            name="location"
            onChange={this.onChange}
            value={location}
            />


          <p>What was the date?</p>
          <input 
            id="dateInput"
            placeholder="enter date you found it"
            type="date"
            name="date"
            onChange={this.onChange}
            value={date}
            />

          <p>How dirty is it?</p>
          <input 
            id="dirtyInput"
            placeholder="enter how dirty?"
            type="text"
            name="dirty"
            onChange={this.onChange}
            value={dirty}
            />

          <p>Upload the photo</p>
          <input 
            id="imageInput"
            placeholder="upload an image"
            type="url"
            name="image"
            onChange={this.onChange}
            value={image}/>
          </div>
          <button onClick={this.handleSubmit}
          aria-label="Add">Add a card</button>
          </form>
        </div>
         

          {/* insert x 4 radio buttons to select: heart, club, spade, diamond and label */}
          {/* insert x 14  radio buttons to select: Ace====>  2 and label */}
          {/* insert  data selector widget or thing to bring up a load of dates from which you can click the one you want*/}
          {/* flith slider slide from 0 - 100 level of flith */}
          {/* UPLOAD AN IMAGE */}

    </>
    );
  }
}

export default Cards;
