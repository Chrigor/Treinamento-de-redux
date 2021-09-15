import Types from './types';

export const addToCart = (payload) => ({
  type: Types.ADD_TO_CART,
  payload,
});

export const removeFromCart = (id) => ({
  type: Types.REMOVE_TO_CART,
  payload: id,
});

