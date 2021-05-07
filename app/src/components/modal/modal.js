import React from "react";
import "./modal.css";

export default function Modal(props) {
	const {closeModal, pichichis, sortPichichis, isDescending} = props;

	return (
		<div className="modal-overlay App-center-content">
			<div className="modal-box">
				<div className="modal-message">
					<h3>Pichichis </h3>
					{isDescending !== null &&
						(isDescending ? "descending order" : "ascending order")}
					<ul>
						{pichichis.map(({name, goals}) => (
							<li className="modal-pichichi" key={name}>
								<div>name: {name}</div>
								<div>goals: {goals || 0}</div>
							</li>
						))}
					</ul>
				</div>
				<div>
					<button
						className="App-button modal-close-button"
						onClick={closeModal}
					>
						Cerrar
					</button>
					<button
						className="App-button modal-order-button"
						onClick={sortPichichis}
					>
						Ordenar lista
					</button>
				</div>
			</div>
		</div>
	);
}
