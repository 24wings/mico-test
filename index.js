var os = require('os');
let co = () => ({
    date: new Date,
    os: os.cpus()
})
module.exports = co;