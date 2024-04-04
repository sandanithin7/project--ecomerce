
// import { combineReducers } from "redux";
// import handleCart from "./handleCart";

// const rootReducers = combineReducers({
//     handleCart
// })

// export default rootReducers;

// store.js
import handleCart from "./handleCart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart,
})

export default rootReducers;