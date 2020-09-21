// Store adalah tempat untuk menampung state.
// Jadi store ibarat database untuk frontend.
// Alur kerjanya seperti berikut:
// 1. Pertama akan ada triger dari UI
// 2. Kemudian akan ke action
// 3. Dari action reducer akan mengubah state yang sesuai dengan type dari action tadi
// 4. Terahir update UI lagi

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index"; const store = createStore(
  rootReducer,
  composeWithDevTools()
)

export default store;