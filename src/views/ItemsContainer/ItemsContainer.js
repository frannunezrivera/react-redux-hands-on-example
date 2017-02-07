import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../../actions'
import {getItems} from '../../reducers/items'
import ShopItem from '../../components/ShopItem/ShopItem'
import ItemList from '../../components/ItemList/ItemList'

const ItemsContainer = ({items, addToCart}) => (
    <ItemList title="Items">
        {items.map(item =>
            <ShopItem
                key={item.id}
                item={item}
                onAddToCartClicked={() => addToCart(item.id)}
            />
        )}
    </ItemList>
);

const mapStateToProps = state => ({
    items: getItems(state.items)
});

export default connect(
    mapStateToProps,
    {addToCart}
)(ItemsContainer)