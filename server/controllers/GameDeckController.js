const GameDecksService = require("../services/gameDecksService");


class GameDeckController {

    static async apiGetAllGameDecks(req,res,next){
        try {
            const gameDecks = await GameDecksService.getAllGameDecks();
            if(!gameDecks){
                res.status(404).json("Il n'y a aucun jeux de cartes")
            }
            res.json(gameDecks);
        } catch (error) {
            res.status(500).json({error:error})
        }
    }

    static async apiGetGameDeckById(req,res,next){
        try {
            let id = req.params.id 
            const gameDeck = await GameDecksService.getGameDeckById(id);
            if(!gameDeck){
                res.status(404).json("Ce jeu de cartes n'existe pas")
            }
            res.json(gameDeck);
        } catch (error) {
            res.status(500).json({error:error})
        }
    }

}

module.exports = GameDeckController ;