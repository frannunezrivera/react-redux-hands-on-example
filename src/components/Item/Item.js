import React, {Component} from 'react';

class Item extends Component {
    render() {
        const {name, quantity, price} = this.props.item;

        return <div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
        </div>;
    }
}

export default Item;