const connection = require("./db.js");

const TeamRepository = () => {}

TeamRepository.listAll = () => {
    let query = "SELECT * FROM team WHERE status = true";

    return new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            reject(err);
            return;
        }

        let response = JSON.parse(JSON.stringify(res));

        resolve(response);
      })
    })
}

TeamRepository.getById = teamId => {
    let query = "SELECT * FROM team WHERE teamId = ?";

    let parameters = [
      teamId
    ]

    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.length) {
                resolve(res[0]);
            }
        })
    })
}

TeamRepository.create = (newTeam) => {
    let query = "INSERT INTO team SET ?";

    return new Promise((resolve, reject) => {
        connection.query(query, newTeam, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.affectedRows > 0) {
                resolve(newTeam);
            }
        })
    })
}

TeamRepository.edit = (teamId, team) => {
    let query = `
        UPDATE team SET
            name = ?,
            inaugurationDate = ?,
            state = ?, 
            updatedAt = ?
        WHERE teamId = ?
    `;

    let parameters = [
        team.name,
        team.inaugurationDate,
        team.state,
        team.updatedAt,
        teamId
    ]

    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err)
                return;
            }

            if (res.affectedRows) {
                resolve(team);
            }
        })
    })
}

TeamRepository.delete = (teamId, team) => {
    let query = "UPDATE team SET status = false WHERE teamId = ?";

    let parameters = [
        teamId
    ]

    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.affectedRows) {
                return resolve(team)
            }
        })
    })
}

module.exports = TeamRepository
