const { v4: uuidv4 } = require('uuid');
let dateUtils = require("../utils/date.utils")

const PlayerService = () => {}

let playerRepository = require("../repository/player.repository")

PlayerService.listAll = () => {
    return playerRepository.listAll()
}

PlayerService.getById = (playerId) => {
    return playerRepository.getById(playerId)
}

PlayerService.create = (player) => {
    player.playerId = uuidv4();
    player.createdAt = dateUtils.now();
    player.updatedAt = player.createdAt;
    player.status = true;

    return playerRepository.create(player) 
}

PlayerService.edit = async (playerId, player) => {
    player.updatedAt = dateUtils.now();

    let oldPlayer = await PlayerService.getById(playerId);
    player.playerId = oldPlayer.playerId;
    player.createdAt = oldPlayer.createdAt;
    player.status = oldPlayer.status;

    return playerRepository.edit(playerId, player)
}

PlayerService.delete = async (playerId) => {
    let oldPlayer = await PlayerService.getById(playerId);
    oldPlayer.status = false;

    return playerRepository.delete(playerId, oldPlayer)
}

module.exports = PlayerService
