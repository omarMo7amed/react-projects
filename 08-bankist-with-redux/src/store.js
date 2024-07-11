// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import accountReducer from "./features/accounts/AccountSlice";
// import customerReducer from "./features/customers/CustomerSlice";
// import { thunk } from "redux-thunk";

// ot install redux-devtools => npm add @redux-devtools/extension

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

// to install redux-toolkit => npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
