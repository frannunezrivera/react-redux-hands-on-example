import {combineReducers} from 'redux'
import {GET_ALL_ITEMS, ADD_TO_CART, REMOVE_FROM_CART} from '../actions'

const items = (state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                inventory: state.inventory + action.quantity
            }
        default:
            return state
    }
}

const byId = (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_ITEMS:
            return {
                ...state,
                ...action.items.reduce((obj, itemId) => {
                    obj[itemId.id] = itemId
                    return obj
                }, {})
            }
        default:
            const {itemId} = action
            if(itemId) {
                return {
                    ...state,
                    [itemId]: items(state[itemId], action)
                }
            }
            return state
    }
}

const itemIds = (state = [], action) => {
    switch(action.type) {
        case GET_ALL_ITEMS:
            return action.items.map(item => item.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    itemIds
})


export const getItem = (state, id) =>
    state.byId[id];

export const getItems = state =>
    state.itemIds.map(id => getItem(state, id));
