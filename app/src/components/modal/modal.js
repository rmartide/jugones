import React from "react";
import "./modal.css";

export default function Modal(props) {
    const {closeModal} = props;
	return (
		<div className="modal-overlay App-center-content">
			<div className="modal-box">
				<div className="modal-message">
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem
                </div>
				<button className="App-button modal-close-button" onClick={closeModal}>
					Cerrar
				</button>
			</div>
		</div>
	);
}
