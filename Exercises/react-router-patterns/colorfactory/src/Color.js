import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import './Color.css';

function Color({ colors }) {
	const { color } = useParams();
	const fullColor = colors[color];

	return (
		<div className='Color' style={{ backgroundColor: fullColor }}>
			{!color ? <Redirect exact to='/colors' /> : <h1>This is {color}</h1>}
			<Link to='/colors'>Go back</Link>
		</div>
	);
}

export default Color;
