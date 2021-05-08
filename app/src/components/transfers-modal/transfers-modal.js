import React, {useState} from "react";
import Modal from "../modal/modal";
import "./transfers-modal.css";

export default function TransfersModal(props) {
	const {closeModal, transferPlayer, teams, players, transferResult} = props;
	const [filteredPlayers, setFilteredPlayers] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(undefined);
	const [selectedPlayer, setSelectedPlayer] = useState(undefined);
	const transferButton = (
		<button
			disabled={!selectedTeam || !selectedPlayer}
			className="App-button transfer-button"
			onClick={() => transferPlayer(selectedTeam, selectedPlayer)}
		>
			Transferir
		</button>
	);

	const filterPlayers = (event) => {
		const selectedTeamTemp = event.target.value;
		setSelectedTeam(selectedTeamTemp);
		setFilteredPlayers(
			selectedTeamTemp
				? players.filter(({teamId}) => teamId !== selectedTeamTemp)
				: []
		);
		if (!selectedTeamTemp) {
			setSelectedPlayer(undefined);
		}
	};

	const selectPlayer = (event) => {
		setSelectedPlayer(event.target.value);
	};

	return (
		<Modal closeModal={closeModal} actionButton={transferButton}>
			<React.Fragment>
				<h3>Transferencias</h3>
				<div className="transfer-teams">
					Equipos:
					<select onChange={filterPlayers} value={selectedTeam}>
						<option value={undefined}></option>
						{Object.values(teams).map((team) => (
							<option key={team.id} value={team.id}>
								{team.name}
							</option>
						))}
					</select>
				</div>
				<div className="transfer-players">
					Jugadores:
					<select onChange={selectPlayer} value={selectedPlayer}>
						<option value={undefined}></option>
						{filteredPlayers.map((player) => (
							<option key={player.id} value={player.id}>
								{player.name}
							</option>
						))}
					</select>
				</div>
				{selectedTeam && (
					<span className="transfer-money">Presupuesto: {teams[selectedTeam].money}</span>
				)}
                {transferResult && <span className="transfer-result">{transferResult.message || 'succesful transfer'}</span>}
			</React.Fragment>
		</Modal>
	);
}
