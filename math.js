var os = require('os');
module.exports = function math(options) {

    this.add('role:math,cmd:sum', function sum(msg, respond) {
        respond(null, { answer: msg.left + msg.right, os: os.cpus() })
    })

    this.add('role:math,cmd:product', function product(msg, respond) {
        respond(null, { answer: msg.left * msg.right, os: os.cpus() })
    })

    this.wrap('role:math', function(msg, respond) {
        msg.left = Number(msg.left).valueOf()
        msg.right = Number(msg.right).valueOf()
        this.prior(msg, respond)
    })

}