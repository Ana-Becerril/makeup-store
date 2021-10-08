import * as ActionTypes from "../constants/action-types";

export const incrementCounter = id => {
  return{
    type: ActionTypes.INCREMENT_COUNTER,
    id,
  };
};

export const addToCart = id => {
    return {
        type: ActionTypes.ADD_TO_CART,
        id,
    };
};

export const getProducts = products => {
    console.log(products)
    return {
        type: ActionTypes.GET_PRODUCTS,
        products,
    };
};

export const removeFromCart = id => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        id,
    };

};
export const addQuantity = id => {
    return {
        type: ActionTypes.ADD_QUANTITY,
        id
    };
};

export const subQuantity = id => {
    return {
        type: ActionTypes.SUB_QUANTITY,
        id,
    };
};

export const emptyCart = () => {
    return {
        type: ActionTypes.EMPTY_CART,
    };
};
