const  express =  require("express");
const GameDeckController = require("../controllers/GameDeckController");
const router = express.Router();

router.get('/',GameDeckController.apiGetAllGameDecks)
router.get('/:id',GameDeckController.apiGetGameDeckById)

module.exports = router ;