const sql = require("./db.js");

const TeamRepository = () => {}

TeamRepository.listAll = () => {
    let query = "SELECT * FROM team";
    return new Promise((resolve, reject) => {
      sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            reject(err);
            return;
        }
       console.log(res)
        resolve(JSON.parse(JSON.stringify(res)));
      })
    })
}

TeamRepository.getById = (teamId, result) => {
    let query = "SELECT * FROM team WHERE teamId = ?";

    let parameters = [
      teamId
    ]

    sql.query(query, parameters, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {         
          result(null, res[0]);
          return;
        }
    })
}

TeamRepository.create = (newTeam, result) => {
    let query = "INSERT INTO team SET ?";

    sql.query(query, newTeam, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {         
          result(null, res[0]);
          return;
        }
    })
}

TeamRepository.edit = (teamId, team, result) => {
    let query = ```
        UPDATE team SET
            name = ?,
            inagurationDate = ?,
            state = ?, 
            updatedAt = ?
        WHERE id = ?
    ```;

    let parameters = [
        team.name,
        team.inagurationDate,
        team.state,
        team.updateAt,
        teamId
    ]

    sql.query(query, parameters, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {         
          result(null, res[0]);
          return;
        }
    })
}

TeamRepository.delete = (teamId, result) => {
    let query = "DELETE FROM team WHERE teamId = ?";

    let parameters = [
        teamId
    ]

    sql.query(query, parameters, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {         
          result(null, res[0]);
          return;
        }
    })
}

module.exports = TeamRepository
