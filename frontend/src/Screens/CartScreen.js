import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const CartScreen=(props)=>{
    const product_id=props.match.params.id;
    return (
        <div>Cart Screen</div>
    )
}