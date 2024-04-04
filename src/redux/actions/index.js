// // For adding an item to the cart
// export const addCart = (product) => {
//     return {
//         type: "ADD ITEM",
//         payload: product
//     }
// }

// // // For deleting an item from the cart
// export const delCart = (Product) => {
//     return {
//         type: "DEL ITEM",
//         payload: product
//     }
// }
// redux/actions/cartActions.js

// export const addCart = (item) => {
//     return {
//       type: 'ADD_CART',
//       payload: item
//     };
//   };
  
//   export const delCart = (item) => {
//     return {
//       type: 'DEL_CART',
//       payload: item
//     };
//   };
  
//   export const delItem = (item) => {
//     return {
//       type: 'DEL_ITEM',
//       payload: item
//     };
//   };
  
export const addCart = (product) => {
  return{
      type : "ADDITEM",
      payload : product
  }
}


// For Delete Item From Cart
export const delCart = (product) => {
  return{
      type : "DELITEM",
      payload : product
  }
}