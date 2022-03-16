const mongoose = require("mongoose");
const {Schema} = mongoose;

const gameTimeRecordsSchema = new Schema({
    username:String,
    time:String
})

const GameTimeRecordsModel = mongoose.model("GameTimeRecordsModel",gameTimeRecordsSchema,"TimeRecords");

module.exports = GameTimeRecordsModel ;