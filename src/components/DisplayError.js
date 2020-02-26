import React from 'react'

export const DisplayError = ({ back }) => {
	return (
		<div className="App error">
			<h1>Oups! Something went wrong</h1>
			<button className="btn" onClick={ back }>
				Go back
			</button>
		</div>
	)
}
