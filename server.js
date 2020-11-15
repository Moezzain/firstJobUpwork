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
app.use(express.static(path.join(__dirname, ReactBuildLocation)));

// :::::::::Routes::::::::
//__React App__
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ReactBuildLocation, 'index.html'));
});

//__upload page__
app.post('/UploadCSV', APIcontrollers._excelUpload_Post_);
app.post('/UploadText', APIcontrollers._excelTextUpload_Post_);
app.post('/UploadVariable', APIcontrollers._excelVariableUpload_Post_);

app.get('/getHistoryUploaded', APIcontrollers.__History_Uploaded_Files_Read_); //Read all
app.get('/clearDatabase', APIcontrollers._clearDatabase_Read_); //Read all
app.get('/clearAllMetadata', APIcontrollers._clearAllMetadata_Read_); //Read all
app.get('/ExportAllData', APIcontrollers._ExportAllData_Read_); //Read all
app.get('/DataSheetFormat', APIcontrollers._DataSheetFormat_Read_); //Read all
app.get('/ParagraphSheetFormat', APIcontrollers._ParagraphSheetFormat_Read_); //Read all
app.get('/VariableSheetFormat', APIcontrollers._VariableSheetFormat_Read_); //Read all

//__Data View page__
app.get('/getResults/:id', APIcontrollers._getResults_Read_); //Read all
app.get(
  '/getDataForSubSclae/:subScaleId',
  APIcontrollers._getDataForSubSclae_Read_,
); //If want to get by subscale
app.get('/getDataForSubSclae', APIcontrollers._getDataForSubSclae_Read_); //If want to get all the data infront

//__Handeling React Routes
app.get('*', function(req, res) {
  // res.sendFile(path.join(ReactBuildLocation, 'index.html')); //When having multible pages at the react app
  res.redirect('/');
});
