const  express =  require("express");
const GameTimeRecordsController = require("../controllers/GameTimeRecordsController");


const router = express.Router();

router.get('/',GameTimeRecordsController.apiGetBestTimeRecords);
router.post('/',GameTimeRecordsController.apiCreateTimeRecords);

module.exports = router ;