module.exports = {
    now() {
        let splitDate = new Date().toISOString().split('T')
        return splitDate[0] + ' ' + splitDate[1].slice(0, 8)
    }
}