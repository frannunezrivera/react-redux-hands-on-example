import React from 'react'
import {connect} from 'react-redux'
import {getItems} from '../../reducers/items'
import ShopItem from '../../components/ShopItem/ShopItem'
import ItemList from '../../components/ItemList/ItemList'

const ItemsContainer = ({items}) => (
    <ItemList title="Items">
        {items.map(item =>
            <ShopItem
                key={item.id}
                item={item}
            />
        )}
    </ItemList>
);

const mapStateToProps = state => ({
    items: getItems(state.items)
});

export default connect(
    mapStateToProps
)(ItemsContainer)