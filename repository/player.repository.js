const sql = require("./db.js");

const PlayerRepository = () => {}

PlayerRepository.listAll = () => {
    let query = "SELECT * FROM player WHERE status = 1";

    return new Promise((resolve, reject) => {
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }

            resolve(res);
        })
    })
}

PlayerRepository.getById = (playerId) => {
    let query = "SELECT * FROM player WHERE playerId = ?";

    let parameters = [
        playerId
    ]

    return new Promise((resolve, reject) => {
        sql.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.length) {
                resolve(res[0]);
            }

            resolve(null)
        })
    })
}

PlayerRepository.create = (newPlayer) => {
    let query = "INSERT INTO player SET ?";

    return new Promise((resolve, reject) => {
        sql.query(query, newPlayer, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.affectedRows) {
                resolve(newPlayer);
            }
        })
    })
}

PlayerRepository.edit = (playerId, player) => {
    let query = `
        UPDATE player SET
            name = ?,
            position = ?,
            height = ?, 
            weight = ?,
            updatedAt = ?
        WHERE playerId = ?
    `;

    let parameters = [
        player.name,
        player.position,
        player.height,
        player.weight,
        player.updatedAt,
        playerId
    ]

    return new Promise((resolve, reject) => {
        sql.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }

            if (res.affectedRows) {
                resolve(player);
            }
        })
    })
}

PlayerRepository.delete = (playerId, player) => {
    let query = "UPDATE player SET status = 0 WHERE playerId = ?";

    let parameters = [
        playerId
    ]

    return new Promise((resolve, reject) => {
        sql.query(query, parameters, (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
            if (res.affectedRows) {
                resolve(player);
            }
        })
    })
}

module.exports = PlayerRepository
