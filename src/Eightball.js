import React, { useState } from 'react';
import './Eightball.css';

const Eightball = ({ answers }) => {
	const reset = () => {
		setAnswer('Think of a Question.');
		setColor('black');
	};

	const randomAnswer = () => {
		const idx = Math.floor(Math.random() * answers.length);
		return answers[idx];
	};

	// selects an answer once the user clicks on the eight ball
	const giveAnswer = () => {
		const selectedAnswer = randomAnswer();
		setAnswer(selectedAnswer.msg);
		setColor(selectedAnswer.color);
	};

	const [answer, setAnswer] = useState('Think of a Question.');
	const [color, setColor] = useState('black');

	return (
		<div classname="app">
			<div className={`eightball ${color}`} onClick={giveAnswer}>
				<div className="center">{answer}</div>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Eightball;
