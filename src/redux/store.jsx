import { combineReducers, createStore } from "redux";
import accountReducer, { deposit } from "../features/accounts/AccountSlice";
import customerReducer from "../features/customers/CustomerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch(deposit(500));
console.log(store.getState());
