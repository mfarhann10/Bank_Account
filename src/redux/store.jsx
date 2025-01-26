import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      //Later
      return {
        ...state,
        loan: action.payload.ammount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.ammount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function deposit(ammount) {
  return { type: "account/deposit", payload: ammount };
}

function withdraw(ammount) {
  return {
    type: "account/withdraw",
    payload: ammount,
  };
}

function requestLoan(ammount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      ammount,
      purpose,
    },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "Buy a Car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());
