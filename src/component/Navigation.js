import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Homes from "./home";
import Products from "./products";
import Navbar1 from "./navbar";
import ProductCard from "./productcard";
import Cart from "./cart";

const Navigation = () => {
  return (
    <>
    
      <BrowserRouter>
      <Navbar1/>
        <Routes>
          
          <Route path="/" element={<Homes/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductCard/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;


// import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

// import ProductCard from './productcard';
// import Products from './products';
// import Home from './Home'; // Corrected import
// // import Homes from './Home';

// // function App() {
// //   return (
// //     <>
// //       <nav>
// //         <NavLink to="/">Home</NavLink>
// //         <NavLink to="/products">Products</NavLink>
// //       </nav>
// //       <Switch>
// //         <Route exact path="/" component={Homes} />
// //         <Route exact path="/products" component={Products} />
// //         <Route exact path="/products/:id" component={ProductCard} />
// //         {/* Add more routes as needed */}
// //         <Redirect to="/" />
// //       </Switch>
// //     </>
// //   );
// // }

// // export default App;

