import "./App.css";

import React, {PureComponent} from "react";
import {
	cachePichichis,
	cachePlayers,
	cacheTeams,
	restorePichichis,
	restorePlayers,
	restoreTeams,
} from "./util/storage";
import PichichisModal from "./components/pichichis-modal/pichichis-modal";
import TransfersModal from "./components/transfers-modal/transfers-modal";
import Player from "./components/player/player";
import Header from "./components/header/header";
const domain = "http://localhost:3001";

class App extends PureComponent {
	state = {
		players: [],
		teams: {},
		pichichis: [],
		showPichichisModal: false,
		showTransfersModal: false,
		isDescending: null,
		transferResult: null,
	};

	componentDidMount() {
		if (!navigator.onLine) {
			this.setState({
				players: restorePlayers(),
				teams: restoreTeams(),
				pichichis: restorePichichis(),
			});
		} else {
			this.fetchPlayers();
			this.fetchTeams();
		}
	}

	fetchPlayers() {
		fetch(`${domain}/players`)
			.then((response) => {
				return response.json();
			})
			.then((players) => {
				this.setState({players});
				cachePlayers(players);
				if (this.state.pichichis.length === 0) {
					this.fetchPichichis(players);
				}
			});
	}

	fetchTeams() {
		fetch(`${domain}/teams`)
			.then((response) => {
				return response.json();
			})
			.then((teams) => {
				const teamsTemp = this.getTeams(teams);
				cacheTeams(teamsTemp);
				this.setState({
					teams: teamsTemp,
				});
			});
	}

	fetchPichichis(players) {
		fetch(`${domain}/pichichis`)
			.then((response) => {
				return response.json();
			})
			.then((pichichis) => {
				const pichichisTemp = this.getPichichis(pichichis, players);
				cachePichichis(pichichisTemp);
				this.setState({
					pichichis: pichichisTemp,
				});
			});
	}

	getPichichis(pichichis, players) {
		const playersTemp = {};
		players.forEach(({name, id}) => {
			playersTemp[id] = name;
		});
		return pichichis.map(({playerId, goals}) => ({
			name: playersTemp[playerId],
			goals: this.parseGoals(goals),
		}));
	}

	parseGoals(goals) {
		const tempGoals = Number(goals || 0);
		let result = 0;
		if (Number.isInteger(tempGoals)) {
			result = tempGoals;
		} else if (Number.isNaN(tempGoals) && goals.includes("goles")) {
			result = Number(goals.split("goles")[0]);
		}
		return result;
	}

	getTeams(teams) {
		const teamsTemp = {};
		teams.forEach((team) => (teamsTemp[team.id] = team));
		return teamsTemp;
	}

	handleModalVisibility = (key, show) => {
		this.setState({
			[key]: show,
		});
		if (!!this.state.transferResult) {
			this.setState({
				transferResult: null,
			});
		}
	};

	sortPichichis = () => {
		this.setState(({isDescending, pichichis}) => ({
			isDescending: !isDescending,
			pichichis: pichichis.sort((a, b) =>
				isDescending ? a.goals - b.goals : b.goals - a.goals
			),
		}));
	};

	transferPlayer = (teamId, playerId) => {
		fetch(`${domain}/transfer`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({teamId, playerId}),
		})
			.then((response) => {
				return response.json();
			})
			.then((transferResult) => {
				this.setState({
					transferResult,
				});
				if (!transferResult.error) {
					this.fetchTeams();
					this.fetchPlayers();
				}
			});
	};

	render() {
		const {
			players,
			teams,
			showPichichisModal,
			pichichis,
			isDescending,
			showTransfersModal,
			transferResult,
		} = this.state;
		return (
			<React.Fragment>
				{showPichichisModal && (
					<PichichisModal
						closeModal={() =>
							this.handleModalVisibility(
								"showPichichisModal",
								false
							)
						}
						pichichis={pichichis}
						isDescending={isDescending}
						sortPichichis={this.sortPichichis}
					></PichichisModal>
				)}
				{showTransfersModal && (
					<TransfersModal
						closeModal={() =>
							this.handleModalVisibility(
								"showTransfersModal",
								false
							)
						}
						teams={teams}
						players={players}
						transferPlayer={this.transferPlayer}
						transferResult={transferResult}
					></TransfersModal>
				)}
				{/* 
					TODO ejercicio 2
					Debes obtener los players en lugar de los equipos y pintar su nombre. 
					Borra todo el c??digo que no sea necesario. Solo debe existir un t??tulo: Los jugadores
					y una lista con sus nombres. 
					** Los comentarios de los ejercicios no los borres.
					*/}
				{/* 
					TODO ejercicio 3
					Vamos a pasar a darle dise??o. Crea el dise??o propuesto en el readme con los requerimientos que se necesite.
					Guiate por las im??genes.
					*/}
				<div className="App">
					<Header
						showModal={() =>
							this.handleModalVisibility(
								"showPichichisModal",
								true
							)
						}
					></Header>
					<h3>Los Jugadores</h3>
					<div className="App-players">
						{players.map((player) => (
							<Player
								key={player.id}
								player={player}
								team={teams[player.teamId]}
								showModal={() =>
									this.handleModalVisibility(
										"showTransfersModal",
										true
									)
								}
							></Player>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
