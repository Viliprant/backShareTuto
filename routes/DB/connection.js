const mongoose = require('mongoose');

const urlDB = process.env.URL_MONGODB

module.exports = {
    connection: (resolve, reject) =>{
        mongoose.connect(urlDB,
            { useNewUrlParser: true,
              useUnifiedTopology: true })
            .then(resolve)
            .catch(reject)
    }
}
