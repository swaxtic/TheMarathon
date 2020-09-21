// Adalah sebuah fungsi yang tugasnya untuk mengolah state yang ada di store.
// Misal menambah data, menghapus data, mengambil data, dsb.
// Ada 2 parameter wajib dari reducer, yaitu state dan action.
import produce from 'immer';

const initialState = {
  // name: 'Muhammad Adip',
  Favorite: [],
};
const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@fav/ADD_SUCCESS':
      return produce(state, (draft) => {
        const {id, title, poster,} = action;
        draft.Favorite.push({id, title, poster,});
        // console.log(title);
      });
    case '@fav/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.Favorite.findIndex(
          (product) => product.id === action.id,
        );
        if (productIndex >= 0) {
          draft.Favorite.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
};

export default favReducer;
