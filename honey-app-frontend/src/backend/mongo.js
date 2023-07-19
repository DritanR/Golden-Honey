const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://GoldenHoney:GoldenHoney2004@cluster0.5imxbrj.mongodb.net/?retryWrites=true&w=majority")
.then (() => {
    console.log('mongodb connected successfully')
})
.catch (() => {
    console.log('failed')
})

const newSchema = new mongoose.Schema ({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const collection = mongoose.model('collection', newSchema)

module.exports = collection