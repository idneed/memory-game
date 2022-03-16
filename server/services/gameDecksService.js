const GameDeckModel = require("../models/GameDeckModel")


class GameDecksService {


    static async getAllGameDecks(){
        try {
            const gameDecks = await GameDeckModel.find();
            return gameDecks
        } catch (error) {
            console.log(`Impossible de récupérer les jeux de cartes ${error}`)
        }
    }

    static async getGameDeckById(id){
        try {
            const gameDeck = await GameDeckModel.findById({_id:id});
            return gameDeck
        } catch (error) {
            console.log(`Impossible de récupérer le jeux de cartes ${error}`)
        }
    }

    
}

module.exports = GameDecksService ;