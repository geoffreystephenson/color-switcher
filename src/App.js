import React, { useState } from 'react';
import ColorChangeButton from './ColorChangeButton';
import './App.css';

export default function App() {
	const [color, setColor] = useState('');
	return (
		<div className={`react-root ${color}`}>
			<div className="centered">
				<h1>Color Picker</h1>
				<ColorChangeButton color="red" setColor={setColor} />
				<ColorChangeButton color="blue" setColor={setColor} />
				<ColorChangeButton color="yellow" setColor={setColor} />
			</div>
		</div>
	);
}

// export default App;
