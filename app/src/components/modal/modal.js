import React from "react";
import "./modal.css";

export default function Modal(props) {
	const {closeModal, actionButton, children} = props;

	return (
		<div className="modal-overlay App-center-content">
			<div className="modal-box">
				<div className="modal-message">
					{children}
				</div>
				<div>
					<button
						className="App-button modal-close-button"
						onClick={closeModal}
					>
						Cerrar
					</button>
                    {actionButton}
				</div>
			</div>
		</div>
	);
}
