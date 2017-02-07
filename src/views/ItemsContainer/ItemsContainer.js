import React from 'react'
import {connect} from 'react-redux'
import {getItems} from '../../reducers/items'
import Item from '../../components/Item/Item'
import ItemList from '../../components/ItemList/ItemList'

const ItemsContainer = ({items}) => (
    <ItemList title="Items">
        {items.map(item =>
            <Item
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