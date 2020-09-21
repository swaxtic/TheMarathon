export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSuccess(id,title,poster,price,qty) {
  return {
    type: '@cart/ADD_SUCCESS',
    id,
    title,
    poster,
    price,
    qty,
  };
}

export function increaseQty(id, qty) {
  return {
    type: '@cart/INCREASE_QTY',
    id,
    qty,
  };
}

export function removeFromCart(id) {
  return {type: '@cart/REMOVE', id};
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
