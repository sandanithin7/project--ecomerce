// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loaders from './loaders';
// import { NavLink } from 'react-router-dom';

// const CategoryButton = ({ category, onClick, label }) => {
//   return (
//     <button className='btn btn-outline-dark me-2' onClick={() => onClick(category)}>
//       {label}
//     </button>
//   );
// };

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('ALL');

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setData(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   if (loading) {
//     return <Loaders />;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data || data.length === 0) {
//     return <div>No data found.</div>;
//   }

//   const filteredData = selectedCategory === 'ALL' ? data : data.filter(item => item.category === selectedCategory);

//   return (  
//     <div>
//       <div className='buttons d-flex justify-content-center mb-5 pb-5'>
//         <CategoryButton category='ALL' onClick={handleCategoryChange} label='ALL' />
//         <CategoryButton category="men's clothing" onClick={handleCategoryChange} label="Men's Clothing" />
//         <CategoryButton category="women's clothing" onClick={handleCategoryChange} label="Women's Clothing" />
//         <CategoryButton category='jewelry' onClick={handleCategoryChange} label='Jewelry' />
//         <CategoryButton category='electronics' onClick={handleCategoryChange} label='Electronics' />
//       </div>
//       <div className='container my-5 py-5'>
//         <div className='row'>
//           <div className='col-12 mb-5'>
//             <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
//             <hr />
//             <ul className="row">
//               {filteredData.map(product => (
//                 <div key={product.id} className='col-md-3 mb-4'>
//                   <div className="card h-100 text-center p-4">
//                     <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
//                     <div className="card-body">
//                       <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
//                       <p className="card-text">${product.price}</p>
//                       <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
    </>
    );
  };

  const filterProduct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    {/* <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">
                      Buy Now
                    </NavLink> */}
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;