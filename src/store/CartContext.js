
import React, { useReducer, createContext, useContext } from 'react'
import { AppContext } from '../store/AppContext'
import { initialState, reducer } from "../reducers/CartReducer"
import {
	toggleCartAction,
	addProductAction,
	removeProductAction,
	productQuantityAction,
} from "../actions/CartActions"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [ cartState, dispatch ] = useReducer(reducer, initialState)
	const { setAlert } = useContext(AppContext)

	const addProduct = product =>
		dispatch(addProductAction(product, setAlert))

	const removeProduct = id =>
		dispatch(removeProductAction(id))

	const changeProductQuantity = (id, quantity) =>
		dispatch(productQuantityAction(id, quantity))

	const toggleCart = () => dispatch(toggleCartAction())

	return (
		<CartContext.Provider value={ {
			cartState,
			addProduct,
			toggleCart,
			removeProduct,
			changeProductQuantity
		} }>
			{ children }
		</CartContext.Provider>
	)
}