const express = require('express');
const collection = require('./mongo')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req,res) => {

})

app.post("/", async (req, res) => {
    const {email, password} = req.body

    try {
        const check = await collection.findOne({email: email})

        if (check) {
            res.json('This user alredy exists')
        }
        else {
            res.json('This use does not exist')
        }
    }
    
    catch {
        res.json('error')
    }
})

app.post("/signup", async (req, res) => {
    const {email, password} = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({email: email})

        if (check) {
            res.json('exists')
        }
        else {
            res.json('does not exist')
            await collection.insertMany([data])
        }
    }
    
    catch {
        res.json('error')
    }
})

app.listen(8000, () => {
    console.log('listening on port 8000')
})