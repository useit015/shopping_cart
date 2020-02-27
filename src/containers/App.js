import React, { useContext } from 'react'
import { Cart } from './Cart'
import { Alert } from '../containers/Alert'
import { Navbar } from '../components/Navbar'
import { AppContext } from '../store/AppContext'
import { CartContext } from '../store/CartContext'
import { ProductList } from '../components/ProductList'
import { DisplayError } from '../components/DisplayError'
import { DisplayLoader } from '../components/DisplayLoader'
import '../styles/App.css'

const App = () => {
	const { appState, setError, unsetError } = useContext(AppContext)
	const { addProduct, toggleCart } = useContext(CartContext)
	const { error, loading, products } = appState

	if (loading)
		return <DisplayLoader />

	if (error)
		return <DisplayError back={ unsetError } />

	return (
		<div className='App'>
			<Navbar setError={ setError } toggleCart={ toggleCart } />
			<ProductList products={ products } addProduct={ addProduct } />
			<Cart />
			<Alert />
		</div>
	)
}

export default App
