import React from 'react';
import { Link } from 'react-router-dom';

import './ColorList.css';

function ColorList({ colors }) {
	const colorRoutes = Object.keys(colors).map((color) => (
		<li key={color}>
			<Link to={`/colors/${color}`}>{color}</Link>
		</li>
	));
	return (
		<>
			<div className='ColorList'>
				<h1>Welcome to the color factory!</h1>
				<Link to={'/colors/new'}>Add a color</Link>
			</div>
			<p>Please select a color</p>
			<ul>{colorRoutes}</ul>
		</>
	);
}

export default ColorList;
