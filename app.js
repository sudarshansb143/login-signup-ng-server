const express = require("express")

const morgan = require("morgan")

const cors = require("cors")

require("dotenv").config()

const generateToken = require("./utils/generateToken").generateToken

const app = express()

const PORT = process.env.PORT

app.use(morgan('dev'))

app.use(cors())

app.use(express.json())

app.get('/home', (req, res) => res.send("OK"))

app.post("/login", (req, res) => {

    let {username, password} = req.body

    if (username === "admin" && password === "123") {
        let user = {
            username,
            password,
            role: "admin"
        }
        let token = generateToken(user)
        res.status(200).json({
            status: true,
            data: {
                token
            }
        })
    } else {
        res.status(400).json({
            status: false,
            message: "please provide a valid data"
        })
    }

})

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`))