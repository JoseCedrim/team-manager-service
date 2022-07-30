exports.listAll = (req, res) => {
    res.json([
        {"name":"Renan"}
    ]);
};

exports.getById = (req, res) => {
    res.json({"name":"Hulk"})
} 

exports.create = (req, res) => {
    res.json({"name":"Gabi gol"})
} 

exports.edit = (req, res) => {
    res.json({"name":"José"})
} 

exports.delete = (req, res) => {
    res.json({"name":"Fernando"})
} 
