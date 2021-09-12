const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://coduza:xsi0xKjtMEs3O19Q@cluster0.bqqwq.mongodb.net/mernbase2?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

let conn = mongoose.connection
conn.on('connected', function () {
    console.log("Successfully connected to the cloud database")
})
conn.on('disconnected', function () {
    console.log("Disconnected from the cloud database")
})

conn.on('error', function (error) {
    console.error.bind(console, 'Database connection error: ' + error)
})

module.exports = conn