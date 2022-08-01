const Team = function(entity) {
    this.teamId = entity.teamId || null;
    this.name = entity.name;
    this.inaugurationDate = entity.inaugurationDate;
    this.state = entity.state;
    this.createdAt = entity.createdAt || null;
    this.updatedAt = entity.updatedAt || null;
    this.status = entity.status || null;
};

module.exports = Team