import shop from '../api/shop';


/*
 * action types
 */

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

/*
 * action creators
 */

const receiveItems = items => ({
    type    : GET_ALL_ITEMS,
    items: items
});

export const getAllItems = () => dispatch => {
    shop.getItems(items => {
        dispatch(receiveItems(items))
    })
};