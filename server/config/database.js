const mongoose = require('mongoose')
const port = process.env.PORT || 3001;

const databaseConnection = () => {
    mongoose.connect(process.env.DB || 3001,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
}

module.exports = databaseConnection