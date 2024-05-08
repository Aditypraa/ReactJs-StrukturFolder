import { legacy_createStore } from "redux";

// Reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 1, price: 1000 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer);
console.log("oncreate store", store.getState());

// Subcribe
store.subscribe(() => {
  console.log("onchange store", store.getState());
});

// Dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 2, price: 2000 },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: { id: 3, qty: 20, price: 50000 },
};
store.dispatch(action2);
