import React, { Component } from 'react';
import Card from './Card';
import CardConsumer from './Context';

class Cards extends Component {
  render() {
    return (
     <CardConsumer>
         {
             value => {
                 const {cards} = value;
                 return(
                     <div>
                         {
                                cards.map(card => {
                                    return(
                                        <Card
                                        id = {card.id}
                                        name = {card.name}
                                        surname = {card.surname}
                                        cardNumber = {card.cardNumber}
                                        cvc = {card.cvc}
                                        />
                                    )
                                })
                         }
                     </div>
                 )
             }
         }
     </CardConsumer>
    )
  }
}

export default Cards;