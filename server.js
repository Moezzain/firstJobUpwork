// :::::Start with imports::::
//__Express framework import__
const express = require('express');
//__Path manipulation module__
const path = require('path');
//__Logger__
const {logMessage, Info} = require('./Services/loggingService');
//__used to access of the .env file__
require('dotenv').config();
//__File upload handling__
const fileUpload = require('express-fileupload');
//__CORS Handling__
const cors = require('cors');
//__used to parse the body of the requests to a JSON format for easier handeling of the data__
const BodyParser = require('body-parser');

//__Controlers__
const APIcontrollers = require('./Controlers/API_Controlers');

// :::::Creat and Start Express App:::::
const app = express();

// :::::Set React Static File Directory:::::
const ReactBuildLocation = process.env.REACT_BUILD_APP;
const ExelSaveLocation = process.env.EXCEL_SAVE_DIR;

//__listen to specific port that application will be working on__
//__PORT specified in the .env file__
app.listen(process.env.PORT || 8080, () =>
  logMessage(Info, `Listening on port ${process.env.PORT || 8080}!`),
);

//__requests body parsing handelers__
app.use(BodyParser.json()); // support json encoded bodies
app.use(BodyParser.urlencoded({extended: true})); // support url_encoded bodies
// middleware
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload()); // file upload api

//__React Static Files__
app.use(express.static(path.join(__dirname, 'build');

// :::::::::Routes::::::::
//__React App__
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//__Appinformations CRUD__
app.get('/appinformations/:id', APIcontrollers._appinformations_Read_); //Read
app.get('/appinformations', APIcontrollers._appinformations_Read_); //Read all
app.post('/appinformations', APIcontrollers._appinformations_Creat_); //Creat
app.put('/appinformations', APIcontrollers._appinformations_Update_); //Update
app.delete('/appinformations/:id', APIcontrollers._appinformations_Delete_); //Delete
app.delete('/appinformations', APIcontrollers._appinformations_Delete_); //Delete //Error Handling

//__Categories CRUD__
app.get('/categories/:id', APIcontrollers._categories_Read_); //Read
app.get('/categories', APIcontrollers._categories_Read_); //Read all
app.post('/categories', APIcontrollers._categories_Creat_); //Creat
app.put('/categories', APIcontrollers._categories_Update_); //Update
app.delete('/categories/:id', APIcontrollers._categories_Delete_); //Delete
app.delete('/categories', APIcontrollers._categories_Delete_); //Delete //Error Handling

//__upload excelController__
app.post('/uploadExel', APIcontrollers._excelUpload_Post_);

//__Handeling React Routes
app.get('*', function(req, res) {
  // res.sendFile(path.join(ReactBuildLocation, 'index.html')); //When having multible pages at the react app
  res.redirect('/');
});
