const getPlayer = (playerId, teams) =>  {
  var player
  var team = teams.find(t => {
    player = t.players.find(p => p.id === playerId)
    return player
  })

  if (player && team) {
    return { player, teamId: team.id }
  }

  return false
}

const removePlayerFromTeam = (playerId, teams) => {
  var playerIndex
  var team = teams.find(t => {
    playerIndex = t.players.findIndex(p => p.id === playerId)
    return playerIndex !== -1
  })
  team.players.splice(playerIndex, 1);
}

module.exports = {
  getPlayer,
  removePlayerFromTeam
}
