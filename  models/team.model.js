const Team = function(entity) {
    this.teamId = entity.teamId;
    this.name = entity.name;
    this.inagurationDate = entity.inagurationDate;
    this.state = entity.state;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
    this.status = entity.status;
};

module.exports = Team