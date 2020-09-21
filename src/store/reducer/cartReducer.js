// Adalah sebuah fungsi yang tugasnya untuk mengolah state yang ada di store.
// Misal menambah data, menghapus data, mengambil data, dsb.
// Ada 2 parameter wajib dari reducer, yaitu state dan action.
import produce from 'immer';
import { removeFromCart } from '../actions/cartActions';

const initialState = {
  // name: 'Muhammad Adip',
  Cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const {id, title, poster,price, qty} = action;
        draft.Cart.push({id, title, poster,price ,qty,subtotal : price});
        // console.log(title);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.Cart.findIndex(
          (product) => product.id === action.id,
        );
        if (productIndex >= 0) {
          draft.Cart.splice(productIndex, 1);
        }
      });
    case '@cart/INCREASE_QTY':
      return produce(state, (draft) => {
        //const {id, qty} = action;
        const productIndex = draft.Cart.findIndex(
          (product) => product.id === action.id,
        ); //cari index yg ingin di update
        if (productIndex >= 0) {
          const cart = draft.Cart[productIndex];
          cart.qty += action.qty;
          cart.subtotal = cart.price * cart.qty;
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.id,
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
};

export default cartReducer;
