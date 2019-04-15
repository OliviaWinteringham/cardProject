import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(event)
    const value = event.target.value;
        this.setState=(state => {
            return {value: value}
    })  

}
render(){
    return(
        <div>
            <form>
                <h1>Found a card? add the information here</h1>  
        <input id='description'  placeholder='tell me about the card...' onChange={this.handleChange} value={this.state.value} type="text"/>
        <input id='whoFoundCard' placeholder='type your name...' onChange={this.handleChange} value={this.state.value} type="text" />
    {/* insert x 4 radio buttons to select: heart, club, spade, diamond and label */}
    {/* insert x 14  radio buttons to select: Ace====>  2 and label */ }
    {/* insert  data selector widget or thing to bring up a load of dates from which you can click the one you want*/}
    {/* flith slider slide from 0 - 100 level of flith */}
    {/* UPLOAD AN IMAGE */}
    

            </form>
        </div>
    );
}
}
