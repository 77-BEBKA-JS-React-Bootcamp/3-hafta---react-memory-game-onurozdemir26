import React, { Component } from 'react';
import './Card.scss';
import closed from './../../assets/seashell.png'


 class Card extends Component {
    render() {
        const {animals, onClickHandler, open} = this.props;
        return (
           
            <div className="card">
                 <img onClick={onClickHandler} className={open ? 'open' :'closed'} src={open ? animals.image : closed} alt={animals.name} />
                
            </div>
        )
    }
}
export default Card;