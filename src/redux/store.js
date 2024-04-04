// import { createStore  } from "redux"; // Alias the import
// import rootReducers from "./reducers/handleCart";

// const store = createStore(rootReducers); // Use the alias for the new createStore

// export default store;



// import { createStore } from 'redux';
// import handleCart from './reducers/handleCart'; // Import your reducer

// const store = createStore(handleCart);

// export default store;


import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

export default store;


