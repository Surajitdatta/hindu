const mongoose = require("mongoose")
const subscribeSchema = mongoose.Schema(
    {
        email:{
            type: String,
            required: [true, "Please enter email to subscribe"]
        }
    },
    {
        timestamps: true
    }
)

const Subscribe  = mongoose.model("Subscribe", subscribeSchema)
module.exports = Subscribe