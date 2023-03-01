const mongoose = require('mongoose')

function connect() {

    mongoose.connect('mongodb+srv://.nfdkbsp.mongodb.net/api-restful')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Conected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}