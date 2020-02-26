import React from "react"

export const Eye = ({ size = 20, color = "#444" }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0 0 24 24" fill="none" stroke={ color } strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
		<circle cx="12" cy="12" r="3"></circle>
	</svg>
)
