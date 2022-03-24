import React, { useState, useContext } from 'react';
import MenuContext from './MenuContext';

import './MenuForm.css';

function MenuForm({ addItem, type }) {
	// copy format from db.json
	const INTIAL_STATE = {
		id: '',
		name: '',
		description: '',
		recipe: '',
		serve: ''
	};

	const [formData, setFormData] = useState(INTIAL_STATE);
	const { items, setItems } = useContext(MenuContext); //<-- use state logic

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		// e.preventDefault();

		const menuItems = { ...items }; //<-- spread menu items
		menuItems[type].push(formData); //<-- add item type into its menu type

		addItem(type, formData);
		setItems(menuItems);
		setFormData(INTIAL_STATE);
	};

	return (
		<form className='MenuForm' onSubmit={handleSubmit}>
			<label htmlFor='name'>Add New Menu Item</label>
			<input
				id='name'
				type='text'
				name='name'
				required
				placeholder='Name of item'
				value={formData.name}
				onChange={handleChange}
			/>

			<label htmlFor='description'>Description</label>
			<input
				id='description'
				required
				type='text'
				name='description'
				placeholder='Description...'
				value={formData.description}
				onChange={handleChange}
			/>

			<label htmlFor='recipe'>Recipe</label>
			<input
				id='recipe'
				type='text'
				name='recipe'
				placeholder='Recipe...'
				value={formData.recipe}
				onChange={handleChange}
			/>

			<label htmlFor='serve'>How to serve?</label>
			<input
				id='serve'
				type='text'
				name='serve'
				placeholder='Serve?'
				value={formData.serve}
				onChange={handleChange}
			/>

			<button>Add Item</button>
		</form>
	);
}

export default MenuForm;
