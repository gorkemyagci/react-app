import React, { Component } from 'react';

const CardContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_CARD":
            return{
                ...state,
                cards : state.cards.filter(card => action.payload !== card.id)
            }
        case "ADD_CARD":
            return{
                ...state,
                cards : [...state.cards,action.payload]
            }
            default:
                return state;
    }
}

export class CardProvider extends Component {
    state = {
        cards : [],
        dispatch : action => {
            this.setState(state => reducer(state,action));
        }
    }
  render() {
    return (
      <CardContext.Provider value={this.state}>
          {this.props.children}
      </CardContext.Provider>
    )
  }
}

const CardConsumer = CardContext.Consumer;

export default CardConsumer;