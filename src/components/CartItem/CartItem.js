import React from 'react'
import Item from '../Item/Item'


const CartItem = ({item, onRemoveFromCartClicked}) => (
    <li className="item cart-item">
        <Item
            name={item.name}
            quantity={item.quantity}
            price={item.price}
        />
        <button
            onClick={onRemoveFromCartClicked}>
            Remove
        </button>
    </li>
);

export default CartItem;