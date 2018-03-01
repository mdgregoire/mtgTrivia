const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));  //jQuery line
app.use(bodyParser.json()); // NEEDED FOR ANGULARJS

app.use(express.static('server/public'));

const cardRouter = require('./routers/cardRouter');
app.use('/card', cardRouter);

// const playerRouter = require('./routers/playerRouter');
// app.use('/player', playerRouter);

app.listen(PORT, function(){
  console.log(`server listening on port ${PORT}`);
});//end app listen
