const mongoose = require('mongoose')

const modelSchema = mongoose.Schema(
    {
        board : {
            type : String,
            requied : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('board', modelSchema)