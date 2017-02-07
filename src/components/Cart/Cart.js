import React from 'react'
import Item from '../Item/Item'
import {currencyFormat} from '../../utils/formatters';

const Cart = ({items, total}) => {
    const hasItems = items.length > 0;
    const nodes = hasItems ? (
            items.map(item =>
                <Item
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.id}
                />
            )
        ) : (
            <em>Please add some products to cart.</em>
        );

    return (
        <div className="shopping-cart">
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: {currencyFormat(total)}</p>
        </div>
    )
};

export default Cart;