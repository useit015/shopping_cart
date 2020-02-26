import React, { useContext } from 'react'
import { Cart } from "../components/Cart"
import { Navbar } from '../components/Navbar'
import { AppContext } from '../store/AppContext'
import { CartContext } from '../store/CartContext'
import { ProductList } from '../components/ProductList'
import { DisplayError } from '../components/DisplayError'
import { DisplayLoader } from '../components/DisplayLoader'
import '../styles/App.css'

const App = () => {
	const {
		cartState,
		addProduct,
		toggleCart,
		removeProduct,
		changeProductQuantity
	} = useContext(CartContext)

	const { appState, setError, unsetError } = useContext(AppContext)
	const { error, loading, products } = appState

	if (loading)
		return <DisplayLoader />

	if (error)
		return <DisplayError back={ unsetError } />

	return (
		<div className='App'>
			<Navbar setError={ setError } toggleCart={ toggleCart } />
			<ProductList products={ products } addProduct={ addProduct } />
			<Cart state={ cartState } remove={ removeProduct } change={ changeProductQuantity } toggleCart={ toggleCart } />
		</div>
	)
}

export default App
