const mongoose = require("mongoose")

function ConnectToDatabase() {
    mongoose.connect('mongodb+srv://riosbergduttra:ITT4NWvq89BBJQS6@usuarios.ukk0efb.mongodb.net/',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("mongo db conectado")
    ).catch((err) => {
        return console.log(`erro na conexão ${err}`)    
    })
}

module.exports = ConnectToDatabase