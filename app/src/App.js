import "./App.css";

import React, {PureComponent} from "react";
import Modal from "./components/modal/modal";
const domain = "http://localhost:3001";

class App extends PureComponent {
	state = {
		players: [],
		teams: {},
		showModal: false,
	};

	componentDidMount() {
		fetch(`${domain}/players`)
			.then((response) => {
				return response.json();
			})
			.then((players) => {
				this.setState({players});
			});
		fetch(`${domain}/teams`)
			.then((response) => {
				return response.json();
			})
			.then((teams) => {
				this.setState({
					teams: this.getTeams(teams),
				});
			});
	}

	getTeams(teams) {
		const teamsTemp = {};
		teams.forEach((team) => (teamsTemp[team.id] = team));
		return teamsTemp;
	}

	handleModalVisibility = (show) => {
		this.setState({
			showModal: show,
		});
	};

	render() {
		const {players, teams, showModal} = this.state;
		return (
			<React.Fragment>
        {showModal && <Modal closeModal={() => this.handleModalVisibility(false)}></Modal>}
				<div className="App">
					<header className="App-header">
						<button
							className="App-pichichis-button App-button"
							onClick={() => this.handleModalVisibility(true)}
						>
							Pichichis
						</button>
					</header>
					<h3>Los Jugadores</h3>
					<div className="App-players">
						{/* 
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre. 
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres. 
          ** Los comentarios de los ejercicios no los borres.
        */}
						{/* 
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */}
						{players.map((player) => (
							<div className="App-player" key={player.name}>
								<div className="App-player-content">
									<div className="App-player-image App-flex">
										<img src={player.img}></img>
									</div>
									<div className="App-player-text">
										<span className="App-player-name">
											{player.name}
										</span>
										<span className="App-player-position">
											{player.position}
										</span>
										{teams[player.teamId] && (
											<span className="App-player-team">
												{teams[player.teamId].name}
											</span>
										)}
									</div>
								</div>
								{teams[player.teamId] && (
									<img
										className="App-team-shield"
										src={`https:${
											teams[player.teamId].shield
										}`}
									></img>
								)}
							</div>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
