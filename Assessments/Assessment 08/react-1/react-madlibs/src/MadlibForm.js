import React, { useState } from 'react';
import './MadlibForm.css';

function MadlibForm({ formItem, getStory }) {
	const INITIAL_STATE = {
		noun: '',
		noun2: '',
		adjective: '',
		color: ''
	};

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		formItem();
		getStory({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className='MadlibForm' onSubmit={handleSubmit}>
			{/* <label htmlFor='noun'>Noun</label> */}
			<input
				id='noun'
				type='text'
				name='noun'
				placeholder='Noun'
				value={formData.noun}
				onChange={handleChange}
				required
			/>
			{/* <label htmlFor='noun2'>Noun 2</label> */}
			<input
				id='noun2'
				type='text'
				name='noun2'
				placeholder='Noun 2'
				onChange={handleChange}
				value={formData.noun2}
				required
			/>
			{/* <label htmlFor='adjective'>Adjective</label> */}
			<input
				id='adjective'
				type='text'
				name='adjective'
				placeholder='Adjective'
				onChange={handleChange}
				value={formData.adjective}
				required
			/>
			{/* <label htmlFor='color'>Color</label> */}
			<input
				id='color'
				type='text'
				name='color'
				placeholder='color'
				onChange={handleChange}
				value={formData.color}
				required
			/>
			<button>Get Story</button>
		</form>
	);
}

export default MadlibForm;
