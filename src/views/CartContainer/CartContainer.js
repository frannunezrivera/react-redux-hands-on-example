import React from 'react'
import {connect} from 'react-redux'
import {getTotal, getCartItems} from '../../reducers'
import Cart from '../../components/Cart/Cart'

const CartContainer = ({items, total}) => (
    <Cart
        items={items}
        total={total}
    />
)

const mapStateToProps = (state) => ({
    items: getCartItems(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps
)(CartContainer)