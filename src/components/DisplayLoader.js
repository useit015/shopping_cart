
import React from 'react'
import '../styles/Loader.css'

export const DisplayLoader = () => {
	return (
		<div className="App loading">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
