const PlayerService = () => {}

let playerRepository = require("../repository/player.repository")

PlayerService.listAll = () => {
    return playerRepository.listAll()
}

PlayerService.getById = (playerId) => {
    return playerRepository.getById(playerId)
}

PlayerService.create = (player) => {
    return playerRepository.create(player) 
}

PlayerService.edit = (playerId, player) => {
    return playerRepository.edit(playerId, player)
}

PlayerService.delete = (playerId) => {
    return playerRepository.delete(playerId)
}

module.exports = PlayerService
