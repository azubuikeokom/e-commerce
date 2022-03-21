import React, { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate  } from "react-router-dom";
import { detailsProduct } from "../actions/productsAction";



export default function ProductScreen(){
    const navigate=useNavigate();
    const {id}=useParams();
    const [qty,setQty]=useState(1);
    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();

    //called on render
    useEffect(()=>{
        dispatch(detailsProduct(id))
    },[])
    const handleAddToCart=()=>{
        navigate(`/cart/${id}?qty=${qty}`);
    }
    return loading ? <div>loading....</div> : error ?
        <div>{error}</div> :
    (   
            <div className="product-container">
                <div className="product-details">
                    <img src={product.image} alt={product.name} />
                    <div className="product">
                        <div className="product-name"><a href="/">{product.name}</a></div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating} Star {product.reviews}</div>
                        
                    </div>
                </div>
                <div>
                    <div className="details-action">
                       <div> Price : {product.price}</div>
                       <div>Status : {product.status}</div>
                       <div> Qty : <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                          {[...Array(product.count_in_stock).keys()].map(x=>
                              <option key={x+1} value={x+1}>{x+1}</option>
                          )}
                           </select>
                           </div>{product.count_in_stock > 0 ?
                            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button> : <p>Item is out of stock</p>}
                           
                    </div>
                </div>
            </div>
           
    
        
    )
}