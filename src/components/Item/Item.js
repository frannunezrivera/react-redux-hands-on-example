import React, {Component} from 'react';
import {currencyFormat} from '../../utils/formatters';

class Item extends Component {
    render() {
        const {name, price} = this.props;

        return <div>
            <span className="name">{name}</span>
            <span className="price">{currencyFormat(price)}</span>
        </div>;
    }
}

export default Item;