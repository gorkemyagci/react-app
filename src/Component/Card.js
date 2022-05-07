import React, { Component } from 'react';
import CardConsumer from './Context';


class Card extends Component {
    delete_card = (dispatch,e) => {
        const {id} = this.props;
        // Consumer
        dispatch({type:"DELETE_CARD",payload:id});
        console.log("OK");
    }
    componentWillUnmount = () => {
        function deletedCard(alert){
                var html = `<div className="alert alert-${alert}" style={{position:"absolute",padding:"5px 15px",right:"0px",zIndex:"10",borderRadius:"15px"}}>Deleted</div>`
                document.getElementById('alert').innerHTML = html;
        }
        deletedCard("danger");
        function iptal(){
            document.getElementById('alert').innerHTML = "";
        }
        setTimeout(iptal,2000)
    }

    componentDidMount = () => {
        function addedCard(alert){
            var html = `<div className="alert alert-${alert}" style={{position:"absolute",padding:"5px 15px",right:"0px",zIndex:"10",borderRadius:"15px"}}>Added</div>`;
             document.getElementById('alert').innerHTML = html;
        }
        addedCard("success");
        function iptal(){
            document.getElementById('alert').innerHTML = "";
        }
        setTimeout(iptal,2000);
       
    }

    render(){
        const {name,surname,cardNumber,cvc} = this.props;
        return(
            <CardConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return(
                        <div className='cardNumber col-md-4'>
                            <div className='d-flex justify-content-between'>
                            <p>Name : <span>{name}</span></p>
                            <p>Surname : <span>{surname}</span></p>
                            <i className='fa fa-trash' style={{cursor:"pointer"}} onClick={this.delete_card.bind(this,dispatch)}></i>
                            </div>
                            <div>
                            <p>Card Number : <span>{cardNumber}</span></p>
                            <p>Cvc : {cvc}</p>
                            </div>
                        </div>
                        )
                    }
                }
            </CardConsumer>
        )
    }
}

export default Card;