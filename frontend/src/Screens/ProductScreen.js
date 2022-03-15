import React from "react"
import { useParams } from "react-router-dom";


export default function ProductScreen({products}){
    let params=useParams();
    let item=products.find(product=>product.id==params.id)
    return (   
            <div className="product-container">
                <div className="product-details">
                    <img src={item.image} alt={item.name} />
                    <div className="product">
                        <div className="product-name"><a href="/">{item.name}</a></div>
                        <div className="product-brand">{item.brand}</div>
                        <div className="product-price">{item.price}</div>
                        <div className="product-rating">{item.rating} Star {item.reviews}</div>
                        
                    </div>
                </div>
                <div>
                    <div className="details-action">
                       <div> Price : {item.price}</div>
                       <div>Status : {item.status}</div>
                       <div> Qty : <select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           </select>
                           </div>
                           <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
           
    
        
    )
}