import { ADD_ITEM_CART, ADD_ITEM_FAIL } from "../constants/cartConstants";

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_ITEM_CART:
            const retrieved_item=action.payload;
            const product=state.cartItems.find(x=>x.id==retrieved_item.id)
            if(product){
                return { ...state,cartItems:state.cartItems.map(x=>x.product_id==product.product_id? product :x)};
            }
        return {cartItems:[...state.cartItems,retrieved_item]}
        case ADD_ITEM_FAIL:
            return {loading :false,error:action.payload}
        default:
            return state;
    }
}