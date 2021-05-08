import React from "react";

export default function Header(props) {
    const {showModal} = props;
	return (
		<header className="App-header">
			<button
				className="App-pichichis-button App-button"
				onClick={showModal}
			>
				Pichichis
			</button>
		</header>
	);
}
