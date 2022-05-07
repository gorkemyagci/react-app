import React, { Component } from 'react';
import CardConsumer from './Context';
var uniqid = require('uniqid');

class AddCard extends Component {
    state = {
        name:"",
        surname:"",
        cardNumber:"",
        cvc:""
    }
    addCard = (dispatch,e) => {
        e.preventDefault();
        const {name,surname,cardNumber,cvc} = this.state;
        const newCard = {
            id:uniqid(),
            name:name,
            surname:surname,
            cardNumber:cardNumber,
            cvc:cvc
        }
        dispatch({type:"ADD_CARD",payload:newCard});
        console.log(newCard); 
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }
  render() {
      const {name,surname,cardNumber,cvc} = this.state;
    return (
        <CardConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div className='card'>
                        <div className='card-header'>
                            Add Card
                        </div>
                        <div className='card-body'>
                        <form onSubmit={this.addCard.bind(this,dispatch)}>
                          <div className='name'>
                              <label name="name">Name</label>
                              <input
                              name='name'
                              className='form-control'
                              id='name'
                              placeholder='Enter name'
                              value={name}
                              onChange={this.changeInput}
                              />
                          </div>
                          <div className='form-group'>
                              <label name="surname">Surname</label>
                              <input
                              name='surname'
                              className='form-control'
                              id='surname'
                              placeholder='Enter surname'
                              value={surname}
                              onChange={this.changeInput}
                              />
                          </div>
                          <div className='form-group'>
                              <label name="cardNumber">Card Number</label>
                              <input
                              name='cardNumber'
                              className='form-control'
                              id='cardNumber'
                              placeholder='Enter card number'
                              value={cardNumber}
                              onChange={this.changeInput}
                              />
                          </div>
                          <div className='form-group'>
                              <label name="cvc">Cvc</label>
                              <input
                              name='cvc'
                              id="cvc"
                              placeholder='Cvc'
                              className='form-control'
                              value={cvc}
                              onChange={this.changeInput}
                              />
                          </div>
                          <button className='btn btn-primary btn-block mt-3 w-100' type="submit">Add Card</button>
                        </form>
                        </div>
                    </div>
                    )
                }
            }
        </CardConsumer>
    )
  }
}

export default AddCard;