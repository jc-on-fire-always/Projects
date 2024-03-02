import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import FetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";





const myntraStore = configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus:FetchStatusSlice.reducer,
    Bag:BagSlice.reducer,

  }
})

export const itemsActions = itemSlice.actions;


export default myntraStore;