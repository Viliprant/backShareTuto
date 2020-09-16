const mongoose = require('mongoose');

const urlDB = 'mongodb://localhost:27017'

module.exports = {
    connection: (resolve, reject) =>{
        mongoose.connect(urlDB,
            { useNewUrlParser: true,
              useUnifiedTopology: true })
            .then(resolve)
            .catch(reject)
    }
}
