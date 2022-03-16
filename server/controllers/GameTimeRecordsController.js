const gameTimeRecordsService = require('../services/gameTimeRecordsService')


class GameTimeRecordsController {

    static async apiGetBestTimeRecords(req,res,next){
        try {
            const timeRecords = await gameTimeRecordsService.getBestTimeRecords();
            if(!timeRecords){
                res.status(404).json("Il n'y a aucun timeRecords")
            }
            res.json(timeRecords); 
        } catch (error) {
            res.status(500).json({error:error})
        }
    }

    static async apiCreateTimeRecords(req,res,next){
        try {
            const timeRecords = await gameTimeRecordsService.createTimeRecord(req.body);
            res.status(201).json(timeRecords); 
        } catch (error) {
            res.status(500).json({error:error})
        }
    }

}

module.exports = GameTimeRecordsController ;