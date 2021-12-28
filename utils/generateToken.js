const jwt = require('jsonwebtoken')

module.exports.generateToken = function (payload) {

    const privateKey = process.env.JWT_SECRET

    let token = jwt.sign(payload, privateKey, { expiresIn: "1d"})

    return token
}