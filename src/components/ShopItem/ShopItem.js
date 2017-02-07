import React from 'react'
import Item from '../Item/Item'

function getSuperSaleClass(superSale) {
    return superSale ? 'super-sale' : '';
}

const ShopItem = ({item, onAddToCartClicked}) => (
    <li className={"item " + getSuperSaleClass(item.superSale)}>
        <Item
            name={item.name}
            price={item.price}
        />
        <button
            onClick={onAddToCartClicked}
            disabled={item.inventory > 0 ? '' : 'disabled'}>
            {item.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
    </li>
);

export default ShopItem;