let teamService = require("../services/team.service")

exports.listAll = (req, res) => {
    res.json(teamService.listAll())  
};

exports.getById = (req, res) => {
    res.json({"name":"cruzeiro"})
} 

exports.create = (req, res) => {
    res.json({"name":"flamengo"})
} 

exports.edit = (req, res) => {
    res.json({"name":"fluminese"})
} 

exports.delete = (req, res) => {
    res.json({"name":"sport"})
} 
