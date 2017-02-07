import React, {Component} from 'react';
import {currencyFormat} from '../../utils/formatters';

class Item extends Component {
    render() {
        const {name, quantity, price} = this.props.item;

        return <div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{currencyFormat(price)}</span>
        </div>;
    }
}

export default Item;