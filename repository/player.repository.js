const sql = require("./db.js");

const PlayerRepository = () => {}

PlayerRepository.listAll = (result) => {
    let query = "SELECT * FROM player";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res);
    })
}

PlayerRepository.getById = (playerId, result) => {
    let query = "SELECT * FROM player WHERE playerId = ?";

    let parameters = [
        playerId
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

PlayerRepository.create = (newPlayer, result) => {
    let query = "INSERT INTO team SET ?";

    sql.query(query, newPlayer, (err, res) => {
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

PlayerRepository.edit = (playerId, player, result) => {
    let query = ```
        UPDATE player SET
            name = ?,
            position = ?,
            height = ?, 
            weight = ?,
            updatedAt = ?
        WHERE id = ?
    ```;

    let parameters = [
        player.name,
        player.position,
        player.height,
        player.weight,
        player.updatedAt,
        playerId
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

PlayerRepository.delete = (playerId, result) => {
    let query = "DELETE FROM player WHERE playerId = ?";

    let parameters = [
        playerId
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

module.exports = PlayerRepository
