import {combineReducers} from 'redux'
import cart, * as fromCart from './cart'
import items, * as fromItems from './items'

export default combineReducers({
    cart,
    items
})

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getItem = (state, id) => fromItems.getItem(state.items, id);

export const getTotal = state =>
    getAddedIds(state)
        .reduce((total, id) =>
            total + getItem(state, id).price * getQuantity(state, id),
            0
        )
        .toFixed(0)

export const getCartItems = state =>
    getAddedIds(state).map(id => ({
        ...getItem(state, id),
        quantity: getQuantity(state, id)
    }))