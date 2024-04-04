// import React, { useEffect, useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { addCart } from "../redux/actions";
// import { useDispatch } from "react-redux";

// const ProductCard = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   const addProductToCart = (productToAdd) => {
//     dispatch(addCart(productToAdd));
//   };

//   useEffect(() => {
//     let componentMounted = true;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch product');
//         }
//         const jsonData = await response.json();
//         if (componentMounted) {
//           setProduct(jsonData);
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchData();
//     }

//     return () => {
//       componentMounted = false;
//     };
//   }, [id]);

//   if (loading || !product) {
//     return (
//       <div className="col-md-6" style={{ lineHeight: 2 }}>
//         {/* Skeleton loading UI */}
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="container py-5">
//       <div className="row py-5">
//         <div className="col-md-6">
//           <img src={product.image} alt={product.title} height="400px" width="400px" />
//         </div>
//         <div className="col-md-6">
//           <h4 className="text-uppercase text-black-50">{product.category}</h4>
//           <h1 className="display-5">{product.title}</h1>
//           <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
//           <h3 className="display-6 fw-bold my-4">${product.price}</h3>
//           <p className="lead">{product.description}</p>
//           <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProductToCart(product)}>
//             Add to Cart
//           </button>
//           <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// // ProductCard.js
// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../redux/actions';

// // const ProductCard = ({ product }) => {
// //   const dispatch = useDispatch();

// //   const handleAddToCart = () => {
// //     dispatch(addToCart(product));
// //   };

// //   return (
// //     <div>
// //       <h2>{product.name}</h2>
// //       <p>{product.description}</p>
// //       <button onClick={handleAddToCart}>Add to Cart</button>
// //     </div>
// //   );
// // };

// // export default ProductCard;

import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate} 
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default Product;