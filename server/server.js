require('dotenv').config();
const express = require('express')
const cors = require('cors')

const Db =  require('./db');
const gameDecksRouter = require('./routes/gameDecksRouter')
const gameTimeRecordsRouter = require('./routes/gameTimeRecordsRouter');



Db.connect("mongodb://memo-game-db:27017/memo-game")
.catch(e=>console.log("connection échoué: "+e))

const app = express();
const port = 5000;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
    res.setHeader('Content-Type', 'application/json');
    next();
  });


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:'*'}))
  

app.use("/api/gamedecks/",gameDecksRouter)
app.use("/api/timeRecords/",gameTimeRecordsRouter)


app.get("/", (req, res) => {
    res.send(`<h1>Bienvenue sur l'api nodejs mvc de memo-game!</h1>`)
});


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
