let playerService = require("../services/player.service")
const Player = require("../ models/player.model");

exports.listAll = (req, res) => {
    playerService.listAll().then(
        data => res.json(data)
    )
};

exports.getById = (req, res) => {
    playerService.getById(req.params.playerId).then(
        data => res.json(data)
    )
} 

exports.create = (req, res) => {
    playerService.create(
        new Player(req.body)
    ).then(
        data => res.json(data)
    )
} 

exports.edit = (req, res) => {
    playerService.edit(
        req.params.playerId,
        new Player(req.body)
    ).then(
        data => res.json(data)
    )
} 

exports.delete = (req, res) => {
    playerService.delete(
        req.params.playerId
    ).then(
        data => res.json(data)
    )
} 
