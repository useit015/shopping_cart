import React, { useContext } from 'react'
import { AppContext } from '../store/AppContext'
import '../styles/Alert.css'

export const Alert = () => {
	const { appState: { alerts } } = useContext(AppContext)

	return (
		<>
			{
				alerts.map(({ text, color }, i) =>
					<div
						key={ i }
						className="alert"
						style={ {
							top: !i ? 20 : i * 50 + 20,
							backgroundColor: color
						} }>
						{ text }
					</div>
				)
			}
		</>
	)
}
