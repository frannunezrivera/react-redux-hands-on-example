import React from 'react'
import {connect} from 'react-redux'
import Cart from '../../components/Cart/Cart'

const CartContainer = ({items, total}) => (
    <Cart
        items={items}
        total={total}
    />
)

const mapStateToProps = (state) => ({
    items: [],
    total: 0
})

export default connect(
    mapStateToProps
)(CartContainer)