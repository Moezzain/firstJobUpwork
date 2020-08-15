// :::::Start with imports::::
//__Express framework import__
const express = require('express');
//__used to access of the .env file__
require('dotenv').config();
//__used to parse the body of the requests to a JSON format for easier handeling of the data__
const BodyParser = require('body-parser');

//__Controlers__
const APIcontrolers = require('./Controlers/API_Controlers');

// :::::Creat and Start Express App:::::
const app = express();
//__listen to specific port that application will be working on__
//__PORT specified in the .env file__
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`),
);

//__requests body parsing handelers__
app.use(BodyParser.json()); // support json encoded bodies
app.use(BodyParser.urlencoded({extended: true})); // support url_encoded bodies

// :::::::::Routes::::::::
//__Test Running__
app.get('/Test', (req, res) => {
    let ret = {};
    ret.Succ = "True";
    res.send(ret);
});

//__Refresh Service list__
app.get('/RefreshServicesList', APIcontrolers._Refresh_ServicesList);

//__Login check credentilas route__
app.post('/login', APIcontrolers._checkLoginCredentials_);