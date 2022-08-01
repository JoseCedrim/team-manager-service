const { v4: uuidv4 } = require('uuid');
let dateUtils = require("../utils/date.utils")

const TeamService = () => {}

let teamRepository = require("../repository/team.repository")

TeamService.listAll = () => {
   return teamRepository.listAll()
}

TeamService.getById = (teamId) => {
    return teamRepository.getById(teamId)
}

TeamService.create = (team) => {
    team.teamId = uuidv4();
    team.createdAt = dateUtils.now();
    team.updatedAt = team.createdAt;
    team.status = true;

    return teamRepository.create(team)
}

TeamService.edit = async (teamId, team) => {
    team.updatedAt = dateUtils.now()

    let oldTeam = await TeamService.getById(teamId);
    team.teamId = oldTeam.teamId;
    team.createdAt = oldTeam.createdAt;
    team.status = oldTeam.status;

    return teamRepository.edit(teamId, team)
}

TeamService.delete = async (teamId) => {
    let oldTeam = await TeamService.getById(teamId);
    oldTeam.status = false;

    return teamRepository.delete(teamId, oldTeam)
}

module.exports = TeamService
