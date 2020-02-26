
import React, { useReducer, createContext, useCallback } from 'react'
import {
	toggleCartAction,
	addProductAction,
	removeProductAction,
	productQuantityAction,
} from "../actions/CartActions"
import { initialState, reducer } from "../reducers/CartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [ cartState, dispatch ] = useReducer(reducer, initialState)

	const addProduct = useCallback(
		product => dispatch(addProductAction(product)),
		[ dispatch ]
	)

	const removeProduct = useCallback(
		id => dispatch(removeProductAction(id)),
		[ dispatch ]
	)

	const changeProductQuantity = useCallback(
		(id, quantity) => dispatch(productQuantityAction(id, quantity)),
		[ dispatch ]
	)

	const toggleCart = useCallback(
		() => dispatch(toggleCartAction()),
		[ dispatch ]
	)

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