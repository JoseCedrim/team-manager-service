let teamService = require("../services/team.service")
const Team = require("../ models/team.model");

exports.listAll = (req, res) => {
    teamService.listAll().then(
        data => res.json(data)
    )
};

exports.getById = (req, res) => {
    teamService.getById(req.params.teamId).then(
        data => res.json(data)
    )
}

exports.create = (req, res) => {
    teamService.create(
        new Team(req.body)
    ).then(
        data => res.json(data)
    )
}

exports.edit = (req, res) => {
    teamService.edit(
        req.params.teamId,
        new Team(req.body)
    ).then(
        data => res.json(data)
    )
}

exports.delete = (req, res) => {
    teamService.delete(
        req.params.teamId
    ).then(
        data => res.json(data)
    )
}
