const cacheTeams = (teams) => {
    setItem('teams', teams);
}

const cachePlayers = (players) => {
    setItem('players', players);
}

const cachePichichis = (pichichis) => {
    setItem('pichichis', pichichis);
}

const restoreTeams = () => {
    return getItem('teams');
}

const restorePlayers = () => {
    return getItem('players');
}

const restorePichichis = () => {
    return getItem('pichichis');
}

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


export {
    cacheTeams,
    cachePlayers,
    cachePichichis,
    restoreTeams,
    restorePlayers,
    restorePichichis
}