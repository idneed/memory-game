const mongoose = require("mongoose");
const {Schema} = mongoose;

const gameCardsSchema = new Schema({name:String,img_url:String})

const gameDeckSchema = new Schema({
    name:String,
    cards:[gameCardsSchema]
})

const GameDeckModel = mongoose.model("GameDeck",gameDeckSchema,"GameDecks")

module.exports = GameDeckModel