import {ADD_TO_CART , GET_CART , REMOVE_ITEM , INCREMENT_ITEM , DECREMENT_ITEM} from "../types/types"

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        length:state.length +1
      }
      
    case GET_CART:
      return{
        ...state,
        cartItems: [...state.cartItems, ...action.payload],
        length:action.payload.length
      } 
      case REMOVE_ITEM: {
        const result = state.cartItems.filter(
          (item) => item.id !== action.payload.id)
        return {
          ...state,
          cartItems: result,   
          length:state.length - action.payload.quantity
        };
       }
       case INCREMENT_ITEM: {    
        return {
          ...state,
          cartItems: action.payload,     
          length:state.length +1 
        };
       }
       case DECREMENT_ITEM: {    
        return {
          ...state,
          cartItems: action.payload,  
          length:state.length -1   
        };
       }
     
    default:
      return state 
  }
}