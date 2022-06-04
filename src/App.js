import React from 'react';
import logo from './logo.svg';
import './App.css';
import Eightball from './Eightball';
import Answers from './Answers';

function App() {
	return (
		<>
			<Eightball answers={Answers} />
		</>
	);
}

export default App;
