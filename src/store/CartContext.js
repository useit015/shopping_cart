
import React, { useReducer, createContext, useCallback, useContext } from 'react'
import {
	toggleCartAction,
	addProductAction,
	removeProductAction,
	productQuantityAction,
} from "../actions/CartActions"
import { AppContext } from '../store/AppContext'
import { initialState, reducer } from "../reducers/CartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [ cartState, dispatch ] = useReducer(reducer, initialState)
	const { setAlert } = useContext(AppContext)

	const addProduct = useCallback(
		product => dispatch(addProductAction(product, setAlert)),
		[ dispatch, setAlert ]
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