import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions'; // Assuming your action creator is named delItem
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.addItem) || []; // Provide a default empty array if cartItems is undefined
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item)); // Dispatch the action to remove the item from the cart
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                        <div className="row">
                            <h3>Your Cart is Empty</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {cartItems.map((cartItem) => (
                        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                            <div className="container py-4">
                                <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                                    </div>
                                    <div className="col-md-4">
                                        <h3>{cartItem.title}</h3>
                                        <p className="lead fw-bold">${cartItem.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="container">
                        <div className="row">
                            <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
