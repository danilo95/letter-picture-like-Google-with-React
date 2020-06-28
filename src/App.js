import React from "react";
import "./app.scss";
import {getRandomColor,createImageFromInitials} from './Components/Utils'
function App() {
	let name = "Jhon Smith";
	let imgSrc = "";

	return (
		<div>
			<img
				id='preview'
				src={
					imgSrc.length <= 0
						? createImageFromInitials(500, name, getRandomColor())
						: imgSrc
				}
				alt='profile-pic'
			/>
		</div>
	);
}

export default App;
