import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
        PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import axios from "axios";

export const listProducts=()=>async (dispatch)=>{
  try{
    //reducer responds to dispatched actions
    dispatch({type:PRODUCT_LIST_REQUEST});
    const {data}=await axios.get("/api/products");
    dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});

  }catch(error){
    dispatch({type:PRODUCT_LIST_FAIL,error:error.message})
  }   
}
export const detailsProduct=(product_id)=> async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST,payload:product_id})
        const {data}=await axios.get("/api/products/"+product_id);
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}
