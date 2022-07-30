const TeamService = () => {}

let teamRepository = require("../repository/team.repository")

TeamService.listAll = async () => {
    return await teamRepository.listAll()
}

TeamService.getById = (teamId) => {
    return teamRepository.getById(teamId)
}

TeamService.create = (team) => {
    return teamRepository.create(team)
}

TeamService.edit = (teamId, team) => {
    return teamRepository.edit(teamId, team)
}

TeamService.delete = (teamId) => {
    return teamRepository.delete(teamId)
}

module.exports = TeamService
