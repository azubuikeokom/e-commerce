import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../actions/cartAction";

export const CartScreen=()=>{
    const {cartItems,loading,error}=useSelector(state=>state.cart)
    const {id}=useParams();
    const location=useLocation();
    const dispatch=useDispatch();
    const qty=location.search ? Number(location.search.split("=")[1]):1;

    //called on render
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))
        }
    },[])
    return loading ? <div>Loading...</div>
    : error ? <div>{error}</div> :
    (
        <div className="cart">
            <div className="cart-list">
                <div className="cart-list-container">
                    <h3>Shopping Cart</h3>
                    <div>Price</div>   
                  {cartItems.length==0 ? <div>Cart is empty</div> :
                  cartItems.map(item=>
                    <div> 
                        <img src={item.image} alt="product"/>
                        <div className="cart-name">
                            <div>{item.name}</div>   
                            <div>
                                Qty:
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>  
                                    <option value="3">3</option>      
                                </select>    
                            </div> 
                        </div>
                    </div>
                    )
                  }
                </div>
            </div>
            <div className="cart-action">
                <h3>
                   Subtotal ({cartItems.reduce((a,b)=>a+b.qty,0)} items)
                   $ {cartItems.reduce((a,b)=>a+(b.price*b.qty),0)}
                </h3> 
                <button className="button primary" disabled={cartItems.length==0}>Procced to Checkout</button>
            </div>    
        </div>
    );
}