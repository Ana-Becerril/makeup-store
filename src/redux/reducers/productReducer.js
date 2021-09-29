import { ActionTypes } from '../constants/action-types';

const initialState = {
    products: [{
        id:product.id,
        title:product.name,
        price: product.name,
        image: product.image
    }],
};

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            default:
            return state;
    }
};