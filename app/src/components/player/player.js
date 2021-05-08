import React from "react";

export default function Player(props) {
	const {player, showModal, team} = props;
	return (
		<div className="App-player" key={player.id} onClick={showModal}>
			<div className="App-player-content">
				<div className="App-player-image App-flex">
					<img src={player.img}></img>
				</div>
				<div className="App-player-text">
					<span className="App-player-name">{player.name}</span>
					<span className="App-player-position">
						{player.position}
					</span>
					{team && (
						<span className="App-player-team">
							{team.name}
						</span>
					)}
				</div>
			</div>
			{team && (
				<img
					className="App-team-shield"
					src={`https:${team.shield}`}
				></img>
			)}
		</div>
	);
}
