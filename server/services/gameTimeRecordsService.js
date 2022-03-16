const GameTimeRecordsModel = require('../models/GameTimeRecordsModel');

class GameTimeRecordsServices {

    static async getBestTimeRecords(){

        try {
            const timeRecords = GameTimeRecordsModel.find().sort('time').limit(10);
            return timeRecords ;
            
        } catch (error) {
            console.log(`Impossible de récupérer les timeRecords ${error}`)
        }
    }

    static async createTimeRecord({username,time}){
        try {

            const newTimeRecord = {
                username,
                time
            }

            const response = await new GameTimeRecordsModel(newTimeRecord).save();
            return response ;
            
        } catch (error) {
            console.log(`Impossible de créer un timeRecord ${error}`)
        }
    }

}

module.exports = GameTimeRecordsServices ;