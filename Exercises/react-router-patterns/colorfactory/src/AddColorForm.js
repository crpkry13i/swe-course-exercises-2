import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddColorForm.css';

function AddColorForm({ addColor }) {
	const INITIAL_COLOR = {
		name: '',
		color: ''
	};

	const [formData, setFormData] = useState(INITIAL_COLOR);
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ [formData.name]: formData.color });
		setFormData(INITIAL_COLOR);
		history.push('/colors');
	};
	return (
		<>
			<h1>ADD A COLOR</h1>
			<div className='AddColorForm'>
				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Color Name</label>
					<input
						id='name'
						type='text'
						name='name'
						placeholder='Enter Name...'
						value={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor='color'>Color Value</label>
					<input
						id='color'
						type='color'
						name='color'
						placeholder='Enter Color...'
						onChange={handleChange}
						value={formData.color}
					/>

					<button>Add Color</button>
				</form>
			</div>
		</>
	);
}

export default AddColorForm;
