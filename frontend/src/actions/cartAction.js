import axios from "axios"
import {ADD_ITEM_CART, ADD_ITEM_FAIL} from "../constants/cartConstants";

export const addToCart=(id,qty)=> async(dispatch)=>{
    try {
        const {data}=await axios.get(`/api/products/${id}`);
        dispatch({type:ADD_ITEM_CART,payload:{
            product_id:data.id,
            name:data.name,
            price:data.price,
            image:data.image,
            count_in_stock:data.count_in_stock,
            qty
        }})
    } catch (error) {
        dispatch({type:ADD_ITEM_FAIL,payload:error.message});
    }
}