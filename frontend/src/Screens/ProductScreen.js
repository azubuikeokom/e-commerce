import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsProduct } from "../actions/productsAction";


export default function ProductScreen(){
    const {id}=useParams()
    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(id))
    },[])
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
                       <div> Qty : <select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           </select>
                           </div>
                           <button className="add-to-cart"><Link to={`/cart/${product.id}`}>Add to Cart</Link></button>
                    </div>
                </div>
            </div>
           
    
        
    )
}