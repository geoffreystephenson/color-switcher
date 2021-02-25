import React, { useState } from 'react';
import ColorChangeButton from './ColorChangeButton';
import './App.css';

export default function App() {
	const [color, setColor] = useState('');
	return (
		<div className={`react-root ${color}`}>
			<div className="centered">
				<h1 className="lede">Color Picker</h1>
				<ColorChangeButton color="red" setColor={setColor} />
				<ColorChangeButton color="blue" setColor={setColor} />
				<ColorChangeButton color="yellow" setColor={setColor} />
				<ColorChangeButton color="green" setColor={setColor} />
				<ColorChangeButton color="brown" setColor={setColor} />
				<ColorChangeButton color="white" setColor={setColor} />
			</div>
		</div>
	);
}
