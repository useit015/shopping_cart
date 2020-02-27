import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { AppProvider } from "./store/AppContext"
import { CartProvider } from "./store/CartContext"
import './styles/index.css'

ReactDOM.render(
	<AppProvider>
		<CartProvider>
			<App />
		</CartProvider>
	</AppProvider>,
	document.getElementById('root')
)
