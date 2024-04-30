import { createStore } from "redux";
export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};
export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};
const initialState = {
  balance: {
    value: 1000,
  },
  locale: {
    lang: "en",
  },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value + action.payload,
        },
      };

    case "balance/withdraw":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value - action.payload,
        },
      };
    default:
      return state;
  }
  //   console.log(action);
};
export const store = createStore(rootReducer);
// console.log(store.getState());
