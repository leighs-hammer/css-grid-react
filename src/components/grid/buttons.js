import React from 'react'
import colors from "../../constants/colors"
import agnosticStyles from "../../constants/agnosticStyles"

const style = {
	wrapper : {
		padding: "10pt",
		backgroundColor: colors.blue,
		border: `1px solid ${colors.light}`,
		color: "#ffffff",
		borderRadius: "4px",
		margin: "8px",
		display: "inline-block"
	},
	icon : {
		display: "inline-block",
		verticalAlign: "middle",
		marginRight: "8px",
		fontSize: 24
	},
	text: {
		display: "inline-block",
		verticalAlign: "middle",
	}
}

const activeStyle = {}

export default (props) => {
	
	const {
		active,
		click,
		color,
		icon, 
		text,
		value,
		press,
	} = props

	return (
		<div className="button" onClick={() => press(value)} style={style.wrapper}>
			<i className="material-icons" style={style.icon}>{icon}</i>
			<span style={style.text}>{text}</span>
		</div>
	)
}
