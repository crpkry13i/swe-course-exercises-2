import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import Story from './Story';

function Madlib() {
	const [formItems, setFormItems] = useState(true);
	const [inputs, setInputs] = useState({});

	const formItem = () => setFormItems((formItems) => !formItems);
	const getStory = (inputs) => setInputs(inputs);
	const restart = () => {
		formItem();
		setInputs({});
	};

	return (
		<div className='Madlib'>
			<h1>Madlibs!</h1>
			{formItems ? (
				<MadlibForm getStory={getStory} formItem={formItem} />
			) : (
				<Story inputs={inputs} restart={restart} />
			)}
		</div>
	);
}

export default Madlib;
