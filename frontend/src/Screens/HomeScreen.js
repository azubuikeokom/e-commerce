import React from "react"
import { Link } from "react-router-dom";



export default function HomeScreen({items}){

    return  (
        <ul className="products">
        {items.map(product=>{
          return  (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}><img src={product.image} alt={product.name} className="img"/></Link>             
              <div className="product">
                <div className="product-name"><a href="/">{product.name}</a></div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">{product.rating} Star {product.reviews}</div>
              </div>
            </li>
            )
      
          })}            
    </ul>
    )
}