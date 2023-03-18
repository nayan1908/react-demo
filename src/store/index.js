// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { counterReducer } from "./counter";

// // used redux

// const initialState = {
//     counter: 0,
//     showCounter: true,
// };

// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === "increase") {
//         return {
//             counter: state.counter + 5,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === "toggle"){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;



// USED redux toolkit START
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
