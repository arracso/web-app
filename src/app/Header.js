/**
 * @file Header
 * @version 0.0.1
 * @module
 */

"use strict";

// React imports
import React from "react";
import { Link } from 'react-router-dom';
// Material-UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

/**
 * Header of the app.
 * @extends React.Component
 */
export default class Header extends React.Component {
	/**
	 * Creates the Header component of the app.
	 * @param {object} props - React.Component props
	 */
	constructor(props){
		super(props);
		this.state = {};
	}

	/**
	 * Renders the Header app.
	 */
	render(){
		
		return (
			<AppBar color="inherit">
				<Toolbar className="toolbar">
					<Link to='/'><button>home</button></Link>
					<Link to='/test'><button>test</button></Link>
					<Link to='/test2'><button>test2</button></Link>
				</Toolbar>
			</AppBar>
		);
	}
}