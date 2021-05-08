import React from "react";
import Modal from "../modal/modal";
import './pichichis-modal.css';

export default function PichichisModal(props) {
	const {pichichis, sortPichichis, isDescending, closeModal} = props;
	const sortButton = (
		<button
			className="App-button sort-button"
			onClick={sortPichichis}
		>
			Ordenar lista
		</button>
	);
	return (
		<Modal closeModal={closeModal} actionButton={sortButton}>
			<React.Fragment>
				<h3>Pichichis </h3>
				{isDescending !== null &&
						(isDescending ? "descending order" : "ascending order")}
				<ul>
					{pichichis.map(({name, goals}) => (
						<li className="pichichi" key={name}>
							<div>name: {name}</div>
							<div>goals: {goals || 0}</div>
						</li>
					))}
				</ul>
			</React.Fragment>
		</Modal>
	);
}
