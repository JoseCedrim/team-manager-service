const Player = function(entity) {
    this.playerId = entity.playerId;
    this.name = entity.name;
    this.position = entity.position;
    this.height = entity.height;
    this.weight = entity.weight;
    this.teamId = entity.teamId;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.status = entity.status;
};

module.exports = Player