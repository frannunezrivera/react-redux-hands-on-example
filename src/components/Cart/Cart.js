import React from 'react'
import {currencyFormat} from '../../utils/formatters';

const Cart = ({total, children}) => {
    const hasItems = children.length > 0;
    const nodes = hasItems ? children : (
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