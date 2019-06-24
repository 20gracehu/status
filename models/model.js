//I haven't done anything with this cause idk how oops

const mongoose = require("./db.js");

const historySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    past: Array
})

const History = mongoose.model('History', historySchema);

module.exports = History;