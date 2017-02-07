import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../actions'
import {getTotal, getCartItems} from '../../reducers'
import Cart from '../../components/Cart/Cart'
import CartItem from '../../components/CartItem/CartItem'

const CartContainer = ({items, total, removeFromCart}) => (
    <Cart total={total}>
        {items.map(item =>
            <CartItem
                key={item.id}
                item={item}
                onRemoveFromCartClicked={() => removeFromCart(item.id)}
            />
        )}
    </Cart>
)

const mapStateToProps = (state) => ({
    items: getCartItems(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    {removeFromCart}
)(CartContainer)