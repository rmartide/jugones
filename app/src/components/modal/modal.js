import React from "react";
import "./modal.css";

export default function Modal(props) {
	const {closeModal, pichichis} = props;
	return (
		<div className="modal-overlay App-center-content">
			<div className="modal-box">
				<div className="modal-message">
					<h3>Pichichis </h3>
					<ul>
						{pichichis.map(({name, goals}) => (
							<li className="modal-pichichi" key={name}>
								<div>name: {name}</div>
								<div>goals: {goals || 0}</div>
							</li>
						))}
					</ul>
				</div>
				<button
					className="App-button modal-close-button"
					onClick={closeModal}
				>
					Cerrar
				</button>
			</div>
		</div>
	);
}
