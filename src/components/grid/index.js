import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {merge} from "ramda"

import getStyles from "./get-styles"
import Button from "./buttons"

export default class GridView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 handed: "right",
			 view: "desktop",
		}
		this.changeView = this.changeView.bind(this)
	}
	changeView(value) {
		console.log(value)
	}
	render() {

		return (
			<div style={getStyles(this.state).wrapper} className="wrapper">
				<div style={getStyles(this.state).stage}>Content Area</div>
				<div style={getStyles(this.state).navigation}>Navigation</div>
				<div style={getStyles(this.state).controls}>
					<Button
						icon="computer"
						text="Desktop"
						value="desktop"
						press={this.changeView}
					/>
				</div>
			</div>
		)
	}
}