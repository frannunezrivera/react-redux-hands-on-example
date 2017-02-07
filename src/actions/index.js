import shop from '../api/shop';


/*
 * action types
 */

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/*
 * action creators
 */

const receiveItems = items => ({
    type : GET_ALL_ITEMS,
    items: items
});

export const getAllItems = () => dispatch => {
    shop.getItems(items => {
        dispatch(receiveItems(items))
    })
};

export const addToCart = itemId => (dispatch, getState) => {
    if(getState().items.byId[itemId].inventory > 0) {
        dispatch({
            type: ADD_TO_CART,
            itemId
        })
    }
};

export const removeFromCart = itemId => (dispatch, getState) => {
    let quantity = getState().cart.quantityById[itemId];
    if(quantity > 0) {
        dispatch({
            type: REMOVE_FROM_CART,
            itemId,
            quantity
        })
    }
};