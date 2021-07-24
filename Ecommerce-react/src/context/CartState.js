import { useReducer, useContext, createContext, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../api";
import {reducer} from"./reducers/CartReducer"

const CartStateContext = createContext()
const CartDispatchContext = createContext()




const INITIAL_STATE = {
  cartItems: [],
  length:(0)
};;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


  /// get Cart data from api
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.CART).fetchAll()
      .then(res => {
        console.log('all cart', res.data)
        dispatch({
          type: 'GET_CART',
          payload: res.data
        })
        console.log(state)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
